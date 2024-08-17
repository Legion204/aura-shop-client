## Frontend Repository

### Project Title

Aura Shop

### Introduction

This is the frontend repository of the project, built with Vite and React. It provides the user interface and interacts with the backend API to deliver a seamless user experience.

### Table of Contents

* [Installation](#installation)
* [Running Locally](#running-locally)
* [Build Process](#build-process)
* [Configuration](#configuration)
* [Dependencies](#dependencies)
* [Contributors](#contributors)

### Installation

To set up the frontend locally, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/Legion204/aura-shop-client.git
cd frontend-repo
```

2. **Install dependencies**:

```bash
npm install
```

### Running Locally

To start the development server and run the frontend locally:

```bash
npm run dev
```

This command will start a local server accessible at `http://localhost:5173` by default.

### Build Process

To create a production build of the frontend:

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

### Configuration

If your project requires environment variables, you can configure them in a `.env` file at the root of the project. Here is an example:

```plaintext
VITE_API_BASE_URL=http://localhost:5000/api
```

### Dependencies

This project uses several key dependencies, including:

* **React**: A JavaScript library for building user interfaces.
* **Vite**: A fast build tool and development server for modern web projects.
* **Axios**: For making HTTP requests to the backend API.

For a full list of dependencies, see the `package.json` file.

### Contributors

* **Riyad** - [GitHub Profile](https://github.com/Legion204)