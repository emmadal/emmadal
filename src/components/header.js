import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Icon from './icon'
import '../styles/header.css'
const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Project',
    href: '/project',
  },
]

const Container = styled.div`
  max-width: 100vw;
  height: 17vh;
  margin: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.background};
  transition: all 0.5s ease-out;
  @media only screen and (max-width: 768px) {
    margin: 0 2rem;
  }
`

const Links = styled.ul`
  list-style-type: none;
  margin: 0;
  cursor: default;
  text-align: center;
  font-font: 'IBM Plex Sans';
`

const LinksItem = styled.li`
  padding: 0;
  margin: 0;
  display: inline-block;
  font-font: 'IBM Plex Sans';
  margin-left: 18px;
  cursor: pointer;
  color: ${props => props.theme.colors.textColor};
  user-select: none;
`

const Header = ({ isDark, setIsDark }) => (
  <Container>
    <Icon isDark={isDark} setIsDark={setIsDark} />
    <Links style={{ fontFamily: "Indie Flower" }}>
      {links.map(link => (
        <LinksItem key={link.href}>
          <Link
            className="link"
            to={link.href}
          >
            {link.title}
          </Link>
        </LinksItem>
      ))}
    </Links>
  </Container>
)

export default Header
