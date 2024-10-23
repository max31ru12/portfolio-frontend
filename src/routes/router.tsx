import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/Homepage/HomePage.tsx";
import Todos from "../pages/Todo/Todos.tsx";
import ErrorPage from "../components/Error/Error.tsx";
import Skills from "../pages/Skills/Skills.tsx";
import SkillDetail from "../pages/Skills/SkillDetail.tsx";
import TodoCreateForm from "../pages/Todo/TodoCreateForm.tsx";
import SkillCreateForm from "../pages/Skills/SkillCreateForm.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/skills",
                element: <Skills />
            },
            {
                path: "/skills/:skillId",
                element: <SkillDetail />
            },
            {
                path: "/skills/create",
                element: <SkillCreateForm />,
            },
            {
                path: "/todo",
                element: <Todos />
            },
            {
                path: "/todo/create",
                element: <TodoCreateForm />
            }
        ]
    },
]);

export default router
