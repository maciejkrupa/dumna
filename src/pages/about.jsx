import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Layout'

export default () => (
  <Layout>
    
  Fundacja DUMNA.PL

  Fundacja DUMNA.PL powstała aby krzewić patriotyzm i pomagać słabszym.

  Mając na uwadze stworzenie młodym ludziom warunków do właściwego rozwoju i nauki przygotowaliśmy unikatową propozycję wydarzeń, spektakli i inicjatyw związanych z obchodami Roku Piłsudskiego. Wierząc w mądrą edukację młodzieży, dbałość o pamięć o najważniejszych wydarzeniach historycznych i ciekawą formę przekazywania wiedzy. W 2018 roku z okazji rocznicy Odzyskania Niepodległości przez Polskę organizowaliśmy przedstawienia patriotyczne „Zawsze na Przedzie”

  Rok 2019 rozpoczęliśmy nawiązaniem współpracy z Ogrodem Botanicznym Uniwersytetu Wrocławskiego. Wspólnie z Fundacją „Pomóżmy Dzieciom Niepełnosprawnym i Osobom Starszym” zorganizowaliśmy uroczyste otwarcie sezony w Ogrodzie Botanicznym. W planach na ten tok mamy budowę ścieżek w Ogrodzie dostosowanych dla Osób Niepełnosprawnych.

  Po sukcesie jaki odnieśliśmy z Przedstawieniem „Zawsze Na Przedzie” kontynuujemy nasz program patriotyczny. Tym razem mamy zamiar uczcić ROK MONIUSZKOWSKI organizując serię koncertów.
  </Layout>
)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`