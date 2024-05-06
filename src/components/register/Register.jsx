import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const Register = () => {

    const navigate = useNavigate(); // navigate('/login')
    const [userRegister, setUserRegister] = useState({
        email: '',
        password: '',
        username: ''
    });

    const handleRegister = (e) => {
        e.preventDefault();

        fetch('/api/users/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userRegister)
        })
            .then(res => {
                if (res.ok) {
                    navigate('/login')
                }
            })
            .catch(err => console.error(err))
    }

    // key va être le nom de l'input et le nom de la propriété du state
    // value va être la valeur a insérer dans le state
    const handleForm = (key, value) => {
        // On appel le setter du state, on spread dans le state et on vient récupérer
        // la clé du state équivalente au nom de l'input et on y injecte la valeur de cet input
        setUserRegister({...userRegister, [key]: value})
    }

    return (
        <section>
            <form onSubmit={handleRegister}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={userRegister.email}
                    onChange={(e) => handleForm('email', e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={userRegister.password}
                    onChange={(e) => handleForm('password', e.target.value)}
                />
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={userRegister.username}
                    onChange={(e) => handleForm('username', e.target.value)}
                />

                 <button type='submit'>Register</button>
            </form>

            <p>
                Already registered ?
                <Link to={'/login'}>Login here !</Link>
            </p>
        </section>
    )
}

export default Register;
