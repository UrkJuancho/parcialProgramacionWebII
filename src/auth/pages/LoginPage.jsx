import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const userSet = 'juanvallejo7601@gmail.com'
  const passwordSet = 1234

  const onLogin = () => {
    if (!email || !password) {
      setError('Email y Contraseña Requeridos.');
      return;
    }

    if (email === userSet || password === passwordSet) {
      setError(null);
      navigate('/', { replace: true });

    } else {
      setError('Datos incorrectos, revisa e intenta nuevamente.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Bienvenido a SuperHeroesWeb!</h2>
        <p className="login-description">A continuacion escribe tus datos e inicia sesion</p>

        {error && <div className="error-message">{error}</div>}

        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>

        <button
          className="login-button"
          onClick={onLogin}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

