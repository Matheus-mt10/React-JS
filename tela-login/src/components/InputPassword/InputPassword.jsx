function InputPassword(params) {
    return(

        <div className="passwordBox">
            <div className="passwordGroup">
                <p>Password</p>
                <a href="#">Forgot Password?</a>
            </div>
            <input type="password" name="inputPassword" id="inputPassword" placeholder="Password" />
        </div>
    )
}

export default InputPassword