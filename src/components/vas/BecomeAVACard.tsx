import type React from "react";

interface BecomeAVACardProps {
	onClick?: () => void;
	className?: string;
	ariaLabel?: string;
	title?: string;
	subtitle?: string;
}

const BecomeAVACard: React.FC<BecomeAVACardProps> = ({
	onClick,
	className = "",
	ariaLabel = "Apply to become a Virtual Assistant",
	title = "Apply to Become a Virtual Assistant",
	subtitle = "Join our marketplace of professional VAs. Help businesses scale their lead orchestration and earn revenue remotely.",
}) => {
	return (
		<div
			className={`flex min-h-[220px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-primary border-dashed bg-gradient-to-br from-white via-purple-100 to-white p-6 text-center transition-all hover:shadow-xl dark:border-primary dark:bg-gradient-to-br dark:from-purple-900/70 dark:to-primary/30 ${className}`}
			onClick={onClick}
			tabIndex={0}
			role="button"
			aria-label={ariaLabel}
			onKeyPress={(event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					onClick?.();
				}
			}}
		>
			<span className="mb-2 text-5xl text-primary dark:text-primary">+</span>
			<span className="mb-1 font-semibold text-gray-900 text-lg dark:text-white">
				{title}
			</span>
			<span className="text-gray-600 text-sm dark:text-gray-300">
				{subtitle}
			</span>
		</div>
	);
};

export default BecomeAVACard;
