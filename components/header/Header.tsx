import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    padding: 15,
    marginBottom: 5,
    textTransform: 'uppercase',
    backgroundColor: '#ffffff'
  }
});

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>Cryptocurrency App</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('CryptoCoin', () => Header);