# Creating a Next.js App

This guide will walk you through the process of creating a new Next.js application.

## Prerequisites

- Node.js (version 12 or later)
- npm (comes with Node.js) or Yarn

## Steps to Create a Next.js App

1. Open your terminal or command prompt.

2. Navigate to the directory where you want to create your new Next.js app.

3. Run one of the following commands, depending on your package manager:

   Using npm:
   ```bash
   npx create-next-app@latest
   ```

   Using Yarn:
   ```bash
   yarn create next-app
   ```

4. You'll be prompted to name your project. Enter a name and press Enter.

5. You'll be asked a series of questions about your project setup. Here are the options:

   - Would you like to use TypeScript? (Yes/No)
   - Would you like to use ESLint? (Yes/No)
   - Would you like to use Tailwind CSS? (Yes/No)
   - Would you like to use `src/` directory? (Yes/No)
   - Would you like to use App Router? (Yes/No)
   - Would you like to customize the default import alias? (Yes/No)

   Answer each question according to your preferences.

6. Once you've answered all the questions, the tool will create your Next.js app with the chosen configuration.

7. After the installation is complete, navigate into your new project directory:

   ```bash
   cd your-app-name
   ```

8. Start the development server:

   Using npm:
   ```bash
   npm run dev
   ```

   Using Yarn:
   ```bash
   yarn dev
   ```

9. Open your browser and visit `http://localhost:3000` to see your new Next.js app in action!

## Next Steps

- Explore the project structure
- Start building your components in the `pages` or `app` directory (depending on your router choice)
- Refer to the [Next.js documentation](https://nextjs.org/docs) for more advanced features and configurations

Happy coding with Next.js!
