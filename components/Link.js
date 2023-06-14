import { Button, Flex, Icon } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaReddit, FaPinterest } from "react-icons/fa";

/**
 * Link component that renders a button with an icon and a name as a link.
 *
 * @param {string} name - The name of the link.
 * @param {string} url - The URL for the link.
 * @returns {JSX.Element} - The rendered link component.
 */
const Link = ({ name, url }) => {
  const icon = getIcon(name);

  return (
    <Button
      as="a"
      w="100%"
      href={url}
      color="black"
      borderRadius="50"
      h="50px"
      fontSize="16px"
      _hover={{ bg: "gray.200", color: "black" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      py={2}
    >
      {icon && (
        <Flex
          position="absolute"
          left={4}
          top={0}
          bottom={0}
          align="center"
        >
          <Icon as={icon} boxSize={6} />
        </Flex>
      )}
      {name}
    </Button>
  );
};

/**
 * Get the corresponding icon for the link based on its name.
 *
 * @param {string} name - The name of the link.
 * @returns {React.ElementType|null} - The icon component or null if no matching icon is found.
 */
function getIcon(name) {
  // get Icons for the links
  switch (name) {
    case "GitHub":
      return FaGithub;
    case "Twitter":
      return FaTwitter;
    case "Linkedin":
      return FaLinkedin;
    case "Instagram":
      return FaInstagram;
    case "Reddit":
      return FaReddit;
    case "Pinterest":
      return FaPinterest;
    default:
      return null;
  }
}

export default Link;
