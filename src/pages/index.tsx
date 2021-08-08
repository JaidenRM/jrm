import * as React from "react";
import { Seo } from "../components/seo";
import { HeroSection } from "../components/sections/hero";
import { ExperienceSection } from "../components/sections/experience";
import { ProjectSection } from "../components/sections/project";

const IndexPage: React.FC = () => (
  <>
    <Seo title="Home" />
    <HeroSection id="hero" />
    <ExperienceSection enterLeft id="experience" />
    <ProjectSection enterLeft={false} id="projects" />
  </>
);

export default IndexPage;
