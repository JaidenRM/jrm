import * as React from "react"
import map from "lodash/map"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { INFO_DATA } from "../content/info"
import { InfoSection } from "../components/sections/info"
import { HeroSection } from "../components/sections/hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    {map(INFO_DATA, (info, idx) => (
      <InfoSection key={idx} {...info} />
    ))}
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
