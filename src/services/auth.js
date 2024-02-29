import axios from 'axios';

export const signUp = async credentials => {
  try {
    const res = await axios.post('/auth/signup', credentials);
    return res;
  } catch (error) {
    return error.message;
  }
};

export const signIn = async credentials => {
  try {
    const res = await axios.post('/auth/signin', credentials);
    return res;
  } catch (error) {
    return error.message;
  }
};

export const changePassword = async credentials => {
  try {
    const res = await axios.post('/auth/changePassword', credentials);
    return res;
  } catch (error) {
    return error.message;
  }
};

export const forgotPassword = async credentials => {
  try {
    const res = await axios.post('/auth/forgotPassword', credentials);
    return res;
  } catch (error) {
    return error.message;
  }
};

export const singOut = async () => {
  const res = await axios.post('/auth/logout');
  return res;
};

export const updateUserData = async updateData => {
  const formData = new FormData();
  updateData.avatar && formData.set('avatar', updateData.avatar);
  updateData.userName && formData.append('userName', updateData.userName);
  updateData.surname && formData.append('surname', updateData.surname);
  updateData.email && formData.append('email', updateData.email);
  updateData.birthday && formData.append('birthday', updateData.birthday);
  updateData.location && formData.append('location', updateData.location);
  updateData.phone && formData.append('phone', updateData.phone);
  updateData.password && formData.append('password', updateData.password);
  updateData.delivery && formData.append('delivery', updateData.delivery);
  if (updateData.address) {
    Object.entries(updateData.address).forEach(([key, value]) => {
      formData.append(`address[${key}]`, value);
    });
  }
  const { data } = await axios.patch(`/auth/user/${updateData.id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      // 'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
  return data;
};

export const refreshUserToken = async () => {
  const { data } = await axios.post('/auth');
  return data;
};

export const addToFavorite = async id => {
  try {
    await axios.post(`/auth/favorites/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
};

export const removeFromFavorite = async id => {
  try {
    await axios.delete(`/auth/favorites/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
};
