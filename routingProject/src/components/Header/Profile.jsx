import {useContext} from 'react'
import UserContext from '../UserContext'

function Profile(){

    const {user}=useContext(UserContext);
    return (
        <>
           <p> LoggedIn::{user.userName}</p>
        </>
    )
}

export default Profile;
