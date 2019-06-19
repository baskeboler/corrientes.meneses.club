import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import config from '../../config';

import '../assets/sass/main.scss';
const Layout = ({ children, darkText }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'title', content: config.siteTitle },
            { name: 'description', content: 'Corrientes y Meneses' },
            { name: 'keywords', content: 'site, web' },
            { name: 'image', content: `${config.siteUrl}${config.siteLogo}` },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:creator', content: '@baskeboler' },
            { name: 'twitter:title', content: config.siteTitle },
            { name: 'twitter:description', content: 'Corrientes y Meneses' },
            {
              name: 'twitter:image',
              content: `${config.siteUrl}${config.siteLogo}`,
            },
            { name: 'title', content: config.siteTitle },
            { name: 'og:description', content: 'Corrientes y Meneses' },
            { name: 'og:title', content: config.siteTitle },
            {
              name: 'og:image',
              content: `${config.siteUrl}${config.siteLogo}`,
            },
            { name: 'og:type', content: 'website' },
            { name: 'og:url', content: config.siteUrl },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div id="wrapper" className={darkText ? 'dark-text' : ''}>
          {children}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  darkText: PropTypes.bool,
};

export default Layout;
