import Home from "../Pages/Home";
import Launch from "../Pages/Launch";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const routes = [
    {
        path: 'launch',
        component: Launch,
        permission: "anyallow"
    },
    {
        path: 'login',
        component: Login,
        permission: "anyallow"
    },
    {
        path: 'register',
        component: Register,
        permission: "anyallow"
    },
    {
        path: 'home',
        component: Home,
        permission: "anyallow"
    },
]