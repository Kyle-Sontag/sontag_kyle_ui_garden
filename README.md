# Components - Kyle Sontag

## Overview

React TypeScript component library with automated code quality checks and pre-commit hooks. Built with Storybook, featuring 13 components with comprehensive testing and linting.

## Included Components

  - Button
  - Label
  - Text
  - Img
  - Card
  - HeroImage
  - RadioButton
  - DropDown
  - Table
    * TableHeader
    * TableRow
    * TableCell
    * TableFooter

## Prerequisites
  - Docker Desktop
  - Node.js
  - Git

## Quality Tools for Code

### Husky Pre-commit
Runs before every commit:
  - Prettier format
  - ESLint checks
  - Unit tests

### Quality Commands

#### Format Code
```bash
npm run format
```

#### Check Format
```bash
npm run format:check
```

#### Run Linter
```bash
npm run lint
```

#### Fix Lint Issues
```bash
npm run lint:fix
```

## CI/CD Pipeline
GitHub Actions that run automatically on push:
  - Formatting checks
  - Linting
  - Unit Tests
  - Storybook build

## Running the Application With Docker

### Build Docker Image
```bash
docker build -t sontag_kyle_coding_assignment13 .
```

### Run Container
```bash
docker run -d -p 8018:8018 --name sontag_kyle_coding_assignment13 sontag_kyle_coding_assignment13
```

### Access the Application

Open browser and navigate to http://localhost:8018

### Stop the Container
```bash
docker stop sontag_kyle_coding_assignment13
```

### Remove the Container
```bash
docker rm sontag_kyle_coding_assignment13
```

### View Container While Running
```bash
docker ps
```

## Local Development

### Run Storybook
```bash
npm run storybook
```

### Run Tests
```bash
npm test
```

### Build Application
```bash
npm run build-storybook
```