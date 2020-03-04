import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
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

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Div>{children}</Div>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
