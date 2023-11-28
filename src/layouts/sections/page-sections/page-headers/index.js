/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
// import View from "layouts/sections/components/View";

// // PageHeaders page components
// import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";

// // PageHeaders page components code
// import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";

function PageHeaders() {
  // Sample data for team members
  const teamMembers = [
    {
      name: 'Ayush Singh',
      role: 'Full Stack Developer',
      description: 'Ayush is responsible for implementing front-end, back-end, UI/UX tasks. P.S. It\'s me :)'
    },
    {
      name: 'Swapnita Pandey',
      role: 'Machine Learning Engineer',
      description: 'Swapnita is responsible for improving the Machine Learning models and creating new ones.'
    },
    {
      name: 'Ayush Rawat',
      role: 'Flask Developer',
      description: 'Ayush is responsible for implementing the Flask API and integrating it with the front-end.'
    },
    {
      name: 'Shruti Chaturvedi',
      role: 'Documentation',
      description: 'Shruti is responsible for writing the documentation for the project.'
    },
  ];
  return (
    <BaseLayout
      title="Team Members"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/page-headers" },
        { label: "Team Members" },
      ]}
    >
      <div className="team-members-container">
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <h3>{member.name}</h3>
              <p><strong>Role:</strong> {member.role}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .team-members-container {
          margin-top: 20px;
        }
        .team-member {
          border: 1px solid #ccc;
          padding: 15px;
          margin-bottom: 20px;
        }
        .team-member h3 {
          margin-bottom: 5px;
        }
        .team-member p {
          margin-bottom: 10px;
        }
      `}</style>
      {/* <View title="Header 1" code={headerOneCode} height="40rem">
        <HeaderOne />
      </View> */}
    </BaseLayout>
  );
}

export default PageHeaders;
