import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <h3>Toxon Technologies Inc</h3>
            <p className="info">
              Full Stack Software Developer<span>&bull;</span>{" "}
              <em className="date">May 2021 – Present</em>
            </p>
            <p>
              • Pioneered both front-end and back-end of a profile based
              feature, allowing users to manage calibration thresholds for each
              bow they may possess using JavaScript, Golang and React Native.
            </p>
            <p>
              • Architected an admin dashboard for the support team to showcase
              all user’s information to increase debugging efficiency using
              React, Auth0 and JavaScript
            </p>
            <p>
              • Responsible for updating, merging and deploying multiple
              releases of the company’s app for both IOS and Android platforms
              using GitHub and Circle Ci.
            </p>
            <p>
              • Implemented additional endpoints to the company’s open API
              platform using JavaScript and React Native.
            </p>
          </div>

          <div className="nine columns main-col">
            <h3>DragonAgile</h3>
            <p className="info">
              Software Development Engineering <span>&bull;</span>{" "}
              <em className="date">Dec 2019 – Apr 2020</em>
            </p>
            <p>
              • Developed Jira apps and scripts requested by clients using
              existing JIRA Java and REST APIs, improving client’s work
              efficiency by 10%.
            </p>
            <p>
              • Programmed Bash scripts to run local Jira servers by executing
              installers and connecting to TCP ports in a Linux environment .
            </p>
            <p>
              • Analyzed and completed over 75 Jira tickets by consulting with
              clients solutions that quickly and effectively solved their
              technical issues.
            </p>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
