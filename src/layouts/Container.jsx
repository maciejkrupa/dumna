import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  text-align: left;
  @media screen and (min-width: 700px) {
    text-align: justify;
  }
  text-justify: inter-word;
  text-align: ${props => (props.justify ? 'justify' : '')};
  text-align: ${props => (props.interWord ? 'inter-word' : '')};
  width: 100%;
  height: 100%;
  padding: 2rem 2rem 2rem 2rem;
  @media screen and (min-width: 1000px) {
    padding: 2rem 3rem 2rem 16%;
  }
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  max-width: ${props => props.theme.layout[props.type]};
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
