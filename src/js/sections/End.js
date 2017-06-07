import React from 'react';

import InfographicSection from '../components/InfographicSection';
import EndButton from '../components/EndButton';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Like from 'grommet/components/icons/base/Like';


export default function End(props) {
  return (
    <InfographicSection className="infographic__section infographic__section--end"
      colorIndex="light-2">
      <Box direction="row" justify="center" align="center">

        <Box>
          <Headline size="large">
          We appreciate your feedback and always take it into account! So feel free to leave a rating or some comments in the app store
          </Headline>
        </Box>
        <Box pad="medium" alignSelf="start">
          <Like size="huge" colorIndex="grey-1" />
        </Box>
      </Box>
      <EndButton onClick={props.onEndClick}/>
    </InfographicSection>
  );
};
