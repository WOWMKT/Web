import React, { useEffect } from 'react';
import Header from './common/Header';
import styled from 'styled-components';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Main>{props}</Main>
    </div>
  );
};

const Main = styled.div``;

export default Layout;
