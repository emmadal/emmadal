import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
const data = [
  {
    title: 'React Weather',
    description: 'React weather app to get the weather in realtime',
    technology: 'React, Javascript',
    link: 'https://myreact-weather.netlify.app'
  },
  {
    title: 'Deno REST API',
    description: 'REST API with Deno, Oak and MongoDB write in Typescript',
    technology: 'React, Typescript, MongoDB',
    link: 'https://github.com/emmadal/api-activities',
  },
  {
    title: 'Movie Master',
    description: 'Provide a website for the movies',
    technology: 'React, Javascript',
    link: 'https://moviemaster.netlify.app/',
  },
  {
    title: 'Music Master',
    description: 'Provide a website for listen the resume of music',
    technology: 'React, Javascript',
    link: 'https://emmadal.github.io/musicmaster/',
  },
  {
    title: 'GraphQL server with MongoDB database',
    description: 'A GraphQL API connected to a MongoDB database',
    technology: 'Javascript, NodeJS, GraphQL',
    link: 'https://github.com/emmadal/graphmongo',
  },
  {
    title: 'Port Scan',
    description: 'PortScan is a port scanner build in javascript',
    technology: 'Javascript, NodeJS',
    link: 'https://github.com/emmadal/portscan',
  }
]

export const socialNetwork = [
  {
    link: 'https://twitter.com/emmanuel_dal',
    icon: faTwitter,
    color: '#1DA1F2',
    title: 'Twitter',
  },
  {
    link: 'https://www.linkedin.com/in/edalougou/',
    icon: faLinkedin,
    color: '#2867B2',
    title: 'Linkedin',
  },
  {
    link: 'https://github.com/emmadal',
    icon: faGithub,
    color: '#000',
    title: 'Github',
  },
]

export default data
