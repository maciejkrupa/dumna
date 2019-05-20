import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import Layout from '../layouts/Layout';
import Container from '../layouts/Container';

const AboutTxt = styled.h3`

`
const StyledParagraph = styled.p`
  font-family: Open Sans,sans-serif;
  font-weight: 400;
  line-height: 2;
`

const About = (justify, interWord) => (
  <Layout>
    <Helmet title={'O Nas'} />
    <Container center={justify} interWord={interWord}>
      <AboutTxt>
        <StyledParagraph>
          <strong>
          <font color="#ac8d64">Fundacja DUMNA.PL </font></strong>powstała aby krzewić patriotyzm i pomagać słabszym.
        </StyledParagraph>

        <StyledParagraph>
          Mając na uwadze stworzenie młodym ludziom warunków do właściwego rozwoju i nauki przygotowaliśmy unikatową propozycję wydarzeń, spektakli i inicjatyw związanych z obchodami Roku Piłsudskiego. Wierząc w mądrą edukację młodzieży, dbałość o pamięć o najważniejszych wydarzeniach historycznych i ciekawą formę przekazywania wiedzy. W 2018 roku z okazji rocznicy Odzyskania Niepodległości przez Polskę organizowaliśmy przedstawienia patriotyczne <i>„Zawsze na Przedzie”</i>.

          Rok 2019 rozpoczęliśmy nawiązaniem współpracy z <i>Ogrodem Botanicznym Uniwersytetu Wrocławskiego</i>. Wspólnie z Fundacją <i>„Pomóżmy Dzieciom Niepełnosprawnym i Osobom Starszym”</i> zorganizowaliśmy uroczyste otwarcie sezony w Ogrodzie Botanicznym. W planach na ten tok mamy budowę ścieżek w Ogrodzie dostosowanych dla Osób Niepełnosprawnych.

          Po sukcesie jaki odnieśliśmy z Przedstawieniem <i>„Zawsze Na Przedzie”</i> kontynuujemy nasz program patriotyczny. Tym razem mamy zamiar uczcić <strong>ROK MONIUSZKOWSKI</strong> organizując serię koncertów.{' '}
        </StyledParagraph>
      </AboutTxt>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  justify: PropTypes.object,
  interWord: PropTypes.object,
};
