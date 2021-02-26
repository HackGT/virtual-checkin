import React from 'react';
import { ProjectIdea } from '../types/ProjectIdea';
import { removeIdea } from '../services/ProjectIdeaService';
// components
import { Box, Button, Text, Center, Flex, useToast } from '@chakra-ui/react';

type Props = ProjectIdea & {
  id: string;
  removeCard: (key: string) => void;
};

const ProjectCard: React.FC<Props> = (props: Props) => {
  const toast = useToast();

  const onRemoveClick = async (): Promise<void> => {
    try {
      await removeIdea(props.id);
      props.removeCard(props.id);
      toast({
        title: 'Removed!',
        description: 'Idea was removed!',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: 'Remove Error!',
        description: String(e),
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      height="195px"
      width="165px"
      fontWeight="bold"
      alignItems="center"
      bg="tomato"
      boxShadow="lg"
    >
      <Flex padding="7px" flexDirection="column" h="100%">
        <Center>
          <Text color="white" fontSize="lg">
            {props.title}
          </Text>
        </Center>
        <Text color="white" fontSize="xs" fontWeight="semibold" justifyContent="justify">
          {props.description}
        </Text>
        <Center h="10%" marginTop="auto">
          <Button fontSize="sm" color="tomato" h="100%" borderRadius="md" onClick={onRemoveClick}>
            Remove
          </Button>
        </Center>
      </Flex>
    </Box>
  );
};

export { ProjectCard };
