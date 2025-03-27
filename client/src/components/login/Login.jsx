import { Link, useNavigate } from "react-router"
import { useLogin } from "../../api/authApi"
import { useActionState, useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export default function Login() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login } = useLogin();

    const loginHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);
        console.log(values.email, values.password);
        if (!values.email ||!values.password) {
            return alert("All fields are required");
        }

        
        try {
            const authData = await login(values.email, values.password);

        userLoginHandler(authData);

        navigate('/order-list');
        } catch (error) {
            console.log(error);
            navigate('/login');
        }
    };
    const [_, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });


    return (
        <>
            <div className="w3-row-padding" id="about">
                <section id="login-page" className="auth">
                    <form id="login" action={loginAction}>

                        <div className="w3-display-container">
                            <div className="brand-logo"></div>
                            <h1>Login</h1>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="maria@gmail.com" />

                            <label htmlFor="login-pass">Password:</label>
                            <input type="password" id="login-pass" name="password" />
                            <input type="submit" className="btn-submit" value="Login" disabled={isPending} />
                            <p className="field">
                                <span>If you don't have profile click <Link to="/register">here</ Link></span>
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}