export default function Login() {
    return (
        <>
            <div className="w3-row-padding" id="about">
                <section id="login-page" className="auth">
                    <form id="login">

                        <div className="w3-display-container">
                            <div className="brand-logo"></div>
                            <h1>Login</h1>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="sokka@gmail.com" />

                            <label htmlFor="login-pass">Password:</label>
                            <input type="password" id="login-password" name="password" />
                            <input type="submit" className="btn-submit" value="Login" />
                            <p className="field">
                                <span>If you don't have profile click <a href="/register">here</a></span>
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}