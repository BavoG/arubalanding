import React from 'react';

import InfographicSection from '../components/InfographicSection';
import StartButton from '../components/StartButton';
import Headline from 'grommet/components/Headline';
import Footer from 'grommet/components/Footer';

export default function Intro () {
  return (
    <InfographicSection className="infographic__section infographic__section--start"
      colorIndex="light-1">
      <div className="infographic__section-header">
        <Headline size="large" strong={true}>Aruba Campus</Headline>
      </div>
      <Headline size="small">
      Find your way around at Aruba office and event locations by searching for meeting rooms and offices. Access meeting information including agenda, speakers, surveys and presentations.
      </Headline>
      {/*<Box direction="row" full="horizontal" justify="center" align="center"
        pad={{vertical: "large"}} responsive={false}>
        <Box pad="medium">
        <Anchor href="https://play.google.com/store/apps/details?id=com.arubanetworks.campus" target="_blank">
        <Image src="img/aruba_android.bmp" size="medium" colorIndex="neutral-2"/>
        </Anchor>
        </Box>
        <Box pad="medium">
        <Anchor href="https://itunes.apple.com/be/app/aruba-campus/id734831306?l=nl&mt=8 " target="_blank">
        <Image src="img/aruba_ios.bmp" size="medium" colorIndex="neutral-2"/>
        </Anchor>
        </Box>
      </Box>*/}
      <Footer justify="center" align="center">
        <StartButton text="scroll down to continue"/>
      </Footer>
    </InfographicSection>
  );
}
