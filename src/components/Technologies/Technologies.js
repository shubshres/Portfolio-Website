import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider>
      <SectionTitle>Programming Languages</SectionTitle>
      <SectionText>I have had experience using programming langauges such as C++, C, Python, Java, R Studio, React.js, JavaScript, and Swift</SectionText>
    </SectionDivider>

  </Section>
);

export default Technologies;
