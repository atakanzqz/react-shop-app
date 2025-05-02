import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Contexts/UserControlContext';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { isLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate('/login');
    }
  }, [isLogged, navigate]);

  if (isLogged) {
    return (
      <div>
        <p>Hoşgeldin "kullanıcı"</p>
      </div>
    );
  } else {
    return (
      <div>
        <div>Register Today</div>
        <button>Register</button>
        <button>Are you have a account?</button>
      </div>
    );
  }
}

export default Profile;
