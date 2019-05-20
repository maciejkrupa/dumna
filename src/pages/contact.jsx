import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import Layout from '../layouts/Layout';
import Container from '../layouts/Container';

const Text = styled.div`
  padding-top: 0;
  @media screen and (min-width: 1000px) {
    padding-top: 10rem;
  }
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: white;
`;

const Member = styled.div`
font-family: "Domine";
  display: inline-block;
  margin: 20px
`
const Paragraph = styled.p`
  font-size: 1.5rem;
  margin: 0px;
  color: black;
`

const Item = styled.a`
  color: #ac8d64;
  display: block;
  &:hover {
    color: #ac8d64;
  }
`
const Contact= (justify, interWord) => (
  <Layout>
    <Helmet title={'Kontakt'} />
    <Container center={justify} interWord={interWord}>
      <Text>
        <Member>
          <Paragraph>Wojciech Samczuk</Paragraph>
          <Item href="tel:+48507131016">tel. 507 131 016</Item>
          <Item href="wojciech@dumnaniepodlegla.pl">wojciech@dumnaniepodlegla.pl</Item>
        </Member>
        <Member>
          <Paragraph>Robert Wróbel</Paragraph>
          <Item href="tel:+48602283476">tel. 602 283 476</Item>
          <Item href="robert@dumnaniepodlegla.pl">robert@dumnaniepodlegla.pl</Item>
        </Member>
        <Member>
          <Paragraph>Mieczysław Kopacz</Paragraph>
          <Item href="tel:+48502261218">tel. 502 261 218</Item>
          <Item href="mailto:mieczyslaw@dumnaniepodlegla.pl">mieczyslaw@dumnaniepodlegla.pl</Item>
        </Member>
      </Text>
    </Container>
  </Layout>
);
export default Contact

Container.propTypes = {
  justify: PropTypes.object,
  interWord: PropTypes.object,
};
