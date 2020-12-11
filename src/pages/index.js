import React from "react"
import { StaticImage } from "gatsby-plugin-image"
export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1>Static Images</h1>
      <section style={{ maxWidth: 600, margin: "auto" }}>
        <StaticImage src="../images/paraty-unsplash.jpg" width={600} alt="hi" />
      </section>

      <section>
        Hi! yo
        <StaticImage
          src="../images/drink-unsplash.jpg"
          layout="fixed"
          height={250}
          width={100}
          alt="hi"
        />
        <StaticImage src="../images/drink-unsplash.jpg" width={250} alt="hi" />
        <StaticImage
          src="../images/drink-unsplash.jpg"
          maxWidth={250}
          layout="constrained"
          alt="hi"
        />
        <StaticImage
          src="../images/drink-unsplash.jpg"
          maxWidth={250}
          layout="constrained"
          alt="hi"
        />
        <StaticImage
          src="../images/bicycle-unsplash.jpg"
          rotate={90}
          width={400}
          height={250}
          alt="hi"
        />
      </section>
    </div>
  )
}
