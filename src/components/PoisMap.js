import { View, Text, Dimensions } from 'react-native';
import MapView from "react-native-maps";
import ClusteredMapView from "react-native-maps-super-cluster";
import { Marker } from 'react-native-maps'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as poisActions from '../actions/poisActions';

class PoisMap extends Component {

    renderMarker = data => (
        <View key={data.location.latitude}>
            <MapView.Marker coordinate={data.location} >
            </MapView.Marker>
            <MapView.Marker coordinate={data.location} >
                <Text >{data.location.label}</Text>
            </MapView.Marker>
        </View>
    );

    renderCluster = (cluster, onPress) => {
        const pointCount = cluster.pointCount,
            coordinate = cluster.coordinate,
            clusterId = cluster.clusterId
        const clusteringEngine = this.map.getClusteringEngine(),
            clusteredPoints = clusteringEngine.getLeaves(clusterId, 100)

        return (
            <Marker coordinate={coordinate} onPress={onPress}>
                <View >
                    <Text >
                        {pointCount} pois
                    </Text>
                </View>
            </Marker>
        )
    };

    render() {

        const { poisModel } = this.props;
        console.log("dsds", JSON.stringify(poisModel))
        const locationPermission = poisModel.user.permission
        //Athens lat/long as default values
        const initLatitude = locationPermission ? poisModel.user.location.latitude : 37.9838;
        const initLongitude = locationPermission ? poisModel.user.location.longitude : 23.7275;
        const window = Dimensions.get("window");
        const WIDTH = window.width;
        const HEIGHT = window.height;
        const ASPECT_RATIO = WIDTH / HEIGHT;
        const LATITUDE_DELTA = 0.35;
        const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

        const INITIAL_POSITION = {
            latitude: initLatitude,
            longitude: initLongitude,
            latitudeDelta: 1,
            longitudeDelta: 1
        };

        const COORDS = poisModel.poisList.map(e => {
            return {
                location: {
                    latitude: Number(e.latitude),
                    longitude: Number(e.longitude),
                    label: e.address,
                    longitudeDelta: LONGITUDE_DELTA,
                    latitudeDelta: LATITUDE_DELTA
                }
            };
        })

        return (
            <ClusteredMapView
                styles={{ flex: 1 }}
                ref={(r) => { this.map = r }}
                data={COORDS}
                initialRegion={INITIAL_POSITION}
                renderMarker={this.renderMarker}
                renderCluster={this.renderCluster}
            />
        )

    }
}

const mapStateToProps = state => ({
    poisModel: state.poisModel.poisModel
});

const ActionCreators = Object.assign(
    {},
    poisActions
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoisMap);
