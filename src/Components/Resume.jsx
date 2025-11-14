import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import SmallTitle from "./SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "./ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Work Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2022"}
            title={"Front End Developer"}
            subTitle={"Proctorme"}
            text={` Worked with a front end team to develop and maintain Web applications
            and services using Reactjs, Redux, Sass, bootstrap. Also Collaborating with git and integrating apis.`}
          />
          <ResumeItem
            year={"2020"}
            title={"Android Developer"}
            subTitle={"Thinkup Core"}
            text={
              "Designed and developed android applications for clients. Optimized applications, participated in design discussions, code reviews snd software architechure. "
            }
          />
          <ResumeItem
            year={"2019"}
            title={"Digital Marketing"}
            subTitle={"Google Inc"}
            text={` `}
          />
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
          <ResumeItem
            year={"2012 - 2015"}
            title={"O - Levels"}
            subTitle={"Federal Government College Ikot Ekpene"}
            text={``}
          />
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
