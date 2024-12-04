# **Next (t3 stack starter) - Project Documentation** - Bishwa Jung Shah

## **Project Overview**
This is a modern web application built with **Next.js** and **TypeScript**. It utilizes various libraries such as **Drizzle ORM** for database handling, **Tailwind CSS** for styling, and **Zustand** for state management. The project includes custom utility functions and hooks for managing different aspects of the application efficiently.

---

## **Table of Contents**

1. [Project Setup](#project-setup)
2. [Dependencies](#dependencies)
3. [Custom Utilities](#custom-utilities)
4. [Custom Hooks](#custom-hooks)
5. [Available Scripts](#available-scripts)
6. [Environment Variables](#environment-variables)
7. [Contributing](#contributing)
8. [License](#license)

---

## **Project Setup**

### 1. Clone the repository:

```bash
git clone <repository_url>
```

### 2. Install dependencies:

```bash
yarn install
```

### 3. Run the development server:

```bash
yarn dev
```

---

## **Dependencies**

The following dependencies are included in this project:

- **@radix-ui/react-slot**: Radix UI components for building accessible UI elements.
- **@t3-oss/env-nextjs**: A utility for managing environment variables in Next.js projects.
- **class-variance-authority**: Utility for managing class names with variance.
- **clsx**: A utility for conditional class name management.
- **dayjs**: A lightweight date library for parsing, validating, manipulating, and formatting dates.
- **drizzle-orm**: ORM for managing database queries with TypeScript support.
- **geist**: Geist UI for building modern user interfaces.
- **lucide-react**: Icon library for React.
- **next**: Framework for building React applications.
- **postgres**: PostgreSQL database client.
- **tailwind-merge**: Tailwind CSS utility for merging class names.
- **tailwindcss-animate**: Tailwind CSS plugin for animations.
- **zod**: Type-safe schema validation library.
- **zustand**: A small, fast state management solution for React.

### **Dev Dependencies:**
- **eslint**: Linting utility for maintaining code quality.
- **prettier**: Code formatter for consistent style.
- **drizzle-kit**: CLI tool for managing Drizzle ORM migrations.
- **typescript**: TypeScript support for static type checking.

---

## **Custom Utilities**

The utility functions are located under the `utils` directory and include the following:

### **1. axios**

Custom wrapper around **Axios** to handle HTTP requests with predefined configurations such as base URL, interceptors, and error handling.

**Example Usage**:

```ts
import axios from '~/utils/axios';

const fetchData = async () => {
  try {
    const response = await axios.get('/api/data');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
```

### **2. date**

Helper functions to manage date formatting, parsing, and manipulation using **Day.js**.

**Example Usage**:

```ts
import { formatDate } from '~/utils/date';

const formattedDate = formatDate(new Date());
```

### **3. error**

Custom utility to handle errors globally, providing standardized error messages and logging.

**Example Usage**:

```ts
import { handleError } from '~/utils/error';

try {
  // some code that might throw an error
} catch (error) {
  handleError(error);
}
```

### **4. string**

A set of string manipulation utilities such as trimming, converting cases, etc.

**Example Usage**:

```ts
import { capitalize } from '~/utils/string';

const capitalizedText = capitalize("hello world");
```

---

## **Custom Hooks**

### **1. useQuery**

A custom React hook that wraps **Axios** requests and provides easy handling of loading, success, and error states. This is useful for API calls.

**Example Usage**:

```ts
import { useQuery } from '~/hooks/useQuery';

const { data, error, isLoading } = useQuery('/api/data');

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;

return <div>{data}</div>;
```

---

## **Available Scripts**

The following scripts are available for this project:

- **`yarn dev`**: Runs the development server in Turbo mode for fast builds.
- **`yarn build`**: Builds the Next.js application for production.
- **`yarn start`**: Starts the production server.
- **`yarn lint`**: Runs the linter to check for code style issues.
- **`yarn lint:fix`**: Automatically fixes linting errors.
- **`yarn check`**: Runs linting and TypeScript checks without emitting files.
- **`yarn db:generate`**: Generates database schema files using Drizzle ORM.
- **`yarn db:migrate`**: Applies database migrations.
- **`yarn db:push`**: Pushes changes to the database schema.
- **`yarn db:studio`**: Opens the database studio for visual interaction with the database.
- **`yarn format:write`**: Formats all code files with Prettier.
- **`yarn format:check`**: Checks if the code is formatted according to Prettier rules.

---

## **Environment Variables**

List any environment variables required for this project. For example:

- `DATABASE_URL`: The URL for connecting to the PostgreSQL database.
- `NEXT_PUBLIC_API_URL`: The base URL for your API.

---

## **Contributing**

1. **Fork the repository**.
2. **Clone your fork** and create a new branch for your changes.
3. **Make your changes** and ensure tests are updated if necessary.
4. **Submit a pull request** to the main repository.

---

### **Additional Notes**:

1. You can add more details about the specific functionality of your utilities and hooks as your application grows.
2. If you want to add API documentation or more usage examples, you can extend sections in the **Custom Utilities** and **Custom Hooks** areas.
