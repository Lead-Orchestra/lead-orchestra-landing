# 🚀 Production Deployment Guide - Cloudflare Pages

## Overview

This guide explains how to set up **automatic deployments** to Cloudflare Pages in production, so you don't need to manually run Docker builds.

## Two Deployment Methods

### Method 1: GitHub Actions (Recommended) ✅

**Automatic deployments** on every push to your branch.

**How it works:**
1. You push code to GitHub
2. GitHub Actions automatically:
   - Builds the Docker image
   - Extracts the build output
   - Deploys to Cloudflare Pages
3. Your site is live automatically!

**Setup Steps:**

1. **Get Cloudflare API Token:**
   ```bash
   # Go to: https://dash.cloudflare.com/profile/api-tokens
   # Click "Create Token"
   # Use "Edit Cloudflare Workers" template
   # Add these permissions:
   # - Account: Cloudflare Pages:Edit
   # - Zone: Zone:Read (if using custom domain)
   ```

2. **Get Cloudflare Account ID:**
   ```bash
   # Find in Cloudflare Dashboard → Right sidebar
   # Or run:
   wrangler whoami
   ```

3. **Add GitHub Secrets:**
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Add these secrets:
     - `CLOUDFLARE_API_TOKEN` - Your API token from step 1
     - `CLOUDFLARE_ACCOUNT_ID` - Your account ID from step 2

4. **Push to trigger deployment:**
   ```bash
   git push origin cloudflare-deploy
   # GitHub Actions will automatically build and deploy!
   ```

**Workflow File:**
The workflow is already created at `.github/workflows/deploy-cloudflare-pages.yml`

**What triggers it:**
- ✅ Push to `cloudflare-deploy` branch → Production deployment
- ✅ Push to `main` branch → Production deployment (if configured)
- ✅ Pull requests → Preview deployment
- ✅ Manual trigger via "Run workflow" button

---

### Method 2: Cloudflare Pages Git Integration

**Automatic deployments** directly from Cloudflare (no GitHub Actions needed).

**How it works:**
1. Connect your GitHub repo to Cloudflare Pages
2. Cloudflare automatically builds and deploys on every push
3. Uses Cloudflare's build environment (not Docker)

**Setup Steps:**

1. **Go to Cloudflare Dashboard:**
   - Navigate to: Workers & Pages → Create application → Pages → Connect to Git

2. **Connect Repository:**
   - Select your GitHub repository
   - Select the `cloudflare-deploy` branch

3. **Configure Build Settings:**
   ```
   Framework preset: Next.js
   Build command: cd landing && pnpm install && pnpm run build:cf
   Build output directory: landing/.vercel/output/static
   Root directory: /
   ```

4. **Set Environment Variables:**
   - In Cloudflare Pages project settings
   - Add all required environment variables
   - Set for Production and Preview environments

**Pros:**
- ✅ No GitHub Actions setup needed
- ✅ Automatic preview deployments for PRs
- ✅ Built-in deployment history

**Cons:**
- ⚠️ Uses Cloudflare's build environment (not Docker)
- ⚠️ May need to adjust build settings
- ⚠️ Less control over build process

---

## Why Manual Docker Builds Don't Run Automatically

When you manually run:
```bash
docker build -f landing/Dockerfile.pages.standalone -t dealscale-pages .
```

This is a **local build** on your machine. It doesn't automatically deploy because:

1. **No CI/CD configured** - There's no automation to detect code changes
2. **Manual process** - You have to run the command yourself
3. **Local only** - The build happens on your computer, not in the cloud

## Setting Up Automatic Deployments

### Option A: Use GitHub Actions (Recommended)

The workflow file `.github/workflows/deploy-cloudflare-pages.yml` is already created. Just add the secrets:

1. **Add GitHub Secrets** (one-time setup):
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

2. **Push code** - Deployments happen automatically!

### Option B: Use Cloudflare Git Integration

1. Connect repo in Cloudflare Dashboard
2. Configure build settings
3. Push code - Cloudflare builds and deploys automatically

---

## Deployment Flow Comparison

### Manual (Current):
```
You → Run Docker build → Extract output → Deploy manually
```

### Automatic with GitHub Actions:
```
You → Push to GitHub → GitHub Actions → Build → Deploy → Live!
```

### Automatic with Cloudflare Git:
```
You → Push to GitHub → Cloudflare detects → Build → Deploy → Live!
```

---

## Environment Variables

### For GitHub Actions Deployment:

Set in Cloudflare Pages dashboard:
1. Go to Workers & Pages → dealscale project
2. Settings → Environment Variables
3. Add all required variables for Production and Preview

### Required Variables:
- `JWT_SECRET` or `NEXTAUTH_SECRET`
- `DEALSCALE_API_BASE`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `SENDGRID_API_KEY`
- `SENDGRID_SUPPORT_EMAIL`
- And any other environment variables your app needs

---

## Monitoring Deployments

### GitHub Actions:
- View in: GitHub → Actions tab
- See build logs, deployment status
- Get notifications on failures

### Cloudflare Pages:
- View in: Cloudflare Dashboard → Workers & Pages → dealscale
- See deployment history
- View build logs
- Preview deployments for PRs

---

## Troubleshooting

### GitHub Actions Not Running:
1. Check if workflow file exists: `.github/workflows/deploy-cloudflare-pages.yml`
2. Verify secrets are set: Settings → Secrets and variables → Actions
3. Check branch name matches workflow trigger

### Build Fails in GitHub Actions:
1. Check build logs in Actions tab
2. Verify Docker build works locally first
3. Check if secrets are correct

### Cloudflare Deployment Fails:
1. Check build logs in Cloudflare Dashboard
2. Verify build command is correct
3. Check environment variables are set

---

## Quick Start Checklist

- [ ] Get Cloudflare API token
- [ ] Get Cloudflare Account ID
- [ ] Add GitHub secrets (for GitHub Actions method)
- [ ] OR connect repo in Cloudflare Dashboard (for Git Integration method)
- [ ] Set environment variables in Cloudflare Pages
- [ ] Push to `cloudflare-deploy` branch
- [ ] Verify deployment in Cloudflare Dashboard

---

## Next Steps

1. **Choose your method** (GitHub Actions or Cloudflare Git Integration)
2. **Set up the secrets/variables** as described above
3. **Push your code** - deployments will happen automatically!
4. **Monitor** deployments in GitHub Actions or Cloudflare Dashboard

---

*Last updated: Based on current cloudflare-deploy branch setup*




