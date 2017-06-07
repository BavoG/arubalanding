import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Anchor from 'grommet/components/Anchor';
import Layer from 'grommet/components/Layer';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Headline from 'grommet/components/Headline';
import Share from 'grommet/components/icons/base/Share';
import SocialShare from 'grommet/components/SocialShare';
import PlatformAruba from 'grommet/components/icons/base/PlatformAruba';



import Progress from './Progress';

const CLASS_ROOT = 'section-nav';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layerActive: false
    };

    this._onClick = this._onClick.bind(this);
    this._onLayerClose = this._onLayerClose.bind(this);
  }

  _onClick() {
    if (this.props.progress >= 95) {
      this.setState({layerActive: true});
    }
  }

  _onLayerClose() {
    this.setState({layerActive: false});
  }

  render() {
    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--active`]:
          this.props.progress >= 95 || this.props.progress <= 0
      }
    );

    const navCta = (this.props.progress >= 95)
      ? <Anchor label={'Share'} icon={<Share />} reverse={true}
          onClick={this._onClick} primary={true} />
      : undefined;

    const layer = (this.state.layerActive) ? (
      <div className="share-layer">
        <Layer onClose={this._onLayerClose} closer={true} flush={true}
          align={"center"}>
          <div className="share">
            <Headline size={"large"} strong={true}>
              Thanks for sharing, we're glad you enjoyed it.
            </Headline>
            <div className="share__icons">
              <SocialShare type="email"
              link="https://bavog.github.io/arubalanding/"
              title="Aruba Campus"
              text="Check out the Aruba Campus app" />
              <SocialShare type="twitter"
              link="https://bavog.github.io/arubalanding/"
              text="@Aruba is stepping up with the all new Aruba Campus app." />
              <SocialShare type="facebook"
              link="https://bavog.github.io/arubalanding/" />
              <SocialShare type="linkedin"
              link="https://bavog.github.io/arubalanding/"
              title="Aruba Campus"
              text="Aruba is stepping up and created a new app: Aruba Campus" />
            </div>
          </div>
        </Layer>
      </div>
    ) : undefined;

    return (
      <Header className={classes} direction="column" pad={{between:"none"}}
        align="start">
        {layer}
        <Box full="horizontal" direction="row" align="center" justify="between"
          responsive={false} colorIndex="light-1" pad="medium">
          <PlatformAruba size="large" colorIndex="brand" />
          {navCta}
        </Box>
        <Progress progress={this.props.progress}/>
      </Header>
    );
  }
};

Nav.propTypes = {
  progress: PropTypes.number
};
