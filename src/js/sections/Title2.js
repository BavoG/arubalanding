import React from 'react';

import classnames from 'classnames';

import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import InfographicSection from '../components/InfographicSection';
import PlatformApple from 'grommet/components/icons/base/PlatformApple';

import Anchor from 'grommet/components/Anchor';

const CLASS_ROOT = "title-section";

export default function Title2() {
  let classes = classnames([
    CLASS_ROOT,
    `${CLASS_ROOT}--left-align`
  ]);

  return (
    <InfographicSection className={classes} direction="row" colorIndex="accent-2 ">
      <Box className={`${CLASS_ROOT}__col-1`} pad={{vertical: "medium"}}>
      <Anchor href="https://itunes.apple.com/be/app/aruba-campus/id734831306?l=nl&mt=8" target="_blank">
        <PlatformApple size="huge" colorIndex="grey-1" />
        </Anchor>
      </Box>
      <Box className={`${CLASS_ROOT}__col-2`} direction="column" alignContent="start">
        <Headline className={`${CLASS_ROOT}__title`} size="large" strong={true}>Install on iOs</Headline>
        <Headline className={`${CLASS_ROOT}__desc`} size="small">
        Give the apple logo a quick click and you'll be taken to the app store
        </Headline>
        </Box>
    </InfographicSection>
  );
};
