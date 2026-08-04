import React from "react";
import Skills from "../Components/Skills";
import { MainLayout } from "../styles/Layouts";
import Resume from "../Components/Resume";
import Title from "../Components/Title";
import GitHubContributions from "../Components/GithubContributions";

function ResumePage() {
  return (
    <MainLayout>
      <Skills />
      {/* <Resume /> */}
      <section className="pb-16">
        <Title title={"Github Activity"} span={"Github Activity"} />
        <GitHubContributions />
      </section>
    </MainLayout>
  );
}

export default ResumePage;
