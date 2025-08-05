# TaskMaster - Analytics Dashboard

This project is a complete, full-stack analytics dashboard built to look great and work smoothly. It's like a control panel for a digital marketing agency, showing all the important numbers like revenue, user growth, and campaign performance in one clean interface.

It was built using a modern tech stack including React, Vite, Node.js, Express, PostgreSQL, and Drizzle ORM, with a heavy focus on a great user experience.

## ✨ Features

* **Key Metric Cards:** See your total revenue, users, and conversion rates at a glance.
* **Interactive Charts:** Visualize trends with beautiful line, bar, and donut charts.
* **Advanced Data Table:** Sort, filter, and page through all your campaign data.
* **Light & Dark Mode:** Easy on the eyes, day or night.
* **Fully Responsive:** Looks great on your desktop, tablet, or phone.

## 🚀 How to Run This Project on Your Computer

Want to run the dashboard on your own machine? Here’s how:

### 1. Get Your Tools Ready

Make sure you have **Node.js** installed on your computer. If you don't, you can get it from the [official Node.js website](https://nodejs.org/).

### 2. Set Up the Database

This project uses a database to store its data. We'll use a free one from Neon.

* Go to [Neon](https://neon.tech/), sign up for a free account, and create a new project.
* After your project is made, find your database **Connection String**. It's a web address that starts with `postgresql://...`. Copy it!

### 3. Configure the Project

* In the main project folder, create a new file and name it `.env`.
* Open the `.env` file and paste in the following, adding your database address and a random password for the session secret:
    ```
    DATABASE_URL="YOUR_NEON_DATABASE_CONNECTION_STRING_HERE"
    SESSION_SECRET="ANY_RANDOM_SECRET_PASSWORD_YOU_WANT_HERE"
    ```

### 4. Install and Run

Now, open your terminal in the project folder and follow these steps.

* **Install all the code libraries:**
    ```bash
    npm install
    ```
* **Set up your database tables:**
    ```bash
    npm run db:push
    ```
* **Start the backend server (the "kitchen"):**
    *(Keep this terminal running!)*
    ```bash
    npm run dev
    ```
* **Open a second, new terminal and start the frontend website (the "dining area"):**
    ```bash
    npx vite
    ```

That's it! Your terminal will give you a local address like `http://localhost:5173`. Open that in your web browser to see the dashboard.

---

## 🤖 AI Usage Report

This report details how AI was used as a pair-programmer and debugging partner throughout the project's lifecycle, especially during the complex deployment phase.

### AI Tools Used

* **Primary tool:** Google's Gemini
* **Key use cases:**
    * Initial project planning and scaffolding of the full-stack architecture.
    * Generating boilerplate code for React components and server-side routes.
    * Explaining complex concepts like Node.js versions, environment variables, and full-stack deployment.
    * **Intensive Debugging:** This was the most critical use case. The AI helped diagnose and fix a series of difficult issues, including:
        * Incorrect Node.js versions causing syntax errors.
        * Flawed Vercel deployment configurations.
        * Identifying and fixing a corrupted `package-lock.json` file that was causing build failures.

### Sample Prompts (2-3 examples)

Here are a few examples of the kinds of prompts used during our development and debugging process:

1.  "I'm getting a `SyntaxError: Unexpected token '||='` when I run `npm run db:push`. My Node.js version is v14. What does this mean and how do I fix it on Linux?"
2.  "Create a `vercel.json` file for a full-stack project. The backend is in a `/server` folder and the frontend is a Vite app in a `/client` folder. It needs to handle API routes and serve the React app correctly."
3.  "My Vercel deployment failed. The log says `sh: line 1: vite: command not found`. I moved `vite` to dependencies but it still fails. What's wrong?"

### AI vs Manual Work Split

* **AI-generated (65%):** The AI provided the initial project structure, all configuration files (`vercel.json`, `package.json` scripts), boilerplate for components, and the step-by-step logic for debugging all the deployment errors. The entire troubleshooting process was guided by the AI.
* **Manual coding (35%):** My role was to be the hands-on developer. I set up all the external accounts (GitHub, Neon, Vercel), ran the commands provided by the AI, implemented the code suggestions, and most importantly, provided the error logs and screenshots back to the AI. This feedback loop was essential for the AI to understand the problem and provide the correct solution.
* **Customization:** The entire project is a result of customizing the AI's suggestions. While the AI provided the "how-to," I performed the actual implementation, connected my personal accounts, and adapted the code to fit the project's specific needs.
