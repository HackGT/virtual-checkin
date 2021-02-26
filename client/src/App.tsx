import React from 'react';
import './App.css';

// components
import ProjectContainer from './components/ProjectContainer';

import { Box } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <Box minH="100%">
      <ProjectContainer />
    </Box>
  );
};

export default App;
