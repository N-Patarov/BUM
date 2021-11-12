import React from 'react';
import Example from "../src/components/example/Example";
import Logo from "../src/components/logo/logo";
import Avatar from "../src/components/avatar/Avatar.jsx";
import Header from "../src/components/header/Header.jsx";

export default function Index() {
  return( 
    <div>
      <Header />
      <Avatar />
      <Example />
    </div>
  );
}
