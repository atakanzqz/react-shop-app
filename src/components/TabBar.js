import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserControlContext';

function TabBar() {
  const navigate = useNavigate();
  const {isLogged, setIsLogged} = useContext(AuthContext)
  console.log(isLogged)

  return (
    <div className="TabBar">
      <div>
        <p className="Icon" onClick={() => navigate('/')} >SuperSepet</p>
      </div>
      <div>
        {
            isLogged ? 
            <>
                <button onClick={() => navigate('/profile')}>Profile</button>
            </> : 
            <>
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/signup')}>Sign Up</button>
            </>
        }
      </div>
    </div>
  );
}

export default TabBar;
