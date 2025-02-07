import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div className="sign-up-">
            <form className="sign-up-from" onSubmit={handleSubmit}>
                <div id="wrapper-div">
                    <ul id="sign-up-form">
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <label
                    className="signup-label"
                    >
                        Email
                        <input
                            className="signup-input"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label
                        className="signup-label"
                    >
                        Username
                        <input
                            className="signup-input"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                    <label
                        className="signup-label"
                    >
                        Password
                        <input
                            className="signup-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <div className="floating-btn">
                        <label
                            className="signup-label"
                            id="confirm"
                        >
                            Confirm Password
                            <input
                                className="signup-input"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </label>
                        <button className="sign-up-btn" type="submit">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignupFormPage;