import React from 'react';
import styled from '@emotion/styled';
import Layout from '../layouts/Layout';

const Text = styled.div`
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
  margin: 0px;
  color: black;
`

const Item = styled.a`
  color: black;
  display: block;
`
const Contact= () => (
  <Layout>
  <Text>
      <Member>
        <Paragraph>Wojciech Samczuk</Paragraph>
        <Item>tel. 507 131 016</Item>
        <Item>wojciech@dumnaniepodlegla.pl</Item>
      </Member>
      <Member>
        <Paragraph>Robert Wróbel</Paragraph>
        <Item>tel. 602 283 476</Item>
        <Item>robert@dumnaniepodlegla.pl</Item>
      </Member>
      <Member>
        <Paragraph>Mieczysław Kopacz</Paragraph>
        <Item>tel. 502 261 218</Item>
        <Item>mieczyslaw@dumnaniepodlegla.pl</Item>
      </Member>
    </Text>
  </Layout>
);
export default Contact