# Frontend for Hospital Management System

This Angular project provides a web-based interface for managing hospital operations, including patient records, appointments, and medical inventory. The application features role-based access control for administrators and doctors.

## Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
- [Getting Started](#getting-started)
- [Routing Structure](#routing-structure)
- [Development](#development)
- [Testing](#testing)
- [Built With](#built-with)
- [Contributing](#contributing)

## Features

- **Role-based Access**: Separate dashboards for Admins and Doctors
- **Patient Management**: Create, view, and update patient records
- **Appointment Scheduling**: Manage medical appointments
- **Medicine Inventory**: Track and manage medical supplies
- **Authentication**: Secure login for admin and doctor roles

## Live Demo

Check out the live demo of the application: [Hospital Management System](https://angular-spring-hms.netlify.app)

## Getting Started

### Prerequisites

- Spring Boot (configured for the backend)
- Angular CLI 19.1.7

```bash
npm install -g @angular/cli@19.1.7
```

## Installation

Clone the repository
To clone the repository to your local machine:

1. Copy the repository URL from GitHub.
2. Open a terminal and run the following command:

```bash
git clone https://github.com/<your-username>/hospital-management-system-frontend.git
```

3. Navigate into the project directory:

```bash
cd hospital-management-system-frontend
```

## Install Frontend Dependencies

To install the required dependencies for the frontend project:

```bash
npm install
```

## Routing Structure

![Hospital Management System Logo](./public/assets/image.png)

## Development

Development Server

```bash
ng serve
```

Runs the app in development mode at http://localhost:4200

## Code Scaffolding

Generate new components:

```bash
ng generate component component-name
```

## Build

```bash
ng build
```

Builds the application for production in dist/ directory

## Testing

### Unit Tests

```bash
ng test
```

Runs Karma test runner

### End-to-End Tests

```bash
ng e2e
```

_Note: Requires configuration of preferred E2E testing framework_

## Built With

1. Angular 19.1.7
2. Angular Router
3. TypeScript
4. RxJS

## Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/new-component)
3. Commit changes (git commit -m 'Add new component')
4. Push to the branch (git push origin feature/new-component)
5. Open a pull request

```bash
This structure provides:
- Clear feature overview
- Quick start instructions
- Detailed routing documentation
- Standard Angular development workflows
- Contribution guidelines
- Visual organization with tables and code blocks

You can customize the [Built With] section to include any additional libraries or tools used in your project.
```
