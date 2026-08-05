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
import { fadeUpMixin } from "../styles/shared";

function Skills() {
  const SKILLS_CATEGORIES = [
    {
      title: "Languages",
      skills: [
        {
          name: "JavaScript",
          icon: Javascript,
        },
        {
          name: "TypeScript",
          icon: Typescript2,
        },
        {
          name: "Java",
          icon: Java,
        },
        {
          name: "PHP",
          icon: PHP,
        },
      ],
    },
    {
      title: "Frontend Frameworks & State",
      skills: [
        {
          name: "React.js",
          icon: ReactJs,
        },
        {
          name: "Next.js",
          icon: NextJs,
          invertInDark: true,
        },
        {
          name: "Angular",
          icon: Angular,
        },
        {
          name: "Redux",
          icon: Redux,
        },
      ],
    },
    {
      title: "UI Design & Styling",
      skills: [
        {
          name: "Tailwind CSS",
          icon: Tailwind,
        },
        {
          name: "SCSS",
          icon: SCSS,
        },
        {
          name: "MaterialUI",
          icon: MaterialUi,
        },
        {
          name: "HTML5 / CSS3",
          icon: HTML,
        },
        {
          name: "Bootstrap",
          icon: Bootstrap,
        },
      ],
    },
    {
      title: "Backend, Cloud & CMS",
      skills: [
        {
          name: "Node.js",
          icon: Node,
        },
        {
          name: "GraphQL",
          icon: Graphql,
        },
        {
          name: "Firebase",
          icon: Firebase,
        },
        {
          name: "WordPress",
          icon: Wordpress,
        },
        {
          name: "Android Development",
          icon: Android,
        },
      ],
    },
  ];
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />

      <InnerLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_CATEGORIES.map((category, index) => (
            <SkillWrap key={index} delay={index * 0.1}>
              <div className="bg-[var(--background-dark-grey)] border border-[var(--border-color)] backdrop-blur-sm p-6 rounded-xl hover:border-[var(--primary-color-light)] transition-all duration-300 shadow-sm">
                {/* Category Subheading */}
                <h3 className="text-lg font-semibold text-[var(--primary-color-light)] tracking-wide mb-4 border-b border-[var(--border-color)] pb-2">
                  {category.title}
                </h3>

                {/* Sub-grid for skill badges */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex items-center gap-3 p-3 bg-[var(--background-dark-color)] border border-[var(--border-color)] rounded-lg hover:border-[var(--primary-color)] transition-all duration-200 group hover:-translate-y-0.5"
                    >
                      {/* SVG Tech Logo replacing generic bullet */}
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                        <skill.icon />
                      </div>

                      {/* Tool/Language Title */}
                      <span className="text-sm font-medium text-[var(--white-color)] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SkillWrap>
          ))}
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
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 16px;
      grid-column-gap: 8px;
    }
    @media (min-width: 701px) and (max-width: 814px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 815px) and (max-width: 1060px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 375px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const SkillWrap = styled.div`
  ${({ delay }) => fadeUpMixin(`${delay}s`)};
`;
export default Skills;
