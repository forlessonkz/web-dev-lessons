import './signUp.css';

export default function SignUp() {
    return(
        <div className="sign-up">
            <div className="form-container">
                <div className="top">
                    <div className="logo">
                        <img src="/images/logo.png" alt="" />
                    </div>
                    <p>
                        Sign up to see photos and videos from your friends.
                    </p>
                    <button>
                        <img src="" alt="" />
                        Log in width Facebook
                    </button>
                    <div className="divider">
                        <span>
                            OR
                        </span>
                    </div>
                    <div className="form">
                        <input type="text" placeholder = 'Mobile Number or Email' />
                        <input type="text" placeholder = 'Password'/>
                        <input type="text" placeholder = 'First and last name'/>
                        <input type="text" placeholder = 'Username'/>
                    </div>
                    <p className="information">
                        People who use our service may have uploaded your contact information to Instagram. <a href="">Learn more</a>
                    </p>
                    <p className="privacy-policy">
                        By signing up, you agree to our 
                        <a href=""> Terms</a>, 
                        <a href=""> Privacy</a> 
                        <a href=""> Policy</a> and 
                        <a href=""> Cookie Policy</a>.
                    </p>
                    <button className="registration">
                        Registation
                    </button>
                </div>
                <div className="mid">
                    Have an accaunt?  
                    <a href=""> Login</a>
                </div>
                <div className="bottom">
                    <p>Install the aplication.</p>
                    <div className="applications-icon">
                        <img src="/images/icons/GP-download.png" alt="" />
                        <img src="/images/icons/microsoft-download.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}