import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ProgressBar from "./ProgressBar";
import {
  Android,
  Bootstrap,
  CSS,
  Firebase,
  Graphql,
  HTML,
  Java,
  Javascript,
  MaterialUi,
  NextJs,
  Angular,
  Node,
  PHP,
  ReactJs,
  Redux,
  SCSS,
  Tailwind,
  Wordpress,
  Typescript,
  Typescript2,
} from "../assets/svg/skills";
import SkillsCard from "./skillsCard";
import ResponsiveWeb from "../assets/img/icons8-responsive-design-64.png";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <SkillsCard image={<Javascript />} title={"Javascript"} />
          <SkillsCard image={<Typescript />} title={"Javascript"} />
          <SkillsCard image={<CSS />} title={"CSS"} />
          <SkillsCard image={<HTML />} title={"HTML"} />
          <SkillsCard image={<ReactJs />} title={"React.Js"} />
          <SkillsCard image={<NextJs />} title={"Next.Js"} />
          <SkillsCard image={<Angular />} title={"Angular"} />
          <SkillsCard image={<Tailwind />} title={"Tailwind"} />
          <SkillsCard image={<PHP />} title={"PHP"} />
          <SkillsCard image={<SCSS />} title={"SCSS"} />
          <SkillsCard image={<Bootstrap />} title={"Bootstrap"} />
          <SkillsCard image={<Wordpress />} title={"Wordpress"} />
          <SkillsCard image={<MaterialUi />} title={"MaterialUi"} />
          <SkillsCard image={<Node />} title={"Node"} />
          <SkillsCard
            image={<img src={ResponsiveWeb} style={{ width: 40 }} alt="" />}
            title={"Responsive Web design"}
          />
          <SkillsCard image={<Java />} title={"Java"} />
          <SkillsCard image={<Firebase />} title={"Firebase"} />
          <SkillsCard image={<Graphql />} title={"Graphql"} />
          <SkillsCard image={<Redux />} title={"Redux"} />
          <SkillsCard image={<Android />} title={"Android"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 701px) and (max-width: 814px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 815px) and (max-width: 1060px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Skills;
