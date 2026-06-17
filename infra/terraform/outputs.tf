output "s3_bucket" {
  description = "S3 bucket name"
  value       = aws_s3_bucket.website.id
}

output "cloudfront_domain" {
  description = "CloudFront distribution domain"
  value       = aws_cloudfront_distribution.website.domain_name
}

output "cloudfront_id" {
  description = "CloudFront distribution ID"
  value       = aws_cloudfront_distribution.website.id
}
