import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter} from "@fortawesome/free-brands-svg-icons"
import Header from './header'
import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'
import '../styles/layout.css'

const Container = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  max-width: auto;
  padding: 0 1.0875rem 1.45rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
  transition: all 0.5s ease-out;
`
const Div = styled.div`
  margin:0 auto;
  max-width:980px;
  padding:2rem;
`

const Layout = ({ children }) => {
  const initialScroll = 0
  const [height, setHeight] = useState(0)
  let localIsDark

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('isDark') === 'false') {
      localIsDark = false
    } else {
      localIsDark = true
    }
    console.log(localIsDark ? 'dark mode' : 'light mode')
  }

  const [isDark, setIsDark] = useState(localIsDark)
  const handleScrollTop = () => setHeight(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScrollTop)
    return () => window.removeEventListener('scroll', handleScrollTop)
  })

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Div>
          {children[0].props.title === 'Home' ? '' : (
            <div>
              <h1 style={{ marginTop: 13, color: 'rgb(29, 161, 242)' }}>{children[0].props.title}</h1>
              {isDark ? <hr style={{ height: 2, backgroundColor: '#fff' }} /> : <hr style={{ height: 2 }} />}
            </div>
          )}
          {children}
        </Div>
        {
          height === initialScroll ? (
            <section className="section-msg">
              <a href="https://twitter.com/emmanuel_dal">
                <FontAwesomeIcon icon={faTwitter} size='1x' color={'#fff'} style={{ marginTop: 5 }} title="Follow me" />
              </a>
            </section>
          ) : (
              <section className="section-msg1">
                <a href="https://twitter.com/emmanuel_dal">
                  <FontAwesomeIcon icon={faTwitter} size='1x' spin color={'#fff'} style={{ marginTop: 5 }} title="Follow me" />
                </a>
              </section>
            )
        }
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
