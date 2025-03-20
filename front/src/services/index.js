export const API_URL = import.meta.env.VITE_API_URL;
export async function register({ data }) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    }, //extra info that is sent with the request. such as info type, the type of request.
  });
  return response;
}

export async function login({ data }) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      }, //extra info that is sent with the request. such as info type, the type of request.
    });
    return response;
  }

  export async function addJob({ data }) {
    const response = await fetch(`${API_URL}/job`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
        "Authorization":`${localStorage.getItem("token")}`//will be checked in auth middleware
      }, //extra info that is sent with the request. such as info type, the type of request.
    });
    return response;
  }


  export async function getJob( id ) {
    const response = await fetch(`${API_URL}/job/${id}`, {
       
      
      headers: {
        "Authorization":`${localStorage.getItem("token")}`//will be checked in auth middleware
      }, //extra info that is sent with the request. such as info type, the type of request.
    });
    return response;
  }

  export async function updateJob({ id,data }) {
    const response = await fetch(`${API_URL}/job/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
        "Authorization":`${localStorage.getItem("token")}`//will be checked in auth middleware
      }, //extra info that is sent with the request. such as info type, the type of request.
    });
    return response;
  }
