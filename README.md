# Indian Agriculture Data Analysis

This project performs analytics on the Indian Agriculture dataset provided by the National Data and Analytics Platform, NITI Aayog. It displays the results in tables using Mantine v7.

## Table of Contents
1. [Project Setup](#project-setup)
2. [Running the Application](#running-the-application)
3. [Analytics Performed](#analytics-performed)
    - [Maximum and Minimum Crop Production per Year](#maximum-and-minimum-crop-production-per-year)
    - [Average Yield and Cultivation Area per Crop (1950-2020)](#average-yield-and-cultivation-area-per-crop-1950-2020)
4. [Folder Structure](#folder-structure)
5. [Screenshots](#screenshots)

## Project Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Nicalpesh31/Agriculture-Data-Analysis.git
    cd indian-agriculture-data-analysis
    ```

2. Install dependencies:
    ```bash
    yarn install
    ```

3. Start the development server:
    ```bash
    yarn dev
    ```

## Running the Application

After running `yarn dev`, the browser should automatically open with the desired page rendered. If it doesn't, navigate to `http://localhost:3000` in your browser.

## Analytics Performed

### Maximum and Minimum Crop Production per Year

This table displays the crop with the maximum and minimum production for each year from 1950 to 2020.

| Year | Crop with Maximum Production | Crop with Minimum Production |
|------|-------------------------------|-------------------------------|
| 1950 | ABC                           | ABC                           |
| 1951 | XYZ                           | XYZ                           |
| ...  | ...                           | ...                           |
| 2020 | ...                           | ...                           |

### Average Yield and Cultivation Area per Crop (1950-2020)

This table displays the average yield and average cultivation area for each crop between 1950 and 2020.

| Crop | Average Yield (1950-2020) | Average Cultivation Area (1950-2020) |
|------|---------------------------|--------------------------------------|
| ABC  | ###                       | ###                                  |
| DEF  | ###                       | ###                                  |
| ...  | ...                       | ...                                  |
| XYZ  | ###                       | ###                                  |

