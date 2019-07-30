import React from "react"
import { Link } from "gatsby"

import App from "../app/"
import AuthorsList from "../components/AuthorsList"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <App>
    <SEO title="Page two" />
    <Link to="/">Go back to the homepage</Link>
    <AuthorsList />
  </App>
)

export default SecondPage
