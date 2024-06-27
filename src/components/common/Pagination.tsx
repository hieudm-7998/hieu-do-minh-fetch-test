import { Box, Button, Flex } from "@radix-ui/themes";

interface PaginationProps {
  next: string | null;
  previous: string | null;
  onPageChange: (url: string) => void;
}

export function Pagination({ next, previous, onPageChange }: PaginationProps) {
  return (
    <Flex justify="center" my="4">
      <Button
        onClick={() => previous && onPageChange(previous)}
        disabled={!previous}
      >
        Previous
      </Button>
      <Button onClick={() => next && onPageChange(next)} disabled={!next}>
        Next
      </Button>
    </Flex>
  );
}
