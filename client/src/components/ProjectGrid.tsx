import React from 'react';
import { ProjectIdea } from '../types/ProjectIdea';
// components
import { Grid, GridItem, Center, Text } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';

type ProjectCard = ProjectIdea & {
  id: string;
};

type Props = {
  ideas: ProjectCard[];
  removeIdea: (id: string) => void;
};

const ProjectGrid: React.FC<Props> = (props: Props) => {
  const projectCards = props.ideas.map((idea) => {
    return (
      <GridItem key={idea.id}>
        <Center>
          <ProjectCard id={idea.id} title={idea.title} description={idea.description} removeCard={props.removeIdea} />
        </Center>
      </GridItem>
    );
  });

  const noIdeas = (
    <Center width="100%">
      <Text color="gray.500">You have no ideas right now. Click `Add Ideas` to add one!</Text>
    </Center>
  );

  console.log(projectCards.length + 1);

  return projectCards.length > 0 ? (
    <Center padding="10px">
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(6, 1fr)']} gap={6}>
        {projectCards}
      </Grid>
    </Center>
  ) : (
    noIdeas
  );
};

export default ProjectGrid;
