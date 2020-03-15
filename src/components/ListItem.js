import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class ListItem extends Component {
    render() {
        const { address, distance } = this.props.poi.item;

        return (
            <View style={styles.listStyle}>
                <Text style={styles.textStyle}>
                    {address}
                </Text>
                {distance ? (<Text  style={styles.textStyle}>{distance.toFixed(2)} Km</Text>) : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listStyle: {
        borderBottomWidth: 2,
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#fff',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textStyle:{
        fontSize: 13,
    }
});

export default ListItem;