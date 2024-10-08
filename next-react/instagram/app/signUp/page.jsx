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
                    <button>Log in width Facebook</button>
                    <div></div>
                    <div className="form">
                        <input type="text" placeholder = 'Mobile Number or Email' />
                        <input type="text" placeholder = 'Password'/>
                        <input type="text" placeholder = 'First and last name'/>
                        <input type="text" placeholder = 'Username'/>
                    </div>
                    <p className="information">People who use our service may have uploaded your contact information to Instagram. Learn more</p>
                    <p className="privacy-policy">By signing up, you agree to our Terms , Privacy Policy and Cookie Policy .</p>
                </div>
                <div className="mid"></div>
                <div className="bottom"></div>
            </div>
        </div>
    )
}