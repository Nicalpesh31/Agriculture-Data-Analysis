// src/App.tsx
import React from 'react';
import { Container } from '@mantine/core';
import CropProductionTable from './component/CropProductionTable';
import CropAverageTable from './component/CropAverageTable';

const App: React.FC = () => {
  return (
    <Container>
      <h1>Agriculture Data Analysis</h1>
      <CropProductionTable />
      <CropAverageTable />
    </Container>
  );
};

export default App;
