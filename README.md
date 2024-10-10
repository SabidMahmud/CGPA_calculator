<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

# CGPA Calculator Documentation

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation and Setup](#installation-and-setup)
5. [Usage](#usage)
6. [How it Works](#how-it-works)
7. [License](#license)
8. [Contributing](#contributing)
9. [Contact](#contact)

## Overview
The **CGPA Calculator** is a web application designed to help students predict their Cumulative Grade Point Average (CGPA) at the end of a semester based on their current CGPA, completed credits, and the grades and credits of the courses they plan to take. The application provides a user-friendly interface to facilitate easy input of necessary data and presents the predicted CGPA in real-time.

## Features
- **User Input**: Allows users to enter their current CGPA, completed credits, and the number of courses taken in the semester.
- **Dynamic Course Entry**: Users can input grades and credits for multiple courses dynamically based on the number of courses they select.
- **CGPA Calculation**: Calculates the predicted CGPA based on the provided information.
- **Responsive Design**: Works seamlessly on various devices with a clean and minimalistic design.

## Technologies Used
- **Frontend**: 
  - React.js
  - Vite
  - CSS for styling
- **Deployment**: [Netlify](https://cgpapredict.netlify.app)


## Installation and Setup
To run the CGPA Calculator locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/SabidMahmud/cgpa_calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd cgpa_calculator
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:5173` (or the URL provided in the terminal).

## Usage
1. Enter your current CGPA and completed credits in the respective fields.
2. Input the number of courses you plan to take this semester.
3. Fill in the grades and credits for each course that appears.
4. Click the "Calculate CGPA" button to see the predicted CGPA based on your inputs.

*Note that: this app will not be able to calculate properly if you have any Retake/Repeat course this semester.*

## How it Works
The application utilizes React's state management to track user inputs and dynamically render additional input fields for each course as specified by the user. Upon submission, the application calculates the predicted CGPA using the formula:

\[
\text{CGPA} = \frac{\text{Total Grade Points}}{\text{Total Credits}}
\]

Where:
- **Total Grade Points** = (Grade for Course 1 * Credit for Course 1) + (Grade for Course 2 * Credit for Course 2) + ... + (Grade for Course N * Credit for Course N)
- **Total Credits** = Total Credits Completed + (Credit for Course 1 + Credit for Course 2 + ... + Credit for Course N)

## License
This project is licensed under the GPL3.0 License - see the [LICENSE](./LICENSE) file for details.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss improvements, new features, or bugs.

## Contact
For inquiries, please contact:
- **Email**: [sabid.codes@gamil.com](mailto:sabid.codes@gmail.com)
- **GitHub Profile**: [github.com/SabidMahmud](https://github.com/SabidMahmud)
