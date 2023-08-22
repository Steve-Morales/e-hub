// api.js
export async function fetchRandomUserData() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    return data.results[0]; // Extract the first result
  }
  