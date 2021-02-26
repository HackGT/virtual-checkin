export type ProjectIdea = {
  title: string;
  description: string;
};

export type ProjectCard = ProjectIdea & {
  id: string;
};
