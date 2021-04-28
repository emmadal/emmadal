import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import '../styles/layout.css'

const Container = styled.div`
  margin-top: 40px;
`
const Text = styled.p`
  font-family: Caveat;
  line-height: 1.1;
  font-size: 3.7rem;
`
const Span = styled.span`
  font-family: Caveat;
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 200;
`
const Title = styled.h1`
  font-family: Caveat;
  font-weight: 100;
`

function IndexPage() {
  const [message, setMessage] = useState('')

  const greetingTime = () => {
    const currentHour = new Date().getUTCHours()
    const afternoon = 13
    const morning = 24
    const evening = 18
    if (
      (currentHour <= morning && currentHour <= afternoon) ||
      (currentHour > morning && currentHour > morning && currentHour > evening)
    ) {
      setMessage('Good Morning ☕')
    }
    if (currentHour >= afternoon && currentHour <= evening) {
      setMessage('Good afternoon 🎉')
    }
    if (currentHour >= evening) {
      setMessage('Good evening 🛏️')
    }
  }
  useEffect(() => {
    greetingTime()
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Title>
          <span role="img"></span> {message}
        </Title>
        <Text>
          I'm Emmanuel Dalougou, Front End developer from Ivory coast
          <span role="img" aria-label="flag"> 🇨🇮</span>
        </Text>
        <Span>
          I work remotely with some compagnies to achieve their projects. I love things about Javascript, GraphQL, React, Typescript and Deno.
        </Span>
      </Container>
    </Layout>
  )
}

export default IndexPage
