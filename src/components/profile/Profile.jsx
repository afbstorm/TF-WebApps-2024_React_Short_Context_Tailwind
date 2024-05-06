import {useContext, useState} from "react";
import {StoreContext} from "../../contexts/storeContext.jsx";
import {Link} from "react-router-dom";

const Profile = () => {

    const { user } = useContext(StoreContext);
    const [userData, setUser] = user;
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleRevealPassword = () => {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <section>
            <h3>{userData.username}&#39;s profile</h3>

            <p>Email : {userData.email}</p>

            <button onClick={handleRevealPassword}>
                {passwordVisible ? 'Hide password' : 'Show password'}
            </button>

            {
                passwordVisible ?
                    <p>
                        Password : {userData.password}
                    </p>
                    : null
            }

            <div>
                <p>{userData.username} has {userData.todoIds.length} todos</p>

                <Link to={`/todos/${userData.id}`}>
                    Go to my todo list
                </Link>

            </div>
        </section>
    )
}
export default Profile;
