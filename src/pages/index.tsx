import * as React from "react";
import map from "lodash/map";
import { Seo } from "../components/seo";
import { INFO_DATA } from "../content/info";
import { InfoSection } from "../components/sections/info";
import { HeroSection } from "../components/sections/hero";

const IndexPage: React.FC = () => (
  <>
    <Seo title="Home" />
    <HeroSection />
    {map(INFO_DATA, (info, idx) => (
      <InfoSection key={idx} {...info} />
    ))}
  </>
);

export default IndexPage;
