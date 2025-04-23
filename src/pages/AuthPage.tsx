import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../app/providers/AuthProvider';

const AuthPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const success = login(nickname, password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Неверный логин или пароль');
    }
  }

  return (
    <div>
      <div className='w-full h-screen flex justify-center items-center'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-4'
        >
          <input
            type="text"
            placeholder="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className='py-3 px-6 rounded-md bg-black text-white'
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='py-3 px-6 rounded-md bg-black text-white'
          />
          <button type="submit">Submit</button>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
