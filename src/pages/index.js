import React, { useState } from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Header from '../components/Header';

let secs = 0;
setInterval(() => {
  secs = new Date().getSeconds();
  // setSecs(s);
  // console.log(secs);
}, 1000);

const IndexPage = () => {
  let [bgIdx, setBgIdx] = useState(Math.floor(secs / 15) % 2);
  const goAgain = () =>
    setTimeout(() => {
      console.log(`viva perón!`);

      setBgIdx(Math.floor(secs / 15) % 2);
      goAgain();
    }, 1500);
  goAgain();
  return (
    <Layout bgIdx={bgIdx}>
      <>
        <div id="overlay" />
        <div id="main">
          <Header />
          <Footer />
        </div>
      </>
    </Layout>
  );
};

export default IndexPage;
