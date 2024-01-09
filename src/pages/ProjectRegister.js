import React, { useState } from 'react';
import styled from 'styled-components';
import StepHeader from '../components/register/StepHeader';

const ProjectRegister = () => {
  return (
    <Wrapper>
      <StepHeader step={1} />
      <StepBody></StepBody>
    </Wrapper>
  );
};

export default ProjectRegister;

const Wrapper = styled.div`
  height: 100vh;
  padding-top: 10rem;
`;
const StepBody = styled.div``;
