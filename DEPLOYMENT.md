# Automatic Deployment Guide for Vercel

This project is configured for automatic deployment to Vercel via GitHub Actions.

## Required Configuration

### 1. GitHub Secrets Environment Variables

You need to configure the following secrets in your GitHub repository:

#### Required Secrets:
- `VERCEL_TOKEN`: Vercel API Token (generated from vercel.com/account/tokens)
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

#### How to obtain these values:

1. **VERCEL_TOKEN**:
   - Go to https://vercel.com/account/tokens
   - Create a new token with appropriate permissions
   - Copy the generated token

2. **VERCEL_ORG_ID** and **VERCEL_PROJECT_ID**:
   ```bash
   # Install Vercel CLI if not already done
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Link your project (run from project root)
   vercel link
   
   # IDs will be displayed or available in .vercel/project.json
   ```

### 2. GitHub Secrets Configuration

1. Go to your GitHub repository
2. Click on "Settings" > "Secrets and variables" > "Actions"
3. Add the three secrets mentioned above

## Pipeline Operation

### Triggers:
- **Push to `main`**: Production deployment
- **Push to `develop`**: Preview deployment
- **Pull Request to `main`**: Preview deployment

### Pipeline Steps:

1. **Build and Test**:
   - Dependencies installation
   - Code linting
   - Project build with Turbo

2. **Deploy Preview** (for PRs and develop branch):
   - Preview version deployment
   - Unique URL generated for each deployment

3. **Deploy Production** (for main only):
   - Production deployment
   - Main domain update

## Project Structure

The project uses:
- **Turborepo** for monorepo management
- **Next.js** for the web application (in `apps/web/`)
- **Vercel** for hosting and deployment

## Vercel Configuration

The `vercel.json` file configures:
- Next.js application build
- Routing to the web application
- Deployment region (Europe - Frankfurt)
- Monorepo-specific build commands

## Useful Commands

```bash
# Local development
npm run dev

# Local build
npm run build

# Lint
npm run lint

# Manual deployment (if necessary)
vercel --prod
```

## Troubleshooting

### Build Error:
- Check that all dependencies are correctly installed
- Ensure the code passes linting

### Deployment Error:
- Check that GitHub secrets are correctly configured
- Check logs in the GitHub "Actions" tab

### Environment Variables:
- Add necessary environment variables in Vercel Dashboard
- Sensitive variables should be added via Vercel interface, not in code
