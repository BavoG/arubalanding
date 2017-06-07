import React from 'react';

import classnames from 'classnames';

import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import InfographicSection from '../components/InfographicSection';

import PlatformAndroid from 'grommet/components/icons/base/PlatformAndroid';
import Anchor from 'grommet/components/Anchor';




const CLASS_ROOT = "title-section";

export default function Title1 () {
  const classes = classnames([
    CLASS_ROOT,
    `${CLASS_ROOT}--left-align`,
    `${CLASS_ROOT}--column-reverse`
  ]);

  return (
    <InfographicSection className={classes} direction="row" colorIndex="accent-1">
      <Box className={`${CLASS_ROOT}__col-2`} direction="column" alignContent="start">
        <Headline className={`${CLASS_ROOT}__title`} size="large" strong={true}>
        Install on Android
        </Headline>


        <Headline className={`${CLASS_ROOT}__desc`} size="small">
        Click on the Android logo to go to the app store
        </Headline>
      </Box>
      <Box pad={{vertical: "medium", between: "medium"}} direction="column"
         className={`${CLASS_ROOT}__col-1`}justify="center">
         <Anchor href="https://play.google.com/store/apps/details?id=com.arubanetworks.campus" target="_blank">
        <PlatformAndroid size="huge" colorIndex="grey-1" />
        </Anchor>
      </Box>




    </InfographicSection>
  );
};
