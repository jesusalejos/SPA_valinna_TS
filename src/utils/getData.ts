export const API = 'https://rickandmortyapi.com/api/character/';

export const getData = async (id: string|null) => {
  const apiURl = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};