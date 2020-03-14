import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ListItem extends Component {
    render() {
        const { listStyle } = styles;
        const { address, distance } = this.props.poi.item;

        return (
            <View style={listStyle}>
                <Text >
                    {address}
                    {distance ? (
                        <Text>  Distance: {distance.toFixed(2)} Km</Text>
                    ) : null}
                </Text>
            </View>
        );
    }
}

const styles = {
    listStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff'
    }
};

export default ListItem;