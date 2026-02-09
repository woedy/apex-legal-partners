# Coolify Deployment Guide

This project is configured to deploy on Coolify using Nixpacks.

## Configuration Files

- `nixpacks.toml` - Nixpacks configuration for build and start commands
- `.coolify/deploy.sh` - Optional deployment script

## How It Works

1. **Build Phase**: Runs `npm ci` and `npm run build` to create production build in `dist/`
2. **Start Phase**: Uses `serve` to host the static files on the PORT assigned by Coolify
3. **Port Handling**: The app automatically uses the `$PORT` environment variable set by Coolify

## Deployment Steps

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. In Coolify:
   - Create a new application
   - Connect your Git repository
   - Select the `apex-legal-partners` directory as the base directory
   - Coolify will auto-detect Nixpacks configuration
   - Deploy!

## Environment Variables

Coolify automatically sets:
- `PORT` - The port your app should listen on (auto-assigned)

You can add custom environment variables in Coolify's dashboard if needed (e.g., API keys, backend URLs).

## Notes

- The app uses `serve` package to serve static files with SPA routing support (`-s` flag)
- Port is dynamically assigned by Coolify, no hardcoded ports needed
- Build output is in the `dist/` directory
