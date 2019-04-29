import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { APIKey } from '../../config/keys';

interface ParentProps {
  convertFrom: String;
  convertTo: String;
}

type Props = ParentProps;

export default class CryptocurrencyElement extends Component<Props> {
  state = {
    cryptocurrency: {}
  }

  async componentDidMount() {
    const { convertFrom, convertTo } = this.props;

    try {
      const cryptocurrencyApiCall = await fetch(`https://rest.coinapi.io/v1/exchangerate/${convertFrom}/${convertTo}?apikey=${APIKey}`);
      const currency = await cryptocurrencyApiCall.json();
      this.setState({ cryptocurrency: currency });
    } catch (err) {
      console.log("Error fetching data", err);
    }
  }

  render() {
    const { cryptocurrency } = this.state;
    return (
      <View>

      </View>
    );
  }
}

AppRegistry.registerComponent('CryptoCoin', () => CryptocurrencyElement);