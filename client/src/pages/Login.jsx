import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginSignup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  const [loginUser, { error: loginError }] = useMutation(LOGIN_USER);
  const [addUser, { error: signupError }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (isLogin) {
      try {
        const { data } = await loginUser({
          variables: { email: formState.email, password: formState.password },
        });
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">
            {isLogin ? 'Login' : 'Sign Up'}
          </h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              {!isLogin && (
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
              )}
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="btn btn-block btn-info"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </button>
            </form>

            {isLogin ? (
              loginError && (
                <div className="my-3 p-3 bg-danger text-white">
                  {loginError.message}
                </div>
              )
            ) : (
              signupError && (
                <div className="my-3 p-3 bg-danger text-white">
                  {signupError.message}
                </div>
              )
            )}

            <div className="mt-3">
              <button
                className="btn btn-block btn-secondary"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginSignup;
