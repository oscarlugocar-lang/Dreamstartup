#!/bin/bash
set -euo pipefail

ENV="${1:-dev}"
AWS_REGION="${2:-us-east-1}"

echo "🚀 Deploying Dreamscape to $ENV environment..."

echo "📦 Installing dependencies..."
npm ci --omit=dev

echo "🏗️  Building project..."
npm run build

echo "☁️  Deploying to S3..."
aws s3 sync dist/ "s3://dreamscape-$ENV-website/" --delete --region "$AWS_REGION"

echo "🧹 Invalidating CloudFront cache..."
CLOUDFRONT_ID=$(aws cloudfront list-distributions --query "DistributionList.Items[?Origins.Items[?DomainName.contains(@,'dreamscape-$ENV-website')]].Id" --output text --region "$AWS_REGION")
if [ -n "$CLOUDFRONT_ID" ]; then
  aws cloudfront create-invalidation --distribution-id "$CLOUDFRONT_ID" --paths "/*" --region "$AWS_REGION" > /dev/null
  echo "✅ Cache invalidated for distribution $CLOUDFRONT_ID"
fi

echo "✅ Deploy complete: https://dreamscape-$ENV.oscarlugocar-lang.com"
