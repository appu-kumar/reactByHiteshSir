
import {useParams} from 'react-router-dom'

function User(){

    // user api
    const param=useParams();
    return (
        <>
          <p>user::{param.userId}</p>
        </>
    )
}

export default User;