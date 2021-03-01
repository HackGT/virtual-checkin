import React from 'react';
import './App.css';
import Managers from './stores/Managers';
// components
// import ProjectContainer from './components/ProjectContainer';
// import PreMeetingView from './components/PreMeetingView'
import SampleApp from '.components/SampleApp'

import { Box } from '@chakra-ui/react';

const App: React.FC = () => {
	let managers = new Managers();
  return (
    <Box minH="100%">
      <SampleApp managers={ managers }></SampleApp>
    </Box>
  );
};

export default App;
