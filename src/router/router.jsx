import Home from "../components/home/Home";
import Register from "../components/register/Register";
import Login from "../components/login/Login";
import Profile from "../components/profile/Profile";
import TodoList from "../components/todos/todo-list/TodoList";

const routes = [
    {path: '/', element: <Home />},
    {path: '/register', element: <Register />},
    {path: '/login', element: <Login />},
    {path: '/profile', element: <Profile />},
    {path: '/todos/:id', element: <TodoList />}
];

export default routes;
