import React, { Component } from 'react';
import { Header } from './components/header';
import { View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
      </View>
    );
  }
}
