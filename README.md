# Job Board

**Job Board** is a platform where companies post job openings, and job seekers apply for positions. Job seekers can share their skill sets, and the platform provides them with relevant job posts and employer information, allowing them to get in touch with potential employers. Employers can post jobs, specifying the job title, description, and required skill set.

## Features

- **Skill-Based Job Matching:** Job seekers receive job post information based on their shared skills.
- **Employer Information:** Job seekers can view employer details and contact them directly.
- **Job Posting for Employers:** Employers can post jobs by providing a job title, description, and required skill set.
- **Efficient Connection:** The platform bridges the gap between job seekers and employers, facilitating direct communication.

## Technologies Used

### Frontend

- **Framework:** React.js
- **HTTP Client:** Axios
- **Routing:** React Router
- **Styling:** Tailwind CSS
- **Bundler:** Parcel

### Backend

- **Framework:** Express.js with Node.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **CORS Handling:** CORS
- **HTTP Client:** Axios

## Project Structure

```bash
Job-Board/
├── frontend/              # Frontend React application
│   ├── src/               # Source code for the frontend
│   │   ├── components/    # React components
│   │   ├── index.html     # Main HTML file
│   │   ├── index.js       # Main JavaScript entry point
│   │   └── index.css      # Main CSS file
│   ├── .postcssrc         # PostCSS configuration
│   ├── package-lock.json  # Lock file for frontend dependencies
│   ├── package.json       # Frontend dependencies and scripts
│   ├── tailwind.config.js # Tailwind CSS configuration
├── backend/               # Backend Express.js server
│   ├── models/            # MongoDB models
│   │   └── exampleModel.js # Example model file
│   ├── server.js          # Server entry point
│   ├── package.json       # Backend dependencies and scripts
│   ├── package-lock.json  # Lock file for backend dependencies
├── README.md              # Project documentation
└── .gitignore             # Files and directories to be ignored by Git
```

## Installation

### Frontend

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

### Backend

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the backend server:
    ```bash
    npm start
    ```

## Usage

1. Make sure both the frontend and backend servers are running. 
   - Start the frontend server by navigating to the `frontend` directory and running:
     ```bash
     npm start
     ```
   - Start the backend server by navigating to the `backend` directory and running:
     ```bash
     npm start
     ```

2. Access the frontend application at `http://localhost:3000` in your web browser.

   **Note:** Currently, the frontend components are fetching results from a backend hosted on Render. If you wish to use a different backend, you will need to update the URL in the frontend code to point to your desired backend server.

3. **For Job Seekers:**
   - Enter your skills on the job seeker interface.
   - The platform will provide you with job post information and employer details based on your skills.
   - You can view and contact employers directly through the provided details.

4. **For Employers:**
   - Use the employer interface to post job openings.
   - Provide the job title, description, and required skill set.
   - The posted job will be visible to job seekers who match the required skills.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Author:** Aman
- **Email:** aman13092003@gmail.com
- **GitHub:** [Aman-Yadav-13](https://github.com/Aman-Yadav-13)
