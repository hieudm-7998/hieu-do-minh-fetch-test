const BASE_URL = "https://swapi.dev/api/";

export const getAllCharacters = async (url?: string | undefined) => {
  try {
    const response = (await fetch(url || `${BASE_URL}people`)).json();
    return response;
  } catch (err) {
    console.log(err);
  }
  throw new Error("Failed to fetch characters");
};

export const getSingleCharacter = async (url: string) => {
  try {
    const response = (await fetch(url)).json();
    return response;
  } catch (err) {
    console.log(err);
  }
  throw new Error("Failed to fetch characters");
};

export const getCharacterHomeworld = async (url: string) => {
  try {
    const response = (await fetch(url)).json();
    return response;
  } catch (err) {
    console.log(err);
  }
  throw new Error("Failed to fetch characters");
};
