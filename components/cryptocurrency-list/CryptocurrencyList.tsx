import React, { Component } from 'react';
import { CryptocurrencyElement } from '../cryptocurrency-element';
import { AppRegistry, View } from 'react-native';

export default class CryptocurrencyList extends Component {
  render() {
    return (
      <View>
        <CryptocurrencyElement convertFrom="BTC" convertTo="USD" />
      </View>
    );
  }
}

AppRegistry.registerComponent('CryptoCoin', () => CryptocurrencyList);