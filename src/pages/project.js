import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import data from '../data'

const Container = styled.div`
  text-align:justify;
  font-family: 'IBM Plex Sans';
  font-size: 1.2rem;
  line-height: 2rem;
`
const ProjectPage = () => (
  <Layout>
    <SEO title="Project" />
    <Container >
      {data.map((item, key) => (
        <details style={{ marginTop: 25, marginBottom: 25}} key={key}>
          <summary>{item.title}</summary>
          <h2 style={{ marginTop: 15, color: 'rgb(29, 161, 242)' }}>Technology</h2>
          <p>{item.technology}.</p>
          <h2 style={{ marginTop: 15, color: 'rgb(29, 161, 242)' }}>Goal</h2>
          <p>{item.description}</p>
          <a href={item.link} style={{ fontSize: '1.1rem', color: 'rgb(29, 161, 242)' }}>Check</a>
        </details>
      ))}
      <p style={{ textAlign: 'center'}}>You can find all my works on <a href="https://github.com/emmadal" style={{ color:'rgb(29, 161, 242)'}}>Github</a></p>
    </Container>
  </Layout>
)

export default ProjectPage
