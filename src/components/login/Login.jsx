import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {StoreContext} from "../../contexts/storeContext.jsx";

const Login = () => {

    const { user } = useContext(StoreContext);
    const [userData, setUser] = user;

    const navigate = useNavigate();

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    const handleLogin = (e) => {
        e.preventDefault();

        fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userLogin)
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then(data => {
                if (data.user) {
                    setUser(data.user)
                    localStorage.setItem('token', JSON.stringify(data.user))
                    navigate('/profile')
                }
            })
            .catch(err => console.error(err))
    }

    const handleForm = (key, value) => {
        setUserLogin({...userLogin, [key]: value})
    };

    return (
        <section>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name='email'
                    value={userLogin.email}
                    onChange={(e) => handleForm('email', e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name='password'
                    value={userLogin.password}
                    onChange={(e) => handleForm('password', e.target.value)}/>

                <button type='submit'>Login</button>
            </form>

            <p>
                Don&#39;t have an account yet ?
                <Link to={'/register'}>Register here !</Link>
            </p>

        </section>
    )
}

export default Login;
