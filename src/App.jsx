import { useState } from "react"
import "./App.css"

export default function App() {

  const [cgpa, setCgpa] = useState('')
  const [credit, setCredit] = useState('')
  const [courseCount, setCourseCount] = useState('')
  const [courseDetails, setCourseDetails] = useState([]) //state for course details

  // When the user changes the number of courses
  const handleCourseCountChange = (e) => {
    const count = parseInt(e.target.value, 10) || 0;
    setCourseCount(count);

    // Initialize an array for the courses based on courseCount
    const initialCourses = Array(count).fill({ grade: '', credit: '' });
    setCourseDetails(initialCourses);
  };

  // When the user changes grade or credit for a specific course
  const handleCourseChange = (index, field, value) => {
    const updatedCourses = [...courseDetails];
    updatedCourses[index] = { ...updatedCourses[index], [field]: value };
    setCourseDetails(updatedCourses);
  };

  // console.log("CGPA:", cgpa);
  // console.log("Credits Completed:", credit);
  // console.log("Courses Taken:", courseCount);
  // console.log("Course Details:", courseDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CGPA:", cgpa);
    console.log("Credits Completed:", credit);
    console.log("Courses Details:", courseDetails);
    console.log("Course Count:", courseCount);
    

    const predictedCGPA = calculateCGPA(); // Call the calculation function
    if (predictedCGPA) {
      alert(`Your predicted CGPA is: ${predictedCGPA}`); // Display the predicted CGPA
    }
  };


  // Function to calculate predicted CGPA
  const calculateCGPA = () => {
    const currentCGPA = parseFloat(cgpa);
    const completedCredits = parseFloat(credit);

    if (isNaN(currentCGPA) || isNaN(completedCredits) || completedCredits <= 0) {
      alert("Please enter valid current CGPA and completed credits.");
      return null;
    }

    // Calculate Total Quality Points Before This Semester
    const totalQualityPointsBefore = currentCGPA * completedCredits;

    //Calculate Total Quality Points This Semester
    let totalQualityPointsThisSemester = 0;
    let totalCreditsThisSemester = 0;

    courseDetails.forEach(course => {
      const grade = parseFloat(course.grade);
      const courseCredit = parseFloat(course.credit);

      // Validate the grade and credit input
      if (!isNaN(grade) && !isNaN(courseCredit) && courseCredit > 0) {
        totalQualityPointsThisSemester += grade * courseCredit;
        totalCreditsThisSemester += courseCredit;
      }
    });

    // Calculate the total credits after this semester
    const totalCreditsAfter = completedCredits + totalCreditsThisSemester;

    // Validate that there are credits this semester
    if (totalCreditsThisSemester <= 0) {
      alert("Please enter valid grades and credits for your courses.");
      return null;
    }

    //Calculate the new CGPA
    const newCGPA = (totalQualityPointsBefore + totalQualityPointsThisSemester) / totalCreditsAfter;

    return newCGPA.toFixed(2); //CGPA rounded to 2 decimal places
  };


  return (

    <>
      <div className="body">
        <h1 className="heading">Predict CGPA</h1>
        <h4 className="subheading">Predict your CGPA by the end of this semester</h4>

        <div className="form">
          <form>
            <div className="form-group">
              <label htmlFor="CGPA">Your Current CGPA</label>
              <input
                type="number"
                step={0.001}
                className="form-control"
                id="cgpa"
                placeholder="Enter your Current CGPA"
                onChange={(e) => setCgpa(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="credit">Credit Completed</label>
              <input
                type="number"
                step={0.1}
                className="form-control"
                id="credit"
                placeholder="Total Credits Completed"
                onChange={(e) => setCredit(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="courses">Number of course(s) taken this semester</label>
              <input
                type="number"
                className="form-control"
                id="course-count"
                placeholder="Number of Courses Taken"
                onChange={handleCourseCountChange}
              />

            </div>

            {/* Grade and Credit input for each of the courses of this semester */}
            {courseDetails.map((initialCourses, index) => (
              <div key={index} className="form-group course-details">
                <h4>Course {index + 1}</h4>
                <div className="input-group">
                  <div>
                    <label htmlFor="gpa">Grade</label>
                    <input
                      type="number"
                      step={0.1}
                      className="form-control"
                      placeholder={`Grade for Course ${index + 1}`}
                      value={initialCourses.grade}
                      onChange={(e) => handleCourseChange(index, 'grade', e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="credit">Credit</label>
                    <input
                      type="number"
                      step={0.1}
                      className="form-control"
                      placeholder={`Credit for Course ${index + 1}`}
                      value={initialCourses.credit}
                      onChange={(e) => handleCourseChange(index, 'credit', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}

            < button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}>Calculate CGPA</button>
          </form>
        </div>
      </div >
    </>
  )
}