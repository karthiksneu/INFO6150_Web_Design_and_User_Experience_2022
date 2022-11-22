import React from "react";
import Card from '../pages/Card';
function Jobs() {
  const jobs = [
    {
      name: "Pastery Chef",
      discription: "This is a Pastery Chef",
    },
    {
      name: "Culinary Specialist",
      discription: "This is a Culinary Specialist",
    },
    {
      name: "Visual Specialist",
      discription: "This is a Visual Specialist",
    },
    {
      name: "Marketing Director",
      discription: "This is a Marketing Director",
    },
  ];
  
    return (
  <div>
      
      <div class="container">
        {jobs.map((job) => (

          <div class="wapper">
            <div class="card h-100">
              <div class="card-body">
                <h2 class="card-title">{job.name}</h2>
                <p class="card-text">
                  {job.discription}
                </p>
             </div>
             </div>
          </div>
        ))}
      </div>
      

        {/* <div class="card text-white bg-dark my-5 py-4 text-center">
          <div class="card-body">
            <p class="text-white m-0">
              Following are the Job opportunities under the Info 6150 Web Design
              and User Experience Engineering course.
            </p>
          </div>
        </div>
        <div class="row gx-4 gx-lg-5">
          <div class="col-md-6 mb-5">
            <div class="card h-100">
              <div class="card-body">
                <h2 class="card-title">Teaching Assistant</h2>
                <p class="card-text">
                  Implementing the Teacher’s lesson plans and maintaining daily
                  classroom schedules.Using a variety of instructional and
                  assessment strategies, as directed by the Teacher, to meet
                  individual student needs.Assisting students with assignments
                  or difficult concepts
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-5">
            <div class="card h-100">
              <div class="card-body">
                <h2 class="card-title">Research Assistant</h2>
                <p class="card-text">
                  The final projects will be completed by a team of 4-5
                  students. The project details will be provided during the
                  second/third week of the course. Students are encouraged to
                  choose their topic of choice either from healthcare, business,
                  and/or technology related fields. Details on project
                  deliverable requirement will be specified at a later time.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <Card id="Jobs"></Card>
      </div>
    );
  }


export default Jobs;
