import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import '../styles/layout.css'

const Container = styled.div`
  text-align:'justify';
  font-family: 'IBM Plex Sans';
  font-size: 1.3rem;
  line-height: 1.9rem;
  margin-top: 40px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h1>Hi people <span role="img">✋</span>,</h1>
        <h2 style={{ lineHeight: 1.6 }}>My name is Emmanuel Dalougou, Front End developer <span role="img">💻</span> living in Ivory Coast
        </h2>
        <p>I love thing about Javascript, GraphQL, React, NodeJS and Typescript.</p>
        <p>My hobbies are the football, music and the food <span role="img">😋</span>.</p>
        <p>Feel free to send me a message on my social network.</p>
    </Container>
  </Layout>
)

export default IndexPage
