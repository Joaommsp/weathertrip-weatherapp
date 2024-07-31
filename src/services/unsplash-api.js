import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";

export function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +  1)) + min;
}

export const getImage = async (query) => {
  try{const result =  await axios.get(
    `${API_URL}?query=${query}&page=${getRandomNumber(1,5)}&per-page=1&client_id=${
      import.meta.env.VITE_API_KEY
    }`
  );
  return (result.data)}
  catch(error) {
    console.log(error)
  }
};
