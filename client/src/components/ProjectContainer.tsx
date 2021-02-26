import React, { useEffect, useState } from 'react';
import { ProjectCard } from '../types/ProjectIdea';
import { getIdeas } from '../services/ProjectIdeaService';
// components
import ProjectGrid from './ProjectGrid';
import Header from './Header';

const ProjectContainer: React.FC = () => {
  const [ideas, setIdeas] = useState<ProjectCard[]>([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const ideas = await getIdeas();
      console.log(ideas);
      setIdeas(ideas);
    };
    fetchIdeas();
    console.log('here');
  }, []);

  const removeIdea = (key: string) => {
    console.log(key);
    console.log(ideas);
    const newList = ideas.filter((item) => item.id !== key);
    console.log(newList);

    setIdeas(newList);
  };

  const addIdea = (idea: ProjectCard) => {
    setIdeas([...ideas, idea]);
  };

  return (
    <>
      <Header addIdea={addIdea} />
      <ProjectGrid ideas={ideas} removeIdea={removeIdea} />
    </>
  );
};

export default ProjectContainer;
