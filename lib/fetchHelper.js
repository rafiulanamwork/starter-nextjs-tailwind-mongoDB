const BASE_URL = "http://localhost:3000/";


export const getUsers = async () => {
    try {
      const response = await fetch(`${BASE_URL}api/users`);
      const data = await response.json();
      return data
      // Do something with the response data here
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the fetch or processing of the response data
    }
  };


export const getUserById = async (userId) => {
    try {
      const response = await fetch(`${BASE_URL}api/users/${userId}`);
      const data = await response.json();
      return data
      // Do something with the response data here
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the fetch or processing of the response data
    }
  };


export const createUser = async (userData) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  };
  
  try {
    const response = await fetch(`${BASE_URL}api/users`, options);
    const data = await response.json();
    return data
    // Do something with the response data here
  } catch (error) {
    console.error(error);
    // Handle any errors that occur during the fetch or processing of the response data
  }
};




export const updateUser = async (userId, updatedData) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  };
  
  try {
    const response = await fetch(`${BASE_URL}api/users/${userId}`, options);
    const data = await response.json();
    return data
    // Do something with the response data here
  } catch (error) {
    console.error(error);
    // Handle any errors that occur during the fetch or processing of the response data
  }
};



export const deleteUser = async (userId) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  try {
    const response = await fetch(`${BASE_URL}api/users/${userId}`, options);
    const data = await response.json();
    return data
    // Do something with the response data here
  } catch (error) {
    console.error(error);
    // Handle any errors that occur during the fetch or processing of the response data
  }
};





