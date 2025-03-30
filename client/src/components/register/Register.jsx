import { Link } from "react-router"
import { useContext } from "react";
import { useRegister } from "../../api/authApi";

import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router";

export default function Register() {

    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useContext(UserContext)

    const registerHandler = async (formData) => {
        const { email, password, rePassword } = Object.fromEntries(formData);
        console.log(Object.fromEntries(formData));

        //const confirmPassword = formData.get('confirm-password');

        if (password !== rePassword) {
            alert('Passwords do not match');
            return;
        }
        if (!password || !email || !rePassword) {
            alert('All fields are required');
            return;
        }

        const authData = await register(email, password);

        userLoginHandler(authData);

        navigate('/');
    }
    return (
        <>
            <div className="w3-row-padding" id="about">
                <section id="register-page" className="content auth">
                    <form id="register" action={registerHandler}>
                        <div className="w3-display-container">
                            <div className="brand-logo"></div>
                            <h1>Register</h1>

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="maria@email.com" />

                            <label htmlFor="pass">Password:</label>
                            <input type="password" name="password" id="register-password" />

                            <label htmlFor="con-pass">Confirm Password:</label>
                            <input type="password" name="rePassword" id="confirm-password" />

                            <input className="btn-submit" type="submit" value="Register" />

                            <p className="field">
                                <span>If you already have profile click <Link to="/login">here</ Link></span>
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}