import { useQuery } from "@tanstack/react-query";
import {
  getAllCharacters,
  getCharacterHomeworld,
  getSingleCharacter,
} from "./api";

export const useAllCharactersQuery = (url?: string) => {
  return useQuery({
    queryKey: ["allCharacters", url],
    queryFn: () => getAllCharacters(url),
  });
};

export const useSingleCharactersQuery = (url: string) => {
  return useQuery({
    queryKey: ["singleCharacter", url],
    queryFn: () => getSingleCharacter(url),
  });
};

export const useCharacterHomeworld = (url: string) => {
  return useQuery({
    queryKey: ["characterHomeworld", url],
    queryFn: () => getCharacterHomeworld(url),
  });
};