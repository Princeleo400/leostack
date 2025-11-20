import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import SmallTitle from "./SmallTitle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import ResumeItem from "./ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;

  const resumeData = [
    {
      year: "2023 - Present",
      title: "Software Engineer",
      subTitle: "Phreetech",
      text: `Software Engineer at PhreeTech, contributing to responsive web development and UI/UX implementation for scalable, offshore software projects for global clients,
      and collaborating with cross-functional teams to deliver high-quality software solutions. 
`,
    },
    {
      year: "2020 - 2025",
      title: "Front End Engineer",
      subTitle: "Proctorme",
      text: `Worked with a front end team to develop Developed the frontend of ProctorMe, 
      an AI-driven remote exam proctoring platform that enables secure, fair, and scalable online assessments.
`,
    },
    {
      year: "2024 - 2025",
      title: "Front End Engineer",
      subTitle: "Vivifiy",
      text: `Contributed to building React-based interfaces for a digital education marketplace, integrating dynamic learning and monetization features.`,
    },
    // {
    //   year: "2022 - 2025",
    //   title: "Front End Engineer",
    //   subTitle: "Learngual",
    //   text: `Contributed to building Learngual’s AI-driven language learning web platform, 
    //   enabling users to learn languages and perfect pronunciation.`,
    // },
    // {
    //   year: "2023 - 2025",
    //   title: "Front End Lead",
    //   subTitle: "Esote Inc.",
    //   text: `Frontend Team Lead (contract) at Esote Inc., 
    //   Led the frontend development team for Esote, an AI-powered talent-matching platform connecting student tech talent with startups and remote projects.`,
    // },
    {
      year: "2019 - 2022",
      title: "Front End Developer",
      subTitle: "Meeney",
      text: `Frontend Developer (contract) for Meeney, a local digital marketplace platform, 
      contributing to UX/UI development, interactive components, and API integrations.`,
    },
    {
      year: "2019 - 2022",
      title: "Android Developer",
      subTitle: "Thinkup Core",
      text: `Designed and developed android applications for clients. 
      Optimized applications, participated in design discussions, code reviews snd software architecture.`,
    },
    {
      year: "2019",
      title: "Digital Marketing",
      subTitle: "Google Inc",
      text: `Completed Google’s Digital Marketing Certification, developing foundational skills in SEO, SEM, content strategy, analytics, and online advertising.`,
      // text: "Completed Google’s Digital Marketing certification course, gaining hands-on experience in SEO, SEM, content strategy, analytics, and online advertising. Developed practical skills in building digital campaigns, optimizing web presence, and using data-driven insights to improve marketing performance."
    },
  ];

  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Work Experience"} />
        </div>

        <div className="resume-content">
          {resumeData.map((item, id) => (
            <ResumeItem
              key={id}
              year={item.year}
              title={item.title}
              subTitle={item.subTitle}
              text={item.text}
            />
          ))}
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2015 - 2020"}
            title={"Computer Science Degree"}
            subTitle={"Federal University of Technology Owerri"}
            text={``}
          />
          {/* <ResumeItem
            year={"2012 - 2015"}
            title={"O - Levels"}
            subTitle={"Federal Government College Ikot Ekpene"}
            text={``}
          /> */}
          {/* <ResumeItem
            year={"2015 - 2017"}
            title={"High School Graduation"}
            subTitle={"ABC School"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          /> */}
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
