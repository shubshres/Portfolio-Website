import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, my name is <br/>Shubhayu Shrestha
        <br />
      </SectionTitle>
      <SectionText>
        I am currently a software engineering student at The University of Texas at Arlington expected to graduate in December 2022.<br/>
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/shubhayu-shrestha/"}>Connect With Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;