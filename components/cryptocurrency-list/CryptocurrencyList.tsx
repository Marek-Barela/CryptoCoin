import React, { Component } from 'react';
import { CryptocurrencyElement } from '../cryptocurrency-element';
import { AppRegistry, ScrollView } from 'react-native';

export default class CryptocurrencyList extends Component {
  render() {
    return (
      <ScrollView>
        <CryptocurrencyElement
          imgURL="http://icons.iconarchive.com/icons/froyoshark/enkel/256/Bitcoin-icon.png"
          convertFrom="BTC"
          convertTo="USD"
          label="BitCoin"
        />
        <CryptocurrencyElement
          imgURL="https://cryptocoinia.nl/wp-content/uploads/2017/09/ethereum-kopen.png"
          convertFrom="ETH"
          convertTo="USD"
          label="Ethernum"
        />
        <CryptocurrencyElement
          imgURL="https://static.thenounproject.com/png/90366-200.png"
          convertFrom="LTC"
          convertTo="USD"
          label="Litecoin"
        />
        <CryptocurrencyElement
          imgURL="https://cdn0.iconfinder.com/data/icons/blockchain-classic/256/Zcash-128.png"
          convertFrom="ZEC"
          convertTo="USD"
          label="Zcash"
        />
        <CryptocurrencyElement
          imgURL="http://icons.iconarchive.com/icons/cjdowner/cryptocurrency/256/Dash-icon.png"
          convertFrom="DASH"
          convertTo="USD"
          label="Dash"
        />
        <CryptocurrencyElement
          imgURL="http://icons.iconarchive.com/icons/cjdowner/cryptocurrency/256/Ripple-icon.png"
          convertFrom="XRP"
          convertTo="USD"
          label="Ripple"
        />
        <CryptocurrencyElement
          imgURL="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/221_Monero_logo_logos-128.png"
          convertFrom="XMR"
          convertTo="USD"
          label="Monero"
        />
        <CryptocurrencyElement
          imgURL="https://cdn1.iconfinder.com/data/icons/cryptocurrency-2/100/cryptocurrency_blockchain_coin_crypto_btc_-10-512.png"
          convertFrom="EOS"
          convertTo="USD"
          label="EOS"
        />
        <CryptocurrencyElement
          imgURL="http://icons.iconarchive.com/icons/cjdowner/cryptocurrency/256/NEO-icon.png"
          convertFrom="NEO"
          convertTo="USD"
          label="NEO"
        />
        <CryptocurrencyElement
          imgURL="http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Cardano-ADA-icon.png"
          convertFrom="ADA"
          convertTo="USD"
          label="Cardano"
        />
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('CryptoCoin', () => CryptocurrencyList);