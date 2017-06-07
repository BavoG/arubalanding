import React from 'react';

import classnames from 'classnames';

import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';

import Box from 'grommet/components/Box';
import InfographicSection from '../components/InfographicSection';
import Home from 'grommet/components/icons/base/Home';
import Mail from 'grommet/components/icons/base/Mail';



const CLASS_ROOT = "title-section";

export default function Title3() {
  let classes = classnames([
    CLASS_ROOT,
    `${CLASS_ROOT}--left-align`,
    `${CLASS_ROOT}--column-reverse`
  ]);

  return (
    <InfographicSection className={classes} direction="row" colorIndex="neutral-1">
      <Box className={`${CLASS_ROOT}__col-2`} direction="column" alignContent="start">
        <Headline className={`${CLASS_ROOT}__title`} size="large" strong={true}>Content Matters!</Headline>
        <Headline className={`${CLASS_ROOT}__desc`} size="small">
        We need your help to expand the content of the APP.
        If you are a part of GSD (Account support managers, technical consultants, etc.)
        and want to present your part of the organisation, Reach out!
        </Headline>
        <Heading className={`${CLASS_ROOT}__stat-desc`} tag="h2" strong={true}>
        ASM's please add your customers via the sharepoint
        </Heading>
        <Box direction="row" responsive={false} align="center" wrap={true}>
        <Anchor href="mailto:bavo@hpe.com?Subject=Content%20suggestion" target="_blank">
          <Mail size="xlarge" colorIndex="light-1" />
        </Anchor>
        <Anchor href="https://ent302.sharepoint.hpe.com/teams/asm-sharepoint-belux/Lists/Customer%20SPOCs" target="_blank">
          <Image src="img/SharePoint-icon.png" full='true' size="small"/>
        </Anchor>
        </Box>
        <Heading className={`${CLASS_ROOT}__stat-desc`} tag="h4" strong={true}>
        Use this link only for content suggestion
        </Heading>
      </Box>
      <Box className={`${CLASS_ROOT}__col-1`} pad={{vertical:"medium", horizontal:"medium"}}>
         <Home size="huge" colorIndex="light-1" />
      </Box>
    </InfographicSection>
  );
};
