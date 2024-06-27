"use client";

import { useCharacterHomeworld, useSingleCharactersQuery } from "@/api/queries";
import {
  Dialog,
  Flex,
  Text,
  Separator,
  Skeleton,
  IconButton,
  Badge,
} from "@radix-ui/themes";
import { capitalizeFirstLetter } from "@/utils/capitalize";

export function CharacterDialog({ url }: { url: string }) {
  const { data: singleCharacter, isLoading: isLoadingCharacter } =
    useSingleCharactersQuery(url);
  const { data: characterHomeworld, isLoading: isLoadingHomeworld } =
    useCharacterHomeworld(singleCharacter?.homeworld);

  return (
    <Dialog.Content maxWidth="600px">
      <Dialog.Title align="center" mb="0">
        <Flex align="center" justify="between">
          <Skeleton loading={isLoadingCharacter}>
            <Text as="div" size="5" weight="bold">
              {singleCharacter?.name}
            </Text>
          </Skeleton>
          <Dialog.Close>
            <IconButton color="gray" variant="soft">
              <TimesIconSVG />
            </IconButton>
          </Dialog.Close>
        </Flex>
      </Dialog.Title>

      <Flex align="center" justify="center">
        <Separator my="4" size="4" />
      </Flex>

      <CharacerDetail
        singleCharacter={singleCharacter}
        isLoading={isLoadingCharacter}
      />
      <Flex align="center" justify="center">
        <Separator my="4" size="2" />
      </Flex>

      <CharacterHomeworld
        characterHomeworld={characterHomeworld}
        isLoading={isLoadingHomeworld}
      />
    </Dialog.Content>
  );
}

function CharacerDetail({
  singleCharacter,
  isLoading,
}: {
  singleCharacter: any;
  isLoading: any;
}) {
  return (
    <Flex direction="column" gap="3">
      <Flex align="center" justify="between">
        <Text>Height</Text>
        <Badge color="gray">
          <Skeleton loading={isLoading}>
            {singleCharacter?.height === "unknown"
              ? "Unknown"
              : `${singleCharacter?.height}m`}
          </Skeleton>
        </Badge>
      </Flex>
      <Flex align="center" justify="between">
        <Text>Mass</Text>
        <Badge color="gray">
          <Skeleton loading={isLoading}>
            {singleCharacter?.mass === "unknown"
              ? "Unknown"
              : `${singleCharacter?.mass}kg`}
          </Skeleton>
        </Badge>
      </Flex>
      <Flex align="center" justify="between">
        <Text>Birth year</Text>
        <Badge color="gray">
          <Skeleton loading={isLoading}>
            {singleCharacter?.birth_year === "unknown"
              ? "Unknown"
              : singleCharacter?.birth_year}
          </Skeleton>
        </Badge>
      </Flex>
      <Flex align="center" justify="between">
        <Text>Gender</Text>
        <Badge color="gray">
          <Skeleton loading={isLoading}>
            {singleCharacter?.gender === "n/a"
              ? "Not available"
              : capitalizeFirstLetter(singleCharacter?.gender)}
          </Skeleton>
        </Badge>
      </Flex>
    </Flex>
  );
}

function CharacterHomeworld({
  characterHomeworld,
  isLoading,
}: {
  characterHomeworld: any;
  isLoading: any;
}) {
  return (
    <Flex direction="column" gap="3">
      <Flex align="center" justify="between">
        <Text>Homeworld</Text>
        <Badge>
          <Skeleton loading={isLoading}>{characterHomeworld?.name}</Skeleton>
        </Badge>
      </Flex>
      <Flex align="center" justify="between">
        <Text>Rotation Period</Text>
        <Badge>
          <Skeleton loading={isLoading}>
            {characterHomeworld?.rotation_period === "unknown"
              ? "Unknown"
              : characterHomeworld?.rotation_period}
          </Skeleton>
        </Badge>
      </Flex>
      <Flex align="center" justify="between">
        <Text>Orbital Period</Text>
        <Badge>
          <Skeleton loading={isLoading}>
            {characterHomeworld?.orbital_period === "unknown"
              ? "Unknown"
              : characterHomeworld?.orbital_period}
          </Skeleton>
        </Badge>
      </Flex>
      <Flex align="center" justify="between">
        <Text>Climate</Text>
        <Badge>
          <Skeleton loading={isLoading}>
            {capitalizeFirstLetter(characterHomeworld?.climate)}
          </Skeleton>
        </Badge>
      </Flex>
    </Flex>
  );
}
const TimesIconSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 8L8 16M8 8L16 16"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
