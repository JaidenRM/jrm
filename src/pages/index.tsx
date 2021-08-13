import * as React from "react";
import { Seo } from "../components/seo";
import { HeroSection } from "../components/sections/hero";
import { ExperienceSection } from "../components/sections/experience";
import { ProjectSection } from "../components/sections/project";
import { AboutSection } from "../components/sections/about/index";

const IndexPage: React.FC = () => (
  <>
    <Seo title="Home" />
    <HeroSection id="hero" />
    <AboutSection enterLeft id="about" />
    <ExperienceSection enterLeft={false} id="experience" />
    <ProjectSection enterLeft id="projects" />
  </>
);

export default IndexPage;
