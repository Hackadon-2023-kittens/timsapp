import { Flex, Heading, Spinner, Tag } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../store/selectors";

export default function Header() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Flex align="center" justify="space-between" pb={2}>
      <Heading size="lg">Transport Dashboard</Heading>
      {error ? <Tag colorScheme="red">E</Tag> : isLoading ? <Spinner /> : null}
    </Flex>
  );
}
