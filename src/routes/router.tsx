import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/Homepage/HomePage.tsx";
import Todo from "../pages/Todo/Todo.tsx";
import ErrorPage from "../components/Error/Error.tsx";
import Skills from "../pages/Skills/Skills.tsx";
import SkillDetail from "../pages/Skills/SkillDetail.tsx";
import TodoCreateForm from "../pages/Todo/TodoCreateForm.tsx";

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
                path: "/todo",
                element: <Todo />
            },
            {
                path: "/todo/create",
                element: <TodoCreateForm />
            }
        ]
    },
]);

export default router
