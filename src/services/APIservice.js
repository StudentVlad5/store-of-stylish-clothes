import axios from 'axios';
import PropTypes from 'prop-types';
import { BASE_URL } from 'BASE_CONST/Base-const';

// pathParams
async function fetchData(pathParams) {
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathParams}`, //${pathParams}
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      // 'Access-Control-Expose-Headers': 'Content-Range',
      // 'Access-Control-Allow-Header': 'Origin, Content-Type, X-Auth-Token',
    },
  });
  return await axiosInstance.get();
}

async function updateUserData(pathParams, body, file) {
  const formData = new FormData();
  file && formData.set('avatar', file);
  formData.append('userName', body.userName);
  formData.append('surname', body.surname);
  formData.append('email', body.email);
  formData.append('birthday', body.birthday);
  formData.append('location', body.location);
  formData.append('password', body.password);
  formData.append('phone', body.phone);
  // formData.append('role', body.role);

  return await axios.patch(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

async function deleteData(pathParams) {
  const formData = new FormData();
  return axios.delete(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

async function getFavorites(pathParams) {
  const formData = new FormData();
  return axios.post(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

async function getListOfCities(pathParams, body) {
  return await axios.post(`${BASE_URL}${pathParams}`, body, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}
async function getListOfCitiesUP(pathParams, body) {
  return await axios.post(`${BASE_URL}${pathParams}`, body, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

async function getListOfDepartments(pathParams, body) {
  return await axios.post(`${BASE_URL}${pathParams}`, body, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

async function getListOfDepartmentsUP(pathParams, body) {
  return await axios.post(`${BASE_URL}${pathParams}`, body, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

async function getCareList(pathParams) {
  return await axios.get(`${BASE_URL}${pathParams}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

async function makeOrder(pathParams, body) {
  return await axios.post(`${BASE_URL}${pathParams}`, body, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

async function getOrder(pathParams) {
  return await axios.get(`${BASE_URL}${pathParams}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

async function addItemInBasket(pathParams, body) {
  return await axios.post(`${BASE_URL}${pathParams}`, body, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

async function removeItemInBasket(pathParams, body) {
  return await axios.patch(`${BASE_URL}${pathParams}`, body, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

async function getItemInBasket(pathParams) {
  return await axios.get(`${BASE_URL}${pathParams}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

async function updateItemInBasket(pathParams, body) {
  return await axios.post(`${BASE_URL}${pathParams}`, body, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

async function makeEmail(body) {
  return await axios.post(`${BASE_URL}/message`, body, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    },
  });
}

fetchData.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

deleteData.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

updateUserData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
};

getFavorites.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
};

getListOfCities.propTypes = {
  pathParams: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

getListOfCitiesUP.propTypes = {
  pathParams: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

getListOfDepartments.propTypes = {
  pathParams: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

getListOfDepartmentsUP.propTypes = {
  pathParams: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

makeOrder.propTypes = {
  pathParams: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

getOrder.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

getCareList.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

addItemInBasket.propTypes = {
  pathParams: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

removeItemInBasket.propTypes = {
  pathParams: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

updateItemInBasket.propTypes = {
  pathParams: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

getItemInBasket.propTypes = {
  pathParams: PropTypes.string.isRequired,
};
makeEmail.propTypes = {
  body: PropTypes.string.isRequired,
};
export {
  fetchData,
  updateUserData,
  deleteData,
  getFavorites,
  getListOfCities,
  getListOfDepartments,
  getListOfCitiesUP,
  getListOfDepartmentsUP,
  getCareList,
  makeOrder,
  getOrder,
  addItemInBasket,
  getItemInBasket,
  removeItemInBasket,
  updateItemInBasket,
  makeEmail,
};
