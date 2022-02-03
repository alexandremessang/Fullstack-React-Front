import { useState, useEffect } from 'react';
import '../styles/auth.style.css'
import { Link, useNavigate } from 'react-router-dom'
;


function Login(props) {
    let navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isToken, setIsToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (isToken) {
            props.setIsLogged(true)
        }
    }, [isToken]);
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
            email: email,
            password: password
        }

        const fetchObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
          };
          fetch("http://localhost:3000/api/v1/auth/sign_in", fetchObj)
            .then((res) => {
                return res.headers.get('access-token')
            })
            .then((res) => {
                console.log(res);
                if (res !== undefined && res !== null && res !== '') {
                    localStorage.setItem('token', res.token);
                    setIsToken(true)
                    navigate("/")
                }
            });
          e.target.reset();
    }

    return (
        <div className="authPage">
            <div><h1>Connexion</h1></div>
            <div>
                <form onSubmit={(e) => handleSubmit(e)} className="authForm">
                <div className="form-input">
                        <div className="row-flex form-text">
                            <div><i class="fas fa-envelope"></i></div>
                            <div><label>Email</label></div>
                        </div>
                        <input type="email" required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-input">
                        <div className="row-flex form-text">
                            <div><i class="fas fa-unlock-alt"></i></div>
                            <div><label>Mot de passe</label></div>
                        </div>
                        <input type="password" required onChange={(e) => setPassword(e.target.value)}/>
                        <div className="forgottenPwd"><u>Mot de passe oublié ?</u></div>
                    </div>
                    <div className="row-flex formBtnGrp">
                        <button className="formSubmitBtn" type="submit">Se connecter</button>
                        <Link to="/signin"><button className="formNewAccountBtn" type="button">Je m'inscris</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;