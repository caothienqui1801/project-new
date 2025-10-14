import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import UsersList from "./components/UsersList.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/users">Users</Link> |{" "}
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/users" element={<UsersList />} />
                <Route path="/about" element={<About />} />
            </Routes>

        </BrowserRouter >


    );
}