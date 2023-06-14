import { VStack, Heading, Box, Avatar, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import Link from '../components/Link';

/**
 * Generates the static paths for the user pages.
 *
 * @returns {Promise<Object>} - The generated paths.
 */
export async function getStaticPaths() {
  const linkDir = path.join(process.cwd(), 'public/links');
  const filenames = fs.readdirSync(linkDir);
  const paths = filenames.map((name) => ({
    params: { user: name.replace(/\.json$/, '') },
  }));

  return { paths, fallback: false };
}

/**
 * Fetches the static props for the user page.
 *
 * @param {Object} params - The parameters for the user page.
 * @returns {Promise<Object>} - The static props for the user page.
 */
export async function getStaticProps({ params }) {
  const linkDir = path.join(process.cwd(), 'public/links');
  const fullPath = path.join(linkDir, `${params.user}.json`);
  const links = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

  return { props: { links, user: params.user } };
}

/**
 * Renders the user page component.
 *
 * @param {Object} links - The links data for the user.
 * @param {string} user - The username of the user.
 * @returns {JSX.Element} - The rendered user page component.
 */
export default function UserPage({ links, user }) {
  const router = useRouter();
  const profilePictureUrl = `/profile-pictures/${user}.jpg`;

  return (
    <VStack spacing={4} align="center">
      <IconButton 
        aria-label="Go back"
        left={5}
        top={5}
        icon={<ArrowBackIcon boxSize="2em" _hover={{color:"black"}}/>} 
        onClick={() => router.back()} 
        mb={5}
        bg="transparent"
        color="white"
        alignSelf="flex-start"
      />
      <Avatar src={profilePictureUrl} mt={10} size="2xl" />
      <Heading size="md" mb={5}>
        @{user}
      </Heading>
      <Box w="60%">
        {links.map((link, index) => (
          <Box
            key={index}
            mx="auto"
            textAlign="center"
            borderRadius="50"
            borderBottomWidth="6px"
            borderRightWidth="6px"
            borderColor="black"
            mb={5}
            _hover={{ borderBottomWidth: "4px", borderRightWidth: "4px" }}
          >
            <Link {...link} />
          </Box>
        ))}
      </Box>
    </VStack>
  );
}
