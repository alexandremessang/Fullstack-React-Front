import { useState } from 'react';
import { Link } from 'react-router-dom'

function Signin(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        //todo
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