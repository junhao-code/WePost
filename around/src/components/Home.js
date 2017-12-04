import React from 'react';
import $ from 'jquery';
import { Tabs, Button, Spin} from 'antd';
import {AUTH_PREFIX, GEO_OPTIONS, POS_KEY, TOKEN_KEY, API_ROOT} from "../constants"


const TabPane = Tabs.TabPane;
const operations = <Button>Extra Action</Button>;

export class Home extends React.Component {
  state = {
    posts: [],
    error: '',
    loadingPosts: false,
    loadingGeoLocation: false,

  }
  componentDidMount() {
    if ("geolocation" in navigator) {
      this.setState({loadingGeoLocation:true, error:''});
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(
          this.onSuccessLoadGeoLocation,
          this.onFailedLoadGeoLocation,
          GEO_OPTIONS,
      );
    } else {
      console.log("geo location not supported!");
      this.setState({error:'your browser doesnt support geo location'});
    }
  }
  onSuccessLoadGeoLocation = (position) => {
    console.log(position);
    this.setState({loadingGeoLocation:false, error: '' });
    const { latitude: lat, longitude: lon } = position.coords;
    // stringify to save object into localstorage
    localStorage.setItem(POS_KEY, JSON.stringify({ lat: lat, lon: lon }));
    this.loadNearbyPosts();
  }

  onFailedLoadGeoLocation = () => {
    this.setState({loadingGeoLocation: false, error: 'Failed to load geolocation' });
  }

  getGalleryPanelContent = () => {
    if (this.state.error) {
      return <div>{this.state.error}</div>
    } else if (this.state.loadingGeoLocation) {
      return <Spin tip="loading geolocation ..."/>
    } else if (this.loadingPosts) {
      return <Spin tip="loading posts ..."/>
    }
    return null;
  }

  loadNearbyPosts = () => {
    // const {lat, lon} = JSON.parse(localStorage.getItem(POS_KEY));
    const {lat, lon} = {"lat":37.5629917,"lon":-122.32552539999998};
    this.setState({ loadingPosts: true });
    // console.log();
    $.ajax({
      url: `${API_ROOT}/search?lat=${lat}&lon=${lon}&range=20`,
      method: 'GET',
      headers: {
        Authorization: `${AUTH_PREFIX} ${localStorage.getItem(TOKEN_KEY)}`
      },
    }).then((response) => {
      this.setState({ loadingPosts: false, posts: response, error:''});
      console.log(response);
    }, (error) => {
      this.setState({ loadingPosts: false, error: error.responseText });
    }).catch((error) => {
      this.setState({ error: error });
    });
  }
  render() {
    return (
        <Tabs tabBarExtraContent={operations} className="main-tabs">
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