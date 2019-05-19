import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import Layout from '../layouts/Layout';
import Container from '../layouts/Container';

const AboutTxt = styled.h3`
 padding-top: 10rem;
`

const About = (justify, interWord) => (
  <Layout>
    <Helmet title={'O Nas'} />
    <Container center={justify} interWord={interWord}>
      <AboutTxt>
        Fundacja DUMNA.PL powstała aby krzewić patriotyzm i pomagać słabszym.

        Mając na uwadze stworzenie młodym ludziom warunków do właściwego rozwoju i nauki przygotowaliśmy unikatową propozycję wydarzeń, spektakli i inicjatyw związanych z obchodami Roku Piłsudskiego. Wierząc w mądrą edukację młodzieży, dbałość o pamięć o najważniejszych wydarzeniach historycznych i ciekawą formę przekazywania wiedzy. W 2018 roku z okazji rocznicy Odzyskania Niepodległości przez Polskę organizowaliśmy przedstawienia patriotyczne „Zawsze na Przedzie”

        Rok 2019 rozpoczęliśmy nawiązaniem współpracy z Ogrodem Botanicznym Uniwersytetu Wrocławskiego. Wspólnie z Fundacją „Pomóżmy Dzieciom Niepełnosprawnym i Osobom Starszym” zorganizowaliśmy uroczyste otwarcie sezony w Ogrodzie Botanicznym. W planach na ten tok mamy budowę ścieżek w Ogrodzie dostosowanych dla Osób Niepełnosprawnych.

        Po sukcesie jaki odnieśliśmy z Przedstawieniem „Zawsze Na Przedzie” kontynuujemy nasz program patriotyczny. Tym razem mamy zamiar uczcić ROK MONIUSZKOWSKI organizując serię koncertów.{' '}
      </AboutTxt>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  justify: PropTypes.object,
  interWord: PropTypes.object,
};
