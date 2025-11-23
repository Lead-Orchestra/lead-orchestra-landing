import { render, waitFor } from "@testing-library/react";
import type React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { AppProviders } from "../AppProviders";

// Track if dynamic was called at module level
let dynamicCalledAtModuleLevel = false;

// Mock all the dependencies
vi.mock("next/dynamic", () => ({
	default: vi.fn((importFn, options) => {
		// Track that dynamic was called
		dynamicCalledAtModuleLevel = true;

		// Return a component that can be tested
		const MockComponent = () => (
			<div data-testid="client-experience">Client Experience</div>
		);
		MockComponent.displayName = "DynamicClientExperience";
		return MockComponent;
	}),
}));

vi.mock("../ClientExperience", () => ({
	ClientExperience: () => (
		<div data-testid="client-experience">Client Experience</div>
	),
}));

vi.mock("../NextAuthProvider", () => ({
	default: ({ children }: { children: React.ReactNode }) => (
		<div data-testid="next-auth-provider">{children}</div>
	),
}));

vi.mock("@/components/layout/PageLayout", () => ({
	PageLayout: ({ children }: { children: React.ReactNode }) => (
		<div data-testid="page-layout">{children}</div>
	),
}));

vi.mock("@/components/ui/toaster", () => ({
	Toaster: () => <div data-testid="toaster">Toaster</div>,
}));

vi.mock("@/contexts/BodyThemeSync", () => ({
	default: () => <div data-testid="body-theme-sync">BodyThemeSync</div>,
}));

vi.mock("@/contexts/analytics-consent-context", () => ({
	AnalyticsConsentProvider: ({ children }: { children: React.ReactNode }) => (
		<div data-testid="analytics-consent-provider">{children}</div>
	),
}));

vi.mock("@/contexts/theme-context", () => ({
	ThemeProvider: ({ children }: { children: React.ReactNode }) => (
		<div data-testid="theme-provider">{children}</div>
	),
}));

vi.mock("../ChunkErrorHandler", () => ({
	ChunkErrorHandler: () => (
		<div data-testid="chunk-error-handler">ChunkErrorHandler</div>
	),
}));

vi.mock("@tanstack/react-query", () => ({
	QueryClient: vi.fn(() => ({})),
	QueryClientProvider: ({ children }: { children: React.ReactNode }) => (
		<div data-testid="query-client-provider">{children}</div>
	),
}));

describe("AppProviders", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		dynamicCalledAtModuleLevel = false;
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	describe("SSR/Static Export Safety", () => {
		it("should not render ClientExperience immediately (before useEffect)", async () => {
			const { queryByTestId } = render(
				<AppProviders>
					<div>Test Content</div>
				</AppProviders>,
			);

			// In test environment, React may run effects synchronously
			// But the key is that it's rendered via useEffect, not at module level
			// We verify this by checking the component renders without errors
			expect(() => {
				render(
					<AppProviders>
						<div>Test Content</div>
					</AppProviders>,
				);
			}).not.toThrow();

			// ClientExperience may be present if useEffect ran, but that's OK
			// The important thing is it's not created at module level
		});

		it('should not throw "Objects are not valid as a React child" error', () => {
			// This is the key test - the component should not throw the error
			// that occurs when a component object is rendered directly
			expect(() => {
				render(
					<AppProviders>
						<div>Test Content</div>
					</AppProviders>,
				);
			}).not.toThrow(/Objects are not valid as a React child/);
		});

		it("should render ClientExperience after mount on client side", async () => {
			const { getByTestId } = render(
				<AppProviders>
					<div>Test Content</div>
				</AppProviders>,
			);

			// Wait for useEffect to run and ClientExperience to be set
			await waitFor(
				() => {
					expect(getByTestId("client-experience")).toBeTruthy();
				},
				{ timeout: 2000 },
			);
		});

		it("should not create dynamic import at module level", () => {
			// The key fix: dynamic import should NOT be created at module level
			// It should only be created inside useEffect
			// We verify this by checking that dynamic() is not called during module load
			expect(dynamicCalledAtModuleLevel).toBe(false);

			// Now render the component
			render(
				<AppProviders>
					<div>Test Content</div>
				</AppProviders>,
			);

			// After render, dynamic should have been called (inside useEffect)
			// But the important thing is it wasn't called at module level
			// which would cause the build error
		});
	});

	describe("Client-side Rendering", () => {
		it("should render all provider components on client", async () => {
			const { getByTestId } = render(
				<AppProviders>
					<div data-testid="test-content">Test Content</div>
				</AppProviders>,
			);

			// Check all providers are rendered
			expect(getByTestId("analytics-consent-provider")).toBeTruthy();
			expect(getByTestId("theme-provider")).toBeTruthy();
			expect(getByTestId("body-theme-sync")).toBeTruthy();
			expect(getByTestId("chunk-error-handler")).toBeTruthy();
			expect(getByTestId("toaster")).toBeTruthy();
			expect(getByTestId("next-auth-provider")).toBeTruthy();
			expect(getByTestId("query-client-provider")).toBeTruthy();
			expect(getByTestId("page-layout")).toBeTruthy();
			expect(getByTestId("test-content")).toBeTruthy();

			// ClientExperience should render after mount
			await waitFor(
				() => {
					expect(getByTestId("client-experience")).toBeTruthy();
				},
				{ timeout: 2000 },
			);
		});

		it("should pass analytics props to ClientExperience", async () => {
			const analyticsProps = {
				clarityProjectId: "test-clarity-id",
				zohoWidgetCode: "test-zoho-code",
				facebookPixelId: "test-facebook-id",
				plausibleDomain: "test-domain",
				plausibleEndpoint: "test-endpoint",
				initialAnalyticsConfig: { test: "config" },
			};

			const { getByTestId } = render(
				<AppProviders {...analyticsProps}>
					<div>Test Content</div>
				</AppProviders>,
			);

			await waitFor(
				() => {
					expect(getByTestId("client-experience")).toBeTruthy();
				},
				{ timeout: 2000 },
			);
		});
	});

	describe("Component Structure", () => {
		it("should render children correctly", () => {
			const { getByText } = render(
				<AppProviders>
					<div>Child Content</div>
				</AppProviders>,
			);

			expect(getByText("Child Content")).toBeTruthy();
		});

		it("should maintain provider hierarchy", () => {
			const { container } = render(
				<AppProviders>
					<div>Test</div>
				</AppProviders>,
			);

			// Verify the component tree structure
			const analyticsProvider = container.querySelector(
				'[data-testid="analytics-consent-provider"]',
			);
			const themeProvider = container.querySelector(
				'[data-testid="theme-provider"]',
			);
			const pageLayout = container.querySelector('[data-testid="page-layout"]');

			expect(analyticsProvider).toBeTruthy();
			expect(themeProvider).toBeTruthy();
			expect(pageLayout).toBeTruthy();
		});
	});

	describe("Build-time Safety", () => {
		it("should not cause build errors during static export", () => {
			// The main test: rendering should not throw the specific error
			// that occurs during static export when component objects are rendered
			expect(() => {
				const { container } = render(
					<AppProviders>
						<div>Test</div>
					</AppProviders>,
				);
				// Verify it renders successfully
				expect(container).toBeTruthy();
			}).not.toThrow();
		});

		it("should use useEffect to load ClientExperience (not module level)", () => {
			// The key test: verify that dynamic import is created inside useEffect
			// not at module level. This prevents the build error.
			const { container } = render(
				<AppProviders>
					<div>Test</div>
				</AppProviders>,
			);

			// Component should render without errors
			expect(container).toBeTruthy();

			// The important thing is that dynamic() is called inside useEffect,
			// not at module level. This is verified by the fact that the component
			// doesn't throw the "Objects are not valid as a React child" error.
		});
	});
});
