Thank you for the clarification. I will update the README to reflect that the project is a full-stack portfolio and not related to Kasa.

## Full-Stack Portfolio Application - OpenClassrooms P8

### Project Description

This repository houses the complete codebase for **Project 8 (P8)** of the OpenClassrooms Web Developer training program. The project's goal was to design and implement a personal **Portfolio** application using a robust, multi-service architecture, demonstrating proficiency in full-stack development.

The application is structured to separate the public interface, the administrative tools, and the data handling API, utilizing **React & Tailwind for the front and Express & MongoDB for the backend**

### Tech Stack & Structure

The application is a full-stack JavaScript project divided into three distinct services:

| Directory   | Role                           | Description                                                                                                                                                                    |
| :---------- | :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `backend`   | **API Server**                 | Contains the server-side code (likely Node.js/Express) responsible for managing portfolio data (projects, skills, user messages) and serving it to the front-end applications. |
| `frontend`  | **Public Portfolio Site**      | Contains the main, client-facing application code (e.g., built with React or Vue) that showcases the portfolio content to visitors.                                            |
| `dashboard` | **Admin/Management Interface** | Contains a dedicated interface for the author to manage, edit, and update the portfolio content stored in the backend database.                                                |

### Installation and Launch

To run this multi-service application locally, you must set up and launch each service independently in separate terminal windows.

**Prerequisites:**

-   Node.js (LTS version recommended)
-   npm or yarn

#### 1\. Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the API server:
    ```bash
    npm start
    ```
    (The API will typically run on a dedicated port, e.g., `http://localhost:10000`.)

#### 2\. Frontend Setup

1.  Open a new terminal window and navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Launch the public portfolio application:
    ```bash
    npm start
    ```
    (The frontend will typically open in your browser on its own port.)

#### 3\. Dashboard Setup

1.  Open a third terminal window and navigate to the dashboard directory:
    ```bash
    cd dashboard
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Launch the administrative dashboard:
    ```bash
    npm run dev
    ```
    (The dashboard will typically open in your browser on its own port.)

---

_This project was completed as a requirement for the OpenClassrooms Web Developer curriculum._
