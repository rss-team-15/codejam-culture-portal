import React from "react"
import { Link } from "gatsby"

import App from "../app/"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Home from '../components/home';

const IndexPage = () => (
  <App>
    <SEO title="Home" />
    <Home />
  </App>
)

export default IndexPage
