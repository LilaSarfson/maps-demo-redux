import * as React from 'react';
import '../index.css'
import { connect } from 'react-redux';


class DisplayMap extends React.Component {
    mapRef = React.createRef();
  state = {
    // The map instance to use during cleanup
    map: null
  };

  componentDidMount() {

    const H = window.H;
    const platform = new H.service.Platform({
        apikey: "k2pDqKQ6Seg9hbun5hLy5sdZKAYXxBfjIi_BkxXclGY"
    });

    const defaultLayers = platform.createDefaultLayers();

    // Create an instance of the map
    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        // This map is centered over Europe
        center: { lat: 50, lng: 5 },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1
      }
    );
 
    this.setState({ map });
  }

  // componentWillUnmount() {
  //   // Cleanup after the map to avoid memory leaks when this component exits the page
  //   this.state.map.dispose();
  // }

  render() {
    return (
      <>
      <div ref={this.mapRef} className='display-map' />
      {/* <p>Nose jeje</p> */}
      </>
    );
  }
}
export default DisplayMap;