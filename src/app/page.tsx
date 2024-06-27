"use client";

import { useAllCharactersQuery } from "@/api/queries";
import { CharacterDialog } from "@/components/common/CharacterDialog";
import { Pagination } from "@/components/common/Pagination";
import {
  Container,
  Box,
  Card,
  Flex,
  Grid,
  Avatar,
  Text,
  Skeleton,
  Separator,
  Dialog,
  Button,
} from "@radix-ui/themes";
import { useState } from "react";

export default function Home() {
  const [selectedCharacterURL, setSelectedCharacterURL] = useState<string>("");
  const [pageUrl, setPageUrl] = useState<string | undefined>(undefined);

  const { data: allCharacters, isLoading } = useAllCharactersQuery(pageUrl);

  const handleCharacterDetailOpen = (url: string) => {
    setSelectedCharacterURL(url);
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Box width="100%">
        <Container px="2" py="5">
          <Text as="div" size="7" weight="bold" align="center">
            All Star Wars characters
          </Text>
          <Flex align="center" justify="center">
            <Separator my="5" size="2" />
          </Flex>
          <Box py="2">
            <Grid
              columns={{ initial: "2", md: "3", lg: "5" }}
              gap="3"
              rows="repeat(2, 64px)"
              width="auto"
              mb="5"
            >
              {isLoading ? (
                <CustomSkeleton />
              ) : (
                allCharacters?.results?.map((item: any, index: number) => (
                  <Dialog.Root key={index}>
                    <Dialog.Trigger>
                      <Card
                        onClick={() => handleCharacterDetailOpen(item.url)}
                        className="hover-card"
                      >
                        <Flex gap="3" align="center">
                          <Avatar
                            size="3"
                            src={item.image || null}
                            radius="full"
                            fallback={item.name.charAt(0)}
                          />
                          <Box>
                            <Text as="div" size="2" weight="bold">
                              {item.name}
                            </Text>
                          </Box>
                        </Flex>
                      </Card>
                    </Dialog.Trigger>
                    <CharacterDialog url={selectedCharacterURL} />
                  </Dialog.Root>
                ))
              )}
            </Grid>
            <Flex align="center" justify="center" gap="3">
              <Skeleton loading={isLoading}>
                <Button
                  disabled={allCharacters?.previous === null}
                  onClick={() => setPageUrl(allCharacters?.previous)}
                >
                  Prev
                </Button>
              </Skeleton>
              <Skeleton loading={isLoading}>
                <Button
                  disabled={allCharacters?.next === null}
                  onClick={() => setPageUrl(allCharacters?.next)}
                >
                  Next
                </Button>
              </Skeleton>
            </Flex>
          </Box>
          <Flex align="center" justify="center">
            <Separator my="5" size="2" />
          </Flex>
          <Text as="div" size="2" weight="bold" align="center">
            Take-home Test by{" "}
            <a className="link" target="_blank" href="https://github.com/hieudm-7998">@hieudm-7998</a>
          </Text>
          <Text as="div" size="2" weight="bold" align="center">
            Portfolio: {" "}
            <a className="link" target="_blank" href="https://hews-portfolio.vercel.app/">Link</a>
          </Text>
        </Container>
      </Box>
    </Flex>
  );
}

const CustomSkeleton = () => {
  return Array.from({ length: 10 }).map((_, index) => (
    <Card key={index}>
      <Flex gap="3" align="center">
        <Skeleton loading={true}>
          <Avatar
            size="3"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
          />
        </Skeleton>
        <Box>
          <Text as="div" size="2" weight="bold">
            <Skeleton loading={true}>Loading...</Skeleton>
          </Text>
        </Box>
      </Flex>
    </Card>
  ));
};
