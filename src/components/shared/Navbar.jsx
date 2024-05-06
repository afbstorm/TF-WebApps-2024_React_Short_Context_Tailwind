import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

const Navbar = () => {

    const [isAuth, setIsAuth] = useState(false)

    const nav = [
        {link: '/', text: 'Home'},
        {link: '/register', text: 'Register'},
        {link: '/login', text: 'Login'},
        {link: '/login', text: 'Logout'},
        {link: '/profile', text: 'Profile'},
    ];

    const authNavBar = nav.filter(link => ['Home', 'Profile', 'Logout'].includes(link.text));
    const nonAuthNavBar = nav.filter(link => ['Register', 'Login', 'Home'].includes(link.text));

    const handleLogout = () => {
        localStorage.removeItem('token');
    }

    useEffect(() =>  {
        const checkToken = () => {
            const token = localStorage.getItem('token') ? true : false;
            // const token = !!localStorage.getItem('token');
            setIsAuth(token);
        }

        checkToken();

        window.addEventListener('storage', checkToken);

        return () => {
            window.removeEventListener('storage', checkToken);
        }
    })

    if (isAuth) {
        return (
            <nav>
                <ul>
                    { authNavBar.map((lien, index) => (
                        <li key={index}>
                            <Link to={lien.link} onClick={lien.text === 'Logout' ? handleLogout : null}>{lien.text}</Link>
                        </li>
                    )) }
                </ul>
            </nav>
        )
    }
    return (
        <nav>
            <ul>
                { nonAuthNavBar.map((lien, index) => (
                    <li key={index}>
                        <Link to={lien.link}>{lien.text}</Link>
                    </li>
                )) }
            </ul>
        </nav>
    )
}

export default Navbar;
