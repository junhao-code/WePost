import React from 'react';
import { Tabs, Button, Spin} from 'antd';
import { GEO_OPTIONS, POS_KEY} from "../constants"

const TabPane = Tabs.TabPane;

const operations = <Button>New Post</Button>;

export class Home extends React.Component {

  state = {
    loadingGeolocation: false,
  }
  // After componentdidmount in the lifecycle, we will load posts
  // componentDidMount will only be executed at the beginning, thus we decide that we only have to get geolocation from the beginning
  // no modification is necessary later on.
  componentDidMount() {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      this.setState({loadingGeolocation : true});
      navigator.geolocation.getCurrentPosition(
          this.onSuccessLoadGeolocation,
          this.onFailedLoadGeolocation,
          GEO_OPTIONS,
      );
    } else {
      /* geolocation IS NOT available */
    }
  }

  onSuccessLoadGeolocation = (position) => {
    console.log(position);
    // destructuring coords
    const {latitude: lat, longitude: lon} = position.coords;
    // if {lat: lat, lon: lon} are saved without stringify, they will be saved as objects
    localStorage.setItem(POS_KEY, JSON.stringify({lat: lat, lon: lon}));
    this.setState({loadingGeolocation : false});

  }

  onFailedLoadGeolocation = () => {
    this.setState({loadingGeolocation : false});
  }

  getGalleryPanelContent = () => {
    if (this.state.loadingGeolocation) {
      // show spinner
      return <Spin tip="Loading Geolocation..."></Spin>;

    }
    return null;
  }

  render() {
    return (
        <Tabs
            tabBarExtraContent={operations}
            className="main-tabs"
        >
          <TabPane tab="Posts" key="1">
            {this.getGalleryPanelContent()}
          </TabPane>
          <TabPane tab="Map" key="2">
            Content of tab 2
          </TabPane>
        </Tabs>
    );
  }
}
