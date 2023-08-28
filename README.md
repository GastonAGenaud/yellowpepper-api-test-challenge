# API Test Suite README

## Introduction

This README provides instructions on how to set up and run the API test suite for testing various endpoints. The test suite is built using Cypress and is designed to validate the CRUD operations for Pet, Store, and User APIs.

## Setup

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all the dependencies listed in `package.json`.

```bash
npm install
```

## Tech Stack Explanation

### Why Cypress?

Cypress provides a robust, all-in-one testing framework that doesn't require setting up additional libraries and drivers. It offers real-time browser preview during test development, making it easier to develop and debug tests.

### Additional Libraries

- `cypress-mochawesome-reporter` and `cypress-multi-reporters`: For generating and customizing test reports.
- `dotenv`: To manage environment variables.

## How to Run Tests

### Running All Tests Locally

```bash
npm run test-all:local
```

### Opening Cypress Test Runner

```bash
npm run cypress:open:local
```

### Running Only Smoke Tests

```bash
npm run smoke:local:all
```

### Tools for Reports

Run the following command to generate reports:

```bash
npm run generate:report
```

## Custom Commands

The `commands.js` file in the `cypress/support` directory contains custom Cypress commands for API testing. These commands include `apiGet`, `apiPost`, `apiPut`, and `apiDelete`, which handle the respective HTTP methods.

## Features

The test scenarios are written in Gherkin syntax and are located in the `cypress/e2e/features` directory:

- `cypress\e2e\features\pet\ApiTest.feature`
- `cypress\e2e\features\store\ApiTest.feature`
- `cypress\e2e\features\user\ApiTest.feature`

## Author

Gaston Alejandro Genaud

## License

ISC
