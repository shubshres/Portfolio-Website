import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Shubhayu Shrestha
        <br />
      </SectionTitle>
      <SectionText>
        Software Engineering Student at The University of Texas at Arlington '23<br/>
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/shubhayu-shrestha/"}>Connect With Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;