# Components - Kyle Sontag

## Overview

  - React component library built using TypeScript and Storybook. Contains 13 components with default and disabled states.

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

## Running the Application With Docker

### Build Docker Image
```bash
docker build -t sontag_kyle_coding_assignment12 .
```

### Run Container
```bash
docker run -d -p 8083:8083 --name sontag_kyle_coding_assignment12 sontag_kyle_coding_assignment12
```

  - Runs the container locally on port 8083

### Access the Application

  - Open browser and navigate to http://localhost:8083 to see Storybook interface with components

### Stop the container
```bash
docker stop sontag_kyle_coding_assignment12
```

### Remove the Container
```bash
docker rm sontag_kyle_coding_assignment12
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