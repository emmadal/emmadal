import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components'


const Div = styled.div`
  margin:0 auto;
  max-width:980px;
  padding:2rem;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <Div>
      <h1 style={{textAlign:'center'}}>ERROR PAGE NOT FOUND</h1>
      <p style={{textAlign:'center'}}>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Div>
  </Layout>
);

export default NotFoundPage;
