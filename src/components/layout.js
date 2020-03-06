import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { socialNetwork } from '../data'
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
const Icon = styled.div`
  position: fixed;
  margin: 40px;
  padding: 10px;
  text-align: center;
  bottom: 0px;
  right: 0px;
  display: flex;
  flex-wrap: row wrap;
  justify-content: space-between;
`

const Layout = ({ children }) => {
  const [hscroll, setHScroll] = useState(0)
  let localIsDark

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('isDark') === 'false') {
      localIsDark = false
    } else {
      localIsDark = true
    }
  }

  const [isDark, setIsDark] = useState(localIsDark)
  const handleScrollTop = () => setHScroll(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScrollTop)
    return () => window.removeEventListener('scroll', handleScrollTop)
  })

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Div>
          {children[0].props.title === 'Home' || '404' ? '' : (
            <section>
              <h1 style={{ marginTop: 13, color: 'rgb(29, 161, 242)' }}>{children[0].props.title}</h1>
              {isDark ? <hr style={{ height: 2, backgroundColor: '#fff' }} /> : <hr style={{ height: 2 }} />}
            </section>
          )}
          {children}
        </Div>
        <Icon>
            {
              socialNetwork.map((m,key) =>(
                <a href={m.link} key={key}>
                  <FontAwesomeIcon icon={m.icon} size='2x' spin={hscroll === 0 ? false: true} color={isDark ?'#fff' : m.color} style={{ margin: 7 }} title={m.title}/>
                </a>
              ))
            }
        </Icon>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
