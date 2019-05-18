import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  text-align: ${props => (props.center ? 'center' : '')};
  width: 100%;
  height: 100%;
  padding: 2rem 4rem 2rem 2rem;
  @media screen and (min-width: 1000px) {
    padding: 2rem 4rem 2rem 16%;
  }
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  max-width: ${props => props.theme.layout[props.type]};
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 90%;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 95%;
  }
`;

const Container = ({ children, type, className, center }) => (
  <Wrapper className={className} type={type} center={center}>
    {children}
  </Wrapper>
);

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.object,
};
