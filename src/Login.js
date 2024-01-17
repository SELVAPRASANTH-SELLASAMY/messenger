import './css/login.css';
import usernameIcon from './assets/svg/user.svg';
import passwordIcon from './assets/svg/password.svg';
import loginImage from './assets/svg/loginImage.jpg';
import loginImage2 from './assets/svg/loginImage2.jpg';
function Login(){
    return(
        <div className="Login">
            <div className="login-image"></div>
            <div className="login-form">
                <form action="">
                    <p className="response-message">Something went wrong!</p>
                    <h1>Welcome back!</h1>
                    <p>Please enter your username and password to sign in</p>
                    <div className="input-field">
                        <input type="text" name="username" id='username' required autoComplete='off'/>
                        <label htmlFor="username">
                            <img src={usernameIcon} alt="username" />
                            <span>Username</span>
                        </label>
                        <div className="line"></div>
                        <p className="username-warn">This field is required!</p>
                    </div>
                    <div className="input-field">
                        <input type="password" name="password" id='password' required autoComplete='off'/>
                        <label htmlFor="password">
                            <img src={passwordIcon} alt="password" />
                            <span>Password</span>
                        </label>
                        <div className="line"></div>
                        <p className="username-warn">This field is required!</p>
                    </div>
                    <div className="forget-password">
                        <div className="show-password">
                            <input type="checkbox" id='show-password' className='show-password'/>
                            <p>Show password</p>
                        </div>
                        <a href='#forget-password'>Forgot password?</a>
                    </div>
                    <button>Submit</button>
                </form>
                <img className='login-svg' src={loginImage} alt="" />
                <img className='login-svg2' src={loginImage2} alt="" />
            </div>
        </div>
    );
}
export default Login;