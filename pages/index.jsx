import React from 'react';

import Header from "../src/components/header/Header.jsx";
import Card from "../src/components/card/Card.jsx";
import Trending from "../src/components/trending/Trending.jsx";

export default function Index() {
  return( 
    <div>
      <Header />
      <Card />
      <Trending />
    </div>
  );
}
