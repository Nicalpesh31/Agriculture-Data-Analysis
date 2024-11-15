import React from 'react';
import { Table } from '@mantine/core';
import { agricultureData } from '../data/agricultureData';
import '../style/CropAverageTable.css';

const CropAverageTable: React.FC = () => {
  const crops = [...new Set(agricultureData.map(item => item.crop))];
  const continuousCrops = crops.slice(0, 3); // Adjust the slice to get the first 3 crops

  const data = continuousCrops.map(crop => {
    const cropData = agricultureData.filter(item => item.crop === crop);
    const avgYield = cropData.reduce((sum, item) => sum + item.yield, 0) / cropData.length || 0;
    const avgArea = cropData.reduce((sum, item) => sum + item.area, 0) / cropData.length || 0;

    return { crop, avgYield: avgYield.toFixed(3), avgArea: avgArea.toFixed(3) };
  });

  // Add the dots row
  data.push({ crop: '...', avgYield: '...', avgArea: '...' });

  // Add a specific crop for demonstration, for example, 'XYZ'
  const specificCrop = 'XYZ';
  const specificCropData = agricultureData.filter(item => item.crop === specificCrop);
  const avgYieldSpecific = specificCropData.reduce((sum, item) => sum + item.yield, 0) / specificCropData.length || 0;
  const avgAreaSpecific = specificCropData.reduce((sum, item) => sum + item.area, 0) / specificCropData.length || 0;

  data.push({
    crop: specificCrop,
    avgYield: avgYieldSpecific.toFixed(3),
    avgArea: avgAreaSpecific.toFixed(3),
  });

  return (
    <div className="table-container">
      <h2 className="table-title">Crop Average Table</h2>
      <Table className="average-table">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Average Yield (1950-2020)</th>
            <th>Average Cultivation Area (1950-2020)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.crop}</td>
              <td>{item.avgYield}</td>
              <td>{item.avgArea}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CropAverageTable;
