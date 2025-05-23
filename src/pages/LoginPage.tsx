import { Link } from 'react-router-dom';
import { useLoginHandler } from '@/utils/loginHandler';
import { IAuthUser } from '@/interfaces/interfaces';

const LoginPage = ({ setAuthUser }: { setAuthUser: (auth: IAuthUser) => void }) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
    isFormValid,
    isAnimating,
    isLoading,
  } = useLoginHandler(setAuthUser);

  return (
    <div className={`h-screen bg-cover bg-center ${isAnimating ? 'fade-out' : 'fade-in'}`} style={{ backgroundImage: "url('/images/authentication-bg.png')" }}>
      <div className="absolute inset-0 flex items-center justify-end pr-60 -mt-12 slide-in-right">
        <div className="glass p-8 rounded-3xl w-full max-w-md mx-4">
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <input
                className="w-full p-3 rounded-3xl border border-white/50 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                id="email"
                name="email"
                placeholder="Email or Username"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <input
                className="w-full p-3 rounded-3xl border border-white/50 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <button
              className="w-full p-3 bg-white text-gray-900 rounded-3xl font-medium hover:bg-opacity-90 transition-all duration-300"
              type="submit"
              id="login-button"
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? 'Loading...' : 'Login'}
            </button>
            <div className="text-center text-white">
              Don't have an account? <Link className="text-blue-300 hover:text-blue-200 underline" to="/create-account">Sign up here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
