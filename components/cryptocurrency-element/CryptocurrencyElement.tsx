import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, Text } from 'react-native';
import { APIKey } from '../../config/keys';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 20
    },
    innerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    textLabel: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    }
});

interface ParentProps {
    imgURL: String;
    convertFrom: String;
    convertTo: String;
    label: String;
}

type Props = ParentProps;

export default class CryptocurrencyElement extends Component<Props> {
    state = {
        cryptocurrency: {
            rate: 0
        }
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
        const { imgURL, label, convertFrom } = this.props;
        const { image, container, innerContainer, textLabel } = styles;
        const currentPrice = (cryptocurrency.rate).toFixed(2);
        return (
            <View style={container}>
                <View style={innerContainer}>
                    <Image style={image} source={{ uri: imgURL }} />
                    <Text style={textLabel}>{label} / {convertFrom}</Text>
                </View>
                <View style={innerContainer}>
                    <Text style={textLabel}>{currentPrice}$</Text>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('CryptoCoin', () => CryptocurrencyElement);