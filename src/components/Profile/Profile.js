import React, {useContext} from 'react'
import { AuthContext } from '../../Contexts/UserControlContext'

function Profile() {
    const {isLogged, setIsLogged} = useContext(AuthContext)
    if(isLogged === true) {
        return (
            <div>
                <p>Hoşgeldin "kullanıcı"</p>
            </div>
          )
    }
    else {
        return(
            <div>
                <div>Register Today</div>
                <button>Register</button>
                <button>Are you have a account?</button>
            </div>
        )
    }
}

export default Profile