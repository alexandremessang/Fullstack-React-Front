import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Navigation } from 'swiper';

function Signin(props) {
    let navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [isToken, setIsToken] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( !email || !password || !confirmPassword ) return;

        const newUser = {
            email: email,
            password: password,
            password_confirmation: confirmPassword,
            confirm_success_url: '/'
        }

        const fetchObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          };
          fetch("http://localhost:3000/api/v1/auth", fetchObj)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                if (res !== undefined && res !== null && res !== '') {
                    props.setIsLogged(true)
                    navigate("/login")
                }
            });
          e.target.reset();
    }

    return (
        <div className="authPage">
            <div><h1>Inscription</h1></div>
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
                    </div>
                    <div className="form-input">
                        <div className="row-flex form-text">
                            <div><i class="fas fa-unlock-alt"></i></div>
                            <div><label>Confirmer le mot de passe</label></div>
                        </div>
                        <input type="password" required onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <div className="row-flex formBtnGrp">
                        <button className="formSubmitBtn" type="submit">S'inscrire</button>
                        <Link to="/login"><button className="formNewAccountBtn" type="button">J'ai déjà un compte</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signin;