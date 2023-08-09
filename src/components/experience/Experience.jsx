import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
function Experience() {
  return (
    <section id='Experience'>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className="experience_frontend">
            <h3>Amazon (Jan-Jun, 2023)</h3>
            <h3>Software Development Engineer Intern</h3>
            <div className="experience_content">
              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons' ></BsPatchCheckFill>
                 <div>
                   <h5>Worked in <b>Last Mile Delivery Product and Tech Organization: UTR Automation Team </b></h5>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons' ></BsPatchCheckFill>
                 <div>
                   <h5>Implemented a Lightguided Operations mechanism which aided in improving associate efficiency and accuracy in the sortation process and live in more than 800+ delivery stations.
 </h5>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons' ></BsPatchCheckFill>
                 <div>
                   <h5>Operation Excellence : Deliberately performed my duties by resolving more then 60+ low-sev tickets for the team.  </h5>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons' ></BsPatchCheckFill>
                 <div>
                   <h5>Worked on AWS Greengrass, and docker and provide support to more than 800+ delivery stations across the
world to run docker images.</h5>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons' ></BsPatchCheckFill>
                 <div>
                   <h5> Implementing a solution to download videos from S3 for multiple sites, splitting it into 3-minute durations, and
automating the process using BOTO3, Cronjobs, and multiple Python libraries, helping in reducing manual work and saving 1hr/day the associate.</h5>
                 </div>
              </article>

              <article className='experience_details_TechStack'>
                 <BsPatchCheckFill className='experience_details-icons' ></BsPatchCheckFill>
                 <div>
                   <h5>Tech Stack : AWS, Java, Python, GreengrassV2, React, TestingFrameworks, Jira, Git</h5>
                 </div>
              </article>

              
            </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience_backend">
            <h3>Anheuser-Busch InBev (Jul-Dec, 2022)</h3>
            <h3>Data Analyst Intern</h3>
            <div className="experience_content">
            <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons' ></BsPatchCheckFill>
                 <div>
                   <h5>Worked in <b> Data Analyst : Celonis Team </b></h5>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons' ></BsPatchCheckFill>
                 <div>
                   <h5>Increased operational efficiency and cost savings by developing a comprehensive First Time Right Invoices and Order to Cash dashboard which assisted the company to identify areas of improvement, optimize and save more than 40k dollars and hold 30 Percentage of the team’s yearly target and used for in more than 10+ countries.</h5>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons' ></BsPatchCheckFill>
                 <div>
                   <h5>Developed more than 30+dashboards and KPI , analytical reports and interactive reports based on business requirements using Celonis, and MySQL.</h5>
                 </div>
              </article>
             
              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons' ></BsPatchCheckFill>
                 <div>
                   <h5>Supported PowerBI team to load data from MySQL Server which was used by Celonis Team which helped save data store cost for more than 10+ projects.</h5>
                 </div>
              </article>

              <article className='experience_details'>
                 <BsPatchCheckFill className='experience_details-icons' ></BsPatchCheckFill>
                 <div>
                   <h5>Worked on Data Extraction, Transforming and Loading data in more than 50+ databases.</h5>
                 </div>
              </article>

              <article className='experience_details_TechStack'>
                 <BsPatchCheckFill className='experience_details-icons' ></BsPatchCheckFill>
                 <div>
                   <h5>Tech Stack : Celonis, MySql, PQL, KPI, Scrum, PowerBI, Excel </h5>
                 </div>
              </article>

              
            </div>
        </div>

      </div>
    </section>
  )
}

export default Experience