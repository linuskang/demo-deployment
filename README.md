# demo-deployment

A demonstration repository showcasing GitHub Actions CI/CD with Discord notifications and automated deployments.

## Features

- ✅ Automated CI/CD pipeline that runs on every commit
- 🧪 Runs tests and builds the application
- 💬 Sends Discord notifications on successful deployments
- 🚀 Creates GitHub deployments with name "Production-{commit_id}"

## Setup Instructions

### 1. Configure Discord Webhook

To receive Discord notifications:

1. Go to your Discord server settings
2. Navigate to Integrations → Webhooks
3. Create a new webhook or use an existing one
4. Copy the webhook URL
5. Go to your GitHub repository settings → Secrets and variables → Actions
6. Create a new repository secret named `DISCORD_WEBHOOK_URL`
7. Paste your Discord webhook URL as the value

### 2. GitHub Token

The workflow uses the built-in `GITHUB_TOKEN` which is automatically provided by GitHub Actions. No additional configuration needed for deployment creation.

### 3. Workflow Triggers

The workflow automatically runs on every push to any branch. You can modify the trigger in `.github/workflows/deploy.yml`:

```yaml
on:
  push:
    branches:
      - '**'  # Runs on all branches
      # - 'main'  # Uncomment to run only on main branch
```

## Project Structure

```
demo-deployment/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── index.js                 # Demo application
├── test.js                  # Test file
├── package.json             # Node.js package configuration
└── README.md               # This file
```

## Workflow Steps

1. **Checkout repository** - Gets the latest code
2. **Setup Node.js** - Installs Node.js environment
3. **Install dependencies** - Runs npm install
4. **Run tests** - Executes test suite
5. **Build application** - Builds the application
6. **Discord notification** - Sends deployment notification to Discord (on success)
7. **Create GitHub deployment** - Creates a deployment record with name "Production-{commit_id}"

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

The Discord bot sends a rich embed message containing:
- Repository name
- Branch name
- Commit SHA (short)
- Commit author
- Commit message
- Timestamp

## GitHub Deployment

Each successful deployment creates a GitHub deployment with:
- Environment name: `Production-{short_commit_sha}`
- Status: Success
- Description: Deployment details

You can view deployments in your repository's "Environments" section on GitHub.