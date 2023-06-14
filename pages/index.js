import { HStack, Box, Center, Avatar } from "@chakra-ui/react";
import Link from "next/link";
import usersData from "../public/users.json";

export default function Home() {

  return (
    <Center h="100vh">
      <HStack spacing={4}>
        {usersData.map((user, index) => (
          <Link href={`/${user.username}`} key={index} passHref>
            <Box
              w="220px"
              h="260px"
              bg="gray.200"
              color="black"
              borderRadius="md"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              cursor="pointer"
            >
              <Avatar
                src={`/profile-pictures/${user.username}.jpg`}
                alt={user.name}
                size="2xl"
                mb={4}
              />
              <div>
                <strong>{user.name}</strong>
              </div>
              <div>@{user.username}</div>
            </Box>
          </Link>
        ))}
      </HStack>
    </Center>
  );
}
