export default function Register() {
    return (
        <>
            <div className="w3-row-padding" id="about">
                <section id="register-page" className="content auth">
                    <form id="register">
                        <div className="w3-display-container">
                            <div className="brand-logo"></div>
                            <h1>Register</h1>

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="maria@email.com" />

                            <label htmlFor="pass">Password:</label>
                            <input type="password" name="password" id="register-password" />

                            <label htmlFor="con-pass">Confirm Password:</label>
                            <input type="password" name="confirm-password" id="confirm-password" />

                            <input className="btn-submit" type="submit" value="Register" />

                            <p className="field">
                                <span>If you already have profile click <a href="/login">here</a></span>
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}