export async function getFetch(path) {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`);
      return await response.json();
    } catch (error) {
      console.error('Error in GET request:', error);
      throw error;
    }
  }
  
  export async function postFetch(path, body) {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      return await response.json();
    } catch (error) {
      console.error('Error in POST request:', error);
      throw error;
    }
  }
  
  export async function putFetch(path, body) {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      return await response.json();
    } catch (error) {
      console.error('Error in PUT request:', error);
      throw error;
    }
  }
  
  export async function deleteFetch(path) {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
        method: "DELETE",
      });
      return await response.json();
    } catch (error) {
      console.error('Error in DELETE request:', error);
      throw error;
    }
  }
  