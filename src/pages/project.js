import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import data from '../data'

const ProjectPage = () => (
  <Layout>
    <SEO title="Project" />
    <div className="about" >
      {data.map((item, key) => (
        <details style={{ marginTop: 25, marginBottom: 25, fontFamily: 'Indie Flower' }} key={key}>
          <summary>{item.title}</summary>
          <h2 style={{ marginTop: 15, color: '#00e676' }}>Technology</h2>
          <p>{item.technology}.</p>
          <h2 style={{ marginTop: 15, color: '#00e676' }}>Goal</h2>
          <p>{item.description}</p>
          <a href={item.link} style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>Check</a>
        </details>
      ))}
      <p style={{ textAlign: 'center' }}>You can find all my works on <a href="https://github.com/emmadal" className="work-link">Github</a></p>
    </div>
  </Layout>
)

export default ProjectPage
