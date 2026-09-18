# AWS ECR Multi-Environment CI/CD Pipeline

This capstone project demonstrates how to build, tag, and push Docker images to a private Amazon Elastic Container Registry repository using GitHub Actions.

The pipeline supports three environments:

* **Dev:** Triggered from the `dev` branch
* **Staging:** Triggered from the `staging` branch
* **Production:** Triggered from the `main` branch

Pull requests build and validate the Docker image without publishing it. After changes are merged into an environment branch, GitHub Actions authenticates securely to AWS through OpenID Connect, logs into Amazon ECR, and pushes the image with environment-specific tags.

Examples:

```text
dev-latest
staging-latest
prod-latest
prod-<commit-sha>
```

## Technologies

* Amazon ECR
* AWS IAM and GitHub OIDC
* GitHub Actions
* Docker
* Node.js

## Repository

```text
ecr-multi-env-capstone
```

## Workflow

```text
Feature branch → Dev → Staging → Main/Production
```

This project validates practical skills in Docker containerization, AWS ECR management, secure cloud authentication, CI/CD automation, and multi-environment release management.
