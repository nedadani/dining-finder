import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import PropTypes from "prop-types";

const mapStyles = {
	width: "75vw",
	height: "calc(100vh - 64px)"
};

class MapContainer extends React.Component {
  onClick = name => {
    this.props.markerOnClick(name);
  };

  render() {
    const restaurants = this.props.restaurants;

    return (
      <React.Fragment>
        {restaurants.length > 0 && (
          <Map
            google={this.props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={{
              lat: restaurants[0].location.latitude,
              lng: restaurants[0].location.longitude
            }}
          >
            {restaurants.map(restaurant => {
              return (
                <Marker
                  key={restaurant.id}
                  title={restaurant.name}
                  name={restaurant.name}
                  position={{
                    lat: restaurant.location.latitude,
                    lng: restaurant.location.longitude
                  }}
                  onClick={e => this.onClick(restaurant.name)}
                />
              );
            })}
          </Map>
        )}
      </React.Fragment>
    );
  }
}

MapContainer.propTypes = {
	restaurants: PropTypes.array.isRequired,
	markerOnClick: PropTypes.func.isRequired
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDPiXRQChLCChCAQT02pL5IRi3xo_iDhEM"
})(MapContainer);
