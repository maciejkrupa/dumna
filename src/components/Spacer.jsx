import React from 'react'
import styled from '@emotion/styled'

const MainToken  = styled.div`
  height: 4rem;
  position: relative;
  @media screen and (min-width: 1000px) {
    height: 1rem;
  }
`
const Spacer = () => (
    <MainToken id = "main_spacer">
    </MainToken>
);

export default Spacer

