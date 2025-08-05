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

* **Primary Coding & Deployment Assistant:** Replit AI
* **Conversational & Debugging Assistant:** Google's Gemini
* **UI/UX Design Ideas:** Galileo AI
* **Key use cases:**
    * **Replit AI:** Used for the initial project build-out, code generation, and handling the entire deployment process within its integrated environment.
    * **Gemini:** Used as a conversational partner to debug complex deployment issues on Vercel, explain errors, and generate configuration files like `vercel.json`.
    * **Galileo AI:** Used for inspiration on UI layout and modern component styling.

### Sample Prompts (2-3 examples)

Here are a few examples of the kinds of prompts used during our development and debugging process:

1.  "I want to make this dashboard. Give me an overview of how to do it and generate the initial application."
2.  "Now make the UI perfect so it looks modern. You can use glassy touches and other modern looks."

### AI vs Manual Work Split

* **AI-generated (70%):** AI tools handled the heavy lifting. Replit AI generated the initial full-stack application and managed deployment. Gemini provided the logic and code for debugging critical errors. Galileo AI offered visual templates for the UI.
* **Manual coding (30%):** My role was to direct the AI, integrate the different parts, and perform the hands-on tasks. This included setting up external services (GitHub, Neon, Vercel), running terminal commands, and providing the error logs and screenshots that were essential for the debugging process.
* **Customization:** The final project is a blend of AI-generated code and manual integration. I adapted the AI's suggestions, connected my personal accounts, and steered the project to its final, working state.
