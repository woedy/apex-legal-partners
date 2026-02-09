#!/bin/bash
set -e

echo "Building application..."
npm ci
npm run build

echo "Build completed successfully!"
