import { Flex, Pagination } from "@mantine/core";

interface PaginationControlsProps {
  total: number;
  page: number;
  onChange: (newPage: number) => void;
}

export default function PaginationControls({
  total,
  page,
  onChange,
}: PaginationControlsProps) {
  return (
    <Flex justify="end" my={20}>
      <Pagination
        total={total}
        value={page}
        onChange={onChange}
        position="center"
        styles={() => ({
          control: {
            "&[data-active]": {
              background: "#173d77",
              border: 0,
            },
          },
        })}
      />
    </Flex>
  );
}
