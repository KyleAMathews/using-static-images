import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function SecondPage() {
  return (
    <div>
      <StaticImage
        src="../images/drink-unsplash.jpg"
        maxWidth={450}
        layout="constrained"
        alt="hi"
      />
      <h1>hi</h1>
      <Link to="/">home</Link>
    </div>
  )
}
