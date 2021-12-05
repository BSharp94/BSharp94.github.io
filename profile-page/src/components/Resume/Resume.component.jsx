import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {


  const [showFull, setShowFull] = useState(false);

  const onShowFullResumeClicked = () => {
    setShowFull(!showFull);
  }
  return (
    <div className="resume__panel">
      <h3 className="resume__title">Resume</h3>

      <div className="resume__actions">
        <button onClick={onShowFullResumeClicked}>{showFull ? 'Hide Full Resume' : 'Show Full Resume'}</button>
        <button>Download (PDF)</button>
      </div>

      {
        showFull && (
          <div className="resume__contents">
            <div className="resume__contact">
              <div className="resume__column">
                <div>
                  <b>Email</b><br />
                  <span>briansharpdevelopment@gmail.com</span>
                </div>
                <div>
                  <b>Cell</b><br />
                  <span>(757) 971 - 3934</span>
                </div>
              </div>
              <div className="resume__column">
                <div>
                  <b>LinkedIn:</b><br/>
                  <span>https://www.linkedin.com/in/brian-sharp-b79a06a0/</span>
                </div>
                <div>
                  <b>Languages:</b><br/>
                  <span>JavaScript/Node.js, C#, Python, R, SQL</span>
                </div>
              </div>
            </div>
            <div className="resume__summary">
              <h4>Summary</h4>
              <span>
                Software Engineer with serveral years of industry experience in the healthcare, marketing, and financial sectors.
                Proficient in Javascript, Python, and C#. Experience in several full stack architectures.
                Strong comprehension of cloud base infrastructures (Primarily AWS).
                Additional expertise in data science, machine learning, and the development of big data pipelines.
              </span>
            </div>
            <div className="resume__experience">
              <h4>Professional Experience</h4>

              <div className="resume__experience_item">
                <div className="resume__experience_title">
                  <b>Full Stack Developer</b>
                  <b>August 2020 to Present</b>
                </div>
                <div className="resume__experience_company">
                  <span>Adrizer, Sarasota, Fl</span>
                </div>
                <ul className="resume__experience_detail_list">
                  <li>Supported and improved primary web application used to manage digital marketing campaigns across multiple integrations.</li>
                  <li>Developed and maintained multiple integrations including processes that imported hourly spend, impression, and click information through serverless architecture.</li>
                  <li><b>Tools: Node, ReactJS, AWS, MySQL, Serverless</b></li>
                </ul>
              </div>

              <div className="resume__experience_item">
                <div className="resume__experience_title">
                  <b>Data Scientist (Customer Experience)</b>
                  <b>July 2019 to August 2020</b>
                </div>
                <div className="resume__experience_company">
                  <span>Florida Blue, Jacksonvile, Fl</span>
                </div>
                <ul className="resume__experience_detail_list">
                  <li>Improved Customer Net Promoter score by 20 points by generating actionable insights by modeling customer survey responses.</li>
                  <li>Generated predictive models to estimate metric growth and suggest companywide KPI goals.</li>
                  <li>Demonstrate ROI for improvements in customer satisfaction</li>
                  <li><b>Tools: Python, R, SQL Server, Hadoop/Hive, IBM db2</b></li>
                </ul>
              </div>

              <div className="resume__experience_item">
                <div className="resume__experience_title">
                  <b>Full Stack Software Engineer</b>
                  <b>January 2018 to July 2019</b>
                </div>
                <div className="resume__experience_company">
                  <span>Forcura, Jacksonvile, Fl</span>
                </div>
                <ul className="resume__experience_detail_list">
                  <li>Refreshed UI Web application using React and headless API backend.</li>
                  <li>Reduced database server wait time by 70% while seeing 4x growth in daily users.</li>
                  <li>Improved EHR integrations by developing API to replace legacy SFTP processes.</li>
                  <li>Maintained and improved flagship web application and relating cloud services using C# and ASP.net.</li>
                  <li>Created ETL platform that fed primary search and analytics platforms.</li>
                  <li><b>Tools: C#, ASP.net, JavaScript/Node.js, React.js, Python, SQL Server, Elastic Search</b></li>
                </ul>
              </div>

              <div className="resume__experience_item">
                <div className="resume__experience_title">
                  <b>Full Stack Software Engineer</b>
                  <b>August 2017 to December 2017</b>
                </div>
                <div className="resume__experience_company">
                  <span>Caretta Data, Jacksonvile, Fl</span>
                </div>
                <ul className="resume__experience_detail_list">
                  <li>Reduced data cleaning process by 80% by developing internal web application in React.</li>
                  <li>Improved primary database schema supporting API REST endpoints in JavaScript.</li>
                  <li>Ensured data quality by creating automated tests executed on AWS Lambdas.</li>
                  <li>Developed primary ETL process between transactional database and analytics platform.</li>
                  <li><b>Tools: JavaScript/Node.js, React.js, Vue.js, Postgres, Redshift, AWS Lambda</b></li>
                </ul>
              </div>
              
            </div>

            <div className="resume__education">
                <h4>Education</h4>
                <div className="resume__education_title">
                  <b>Bachelor of Science in Computer Science</b>
                  <b>April 2012 to April 2012</b>
                </div>
                <div className="resume__education_school">
                  <span>University of North Florida - Jacksonville, Fl</span>
                </div>
                <ul className="resume__education_detail_list">
                  <li>Academic Honors, 3.5 Undergraduate GPA</li>
                  <li>President of UPE Computer Honor Society</li>
                </ul>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Resume;

