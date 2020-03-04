import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Container = styled.div`
  text-align:justify;
  font-family: 'IBM Plex Sans';
  font-size: 1.2rem;
  line-height: 2rem;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <p><strong>Emmanuel Dalougou</strong> is a Front End Developer living in Ivory coast. I love work with <code>Javascript</code><code>React</code><code>GraphQL</code><code>NodeJS</code>
      </p>
      <p>
        I hold a bachelor's degree in networks and telecommunications. I turned to programming because it has always been a passion for me and it has always made me read strange information on computer screens that others could not understand.
      </p>
      <p>
        It was in 2015 that it all started when I decided to do the penstest with KALI LINUX. as I progressed in the pentest with the Metasploit tool, I had to build my own exploits (line of code to exploit the flaws of a computer in order to take control of this computer) in python language . Whenever I tried to build an exploit in python, my exploits were so limited because the operating systems had security patches from day to day.
      </p>
      <p>
        Day after day he advised me, gave me tips and many other things. Today I am a front end developer who loves programming every day. I enjoy each line of code I write and the methods I learn to improve my skills.
      </p>
      <p>During my free time, I like to go play soccer, or listen to music to make my senses travel to distant countries.
      </p>
    </Container>
  </Layout>
)

export default AboutPage
