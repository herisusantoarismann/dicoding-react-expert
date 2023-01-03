const login = (data) => {
  return fetch(`${process.env.REACT_APP_API}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

const register = (data) => {
  return fetch(`${process.env.REACT_APP_API}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

const getUser = (token) => {
  return fetch(`${process.env.REACT_APP_API}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const AuthService = { login, register, getUser };

export default AuthService;
