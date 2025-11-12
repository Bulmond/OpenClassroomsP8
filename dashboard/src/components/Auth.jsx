import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import axios from "axios";

const Auth = ({ setAuth }) => {
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth();
    if (user || isAuthenticated) {
        navigate("/");
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            const response = await axios({
                method: "post",
                url: "http://localhost:10000/api/auth/login",
                data: {
                    username,
                    password,
                },
            });
            if (response.data) {
                localStorage.setItem("token", response.data.token);
                setAuth(user);
                navigate("/");
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };
    return (
        <div className="flex-center h-screen bg-bg w-full">
            <div className="flex flex-col gap-4 p-8 border border-highlight rounded-lg bg-bg-light">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-2 border border-highlight rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border border-highlight rounded"
                />
                <button
                    onClick={signIn}
                    className="bg-primary text-white p-2 rounded hover:bg-primary-dark"
                >
                    Sign In
                </button>
            </div>
        </div>
    );
};
export default Auth;
