import Identification from "./components/Identification";
import Login from "./components/Login";
import EmployerSignup from "./components/EmployerSignup";
import JobSeekerSignup from "./components/JobSeekerSignup";
import JobSeekerLandingPage from "./components/JobSeekerLandingPage";
import Alert from "./components/Alert";
import EmployerLandingPage from "./components/EmployerLandingPage";
import Error from "./components/Error";
import AddTask from "./components/AddTask"
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditSkills from "./components/EditSkills";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Identification />
    },
    {
        path : "/login-job-seeker",
        element : <Login role={"Job Seeker"}/>
    },
    {
        path : "/login-employer",
        element : <Login role={"Employer"}/>
    },
    {
        path : "/sign-up-job-seeker",
        element : <JobSeekerSignup />
    },
    {
        path : "/sign-up-employer",
        element : <EmployerSignup />
    },
    {
        path : "/sign-up-successfull",
        element : <Alert />
    },
    {
        path : "/job-seeker-landing-page/:email",
        element : <JobSeekerLandingPage />
    },
    {
        path : "/employer-landing-page/:email",
        element : <EmployerLandingPage />
    },
    {
        path : "/employer/add-task/:email",
        element : <AddTask />
    },
    {
        path : '/update-skills/:email',
        element : <EditSkills />
    },
    {
        path : '*',
        element : <Error />
    }
])

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);