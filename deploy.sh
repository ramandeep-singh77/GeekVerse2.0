#!/bin/bash

# GEEKVERSE 2.0 Deployment Script
echo "🚀 Starting GEEKVERSE 2.0 deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build files are in the 'dist' directory"
    echo ""
    echo "🌐 Ready for deployment!"
    echo "   - Upload 'dist' folder to your hosting service"
    echo "   - Or use: vercel --prod"
    echo "   - Or push to GitHub for automatic Vercel deployment"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi