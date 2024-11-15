import React from 'react';
import { Table } from '@mantine/core';
import { agricultureData } from '../data/agricultureData';
import '../style/CropProductionTable.css';

const CropProductionTable: React.FC = () => {
  const continuousYears = [1950, 1951, 1952];
  const data = continuousYears.map(year => {
    const crops = agricultureData.filter(item => item.year === year);
    if (crops.length > 0) {
      const maxProduction = Math.max(...crops.map(item => item.production));
      const minProduction = Math.min(...crops.map(item => item.production));
      const maxCrop = crops.find(item => item.production === maxProduction)?.crop || 'N/A';
      const minCrop = crops.find(item => item.production === minProduction)?.crop || 'N/A';
      return { year, maxCrop, minCrop };
    } else {
      return { year, maxCrop: 'N/A', minCrop: 'N/A' };
    }
  });

  // Add the dots row
  data.push({ year: '...', maxCrop: '...', minCrop: '...' });

  // Add the data for 2020
  const year2020 = 2020;
  const crops2020 = agricultureData.filter(item => item.year === year2020);
  const maxProduction2020 = Math.max(...crops2020.map(item => item.production));
  const minProduction2020 = Math.min(...crops2020.map(item => item.production));
  const maxCrop2020 = crops2020.find(item => item.production === maxProduction2020)?.crop || 'N/A';
  const minCrop2020 = crops2020.find(item => item.production === minProduction2020)?.crop || 'N/A';

  data.push({ year: year2020, maxCrop: maxCrop2020, minCrop: minCrop2020 });

  return (
    <div className="table-container">
      <h2 className="table-title">Crop Production Table</h2>
      <Table className="crop-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Crop with Maximum Production</th>
            <th>Crop with Minimum Production</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.maxCrop}</td>
              <td>{item.minCrop}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CropProductionTable;
