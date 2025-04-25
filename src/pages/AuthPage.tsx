import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../app/providers/AuthProvider';
import { motion } from 'framer-motion';

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
      <div className='w-full h-screen flex justify-center items-center bg-gray-100'>
        <motion.form
          onSubmit={handleSubmit}
          className='flex flex-col gap-4'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
        >
          <input
            type="text"
            placeholder="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className='py-4 px-7 rounded-md bg-black text-white'
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='py-4 px-7 rounded-md bg-black text-white'
          />
          <button
            type="submit"
            className='px-5 py-3 rouded-lg bg-white font-bold hover:bg-blue-300 hover:text-white duration-300'
          >
            Submit
          </button>
          <div className='min-h-6'>
            {error && <motion.div
              className='text-red-500 font-bold'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {error}
            </motion.div>}
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default AuthPage;
