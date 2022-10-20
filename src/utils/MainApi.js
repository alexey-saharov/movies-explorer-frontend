import { MAIN_URL } from './constants';

const getAuthHeader = () => {
  const jwt = localStorage.getItem('jwt');
  return `Bearer ${jwt}`;
}

const getHeaders = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': getAuthHeader(),
  }
};

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.text().then(text => {
    return Promise.reject(`Ошибка: ${JSON.parse(text).message}`);
  });
}

export const register = ( name, email, password ) => {
  return fetch(`${MAIN_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(handleResponse)
};

export const authorize = (email, password) => {
  return fetch(`${MAIN_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  })
    .then(handleResponse)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data;
      }
    })
};

export const getUser = () => {
  return fetch(`${MAIN_URL}/users/me`,{
    headers: getHeaders(),
  })
    .then(handleResponse)
}

export const setUserInfo = (UserInfo) => {
  return fetch(`${MAIN_URL}/users/me`,{
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify(UserInfo),
  })
    .then(handleResponse)
}

export const getMovies = () => {
  return fetch(`${MAIN_URL}/movies`,{
    headers: getHeaders(),
  })
    .then(handleResponse)
}

export const addMovie = (movie) => {
  return fetch(`${MAIN_URL}/movies`,{
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(movie),
  })
    .then(handleResponse)
}

export const deleteMovie = ({ _id }) => {
  return fetch(`${MAIN_URL}/movies/${_id}`,{
    method: 'DELETE',
    headers: getHeaders(),
  })
    .then(handleResponse)
}
