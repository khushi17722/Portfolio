import React from 'react';
import './Education.css';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="education-header">
          <GraduationCap className="education-icon" size={32} />
          <h4 className="sub-heading">My academic background</h4>
          <h2 className="main-heading">Education</h2>
        </div>

        <div className="education-timeline">
          <div className="education-card">
            <div className="card-left">
              <h4 className="school-name">University of Technology</h4>
              <p className="year">2015 - 2019</p>
              <span className="degree">Bachelor of Science in Computer Science</span>
            </div>
            <div className="card-right">
              <p>Gained foundational knowledge in algorithms, data structures, databases, and web development. Participated in various hackathons and coding competitions. Led the university's programming club.</p>
              <ul className="achievements">
                <li>Dean's List: All Semesters</li>
                <li>First Place - University Hackathon 2018</li>
                <li>Published research paper on AI algorithms</li>
              </ul>
            </div>
          </div>

          <div className="education-card">
            <div className="card-left">
              <h4 className="school-name">Tech University</h4>
              <p className="year">2020 - 2022</p>
              <span className="degree">Master of Science in Software Engineering</span>
            </div>
            <div className="card-right">
              <p>Specialized in scalable systems, DevOps, and Agile methodologies. Conducted research in cloud computing and distributed systems.</p>
              <ul className="achievements">
                <li>4.0 GPA</li>
                <li>Teaching Assistant for Advanced Algorithms</li>
                <li>Master's Thesis on Microservices Architecture</li>
              </ul>
            </div>
          </div>

          <div className="education-card">
            <div className="card-left">
              <h4 className="school-name">High School Name</h4>
              <p className="year">2013 - 2015</p>
              <span className="degree">High School Diploma</span>
            </div>
            <div className="card-right">
              <p>Completed high school with major subjects in Math and Computer Science. Developed an early interest in programming and technology.</p>
              <ul className="achievements">
                <li>Valedictorian</li>
                <li>President of Computer Science Club</li>
                <li>Regional Math Olympiad Winner</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;