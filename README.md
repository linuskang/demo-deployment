# demo-deployment

A demonstration repository showcasing GitHub Actions CI/CD with Discord notifications and automated deployments.
more
## Features

- ✅ Separate CI workflow for pull requests
- ✅ Automated deployment workflow for main/master branch
- 🧪 Runs tests and builds the application
- 💬 Sends Discord notifications on successful production deployments
- 🚀 Creates GitHub deployments with name "Production"

## Workflows

This repository uses two separate GitHub Actions workflows:

### 1. CI Workflow (`ci.yml`)
- **Trigger**: Runs on pull request events
- **Purpose**: Validates code changes before merging
- **Steps**: Checkout → Setup → Install → Test → Build
- **No notifications**: This is for CI checks only

### 2. Deployment Workflow (`deployment.yml`)
- **Trigger**: Runs on push to `main` or `master` branch
- **Purpose**: Deploys to production (mock deployment to Discord)
- **Steps**: Checkout → Setup → Install → Test → Build → Discord notification → GitHub deployment
- **Notifications**: Sends Discord message on successful deployment

## Setup Instructions

### 1. Configure Discord Webhook

To receive Discord notifications for production deployments:

1. Go to your Discord server settings
2. Navigate to Integrations → Webhooks
3. Create a new webhook or use an existing one
4. Copy the webhook URL
5. Go to your GitHub repository settings → Secrets and variables → Actions
6. Create a new repository secret named `DISCORD_WEBHOOK_URL`
7. Paste your Discord webhook URL as the value

### 2. GitHub Token

The deployment workflow uses the built-in `GITHUB_TOKEN` which is automatically provided by GitHub Actions. No additional configuration needed for deployment creation.

## Project Structure

```
demo-deployment/
├── .github/
│   └── workflows/
│       ├── ci.yml              # CI checks for pull requests
│       └── deployment.yml      # Production deployment workflow
├── index.js                    # Demo application
├── test.js                     # Test file
├── package.json                # Node.js package configuration
└── README.md                   # This file
```

## Workflow Details

### CI Workflow (Pull Requests)

1. **Checkout repository** - Gets the latest code
2. **Setup Node.js** - Installs Node.js environment
3. **Install dependencies** - Runs npm install
4. **Run tests** - Executes test suite
5. **Build application** - Builds the application

### Deployment Workflow (Main Branch)

1. **Checkout repository** - Gets the latest code
2. **Setup Node.js** - Installs Node.js environment
3. **Install dependencies** - Runs npm install
4. **Run tests** - Executes test suite
5. **Build application** - Builds the application
6. **Discord notification** - Sends deployment notification to Discord (on success)
7. **Create GitHub deployment** - Creates a deployment record with name "Production"

## Testing Locally

Run the application locally:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run the application
npm start

# Build
npm run build
```

## Discord Notification Format

When code is merged to the main branch, the Discord bot sends a rich embed message containing:
- Repository name
- Branch name
- Commit SHA (short)
- Commit author
- Commit message
- Timestamp

## GitHub Deployment

Each successful production deployment creates a GitHub deployment with:
- Environment name: `Production`
- Status: Success
- Description: Deployment details

You can view deployments in your repository's "Environments" section on GitHub.
