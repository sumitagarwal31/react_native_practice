import React, { Component } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar } from "react-native";


export default class HomeDetailsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { params } = this.props.route
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#fff"
                />
                <View style={styles.mainContainer}>
                    <View style={{ alignItems: 'center' }}>
                        {params.id == 1 && (
                            <Image resizeMode='contain' style={styles.image} source={require('../assets/images/area-chart.png')} />
                        )}
                        {params.id == 2 && (
                            <Image resizeMode='cover' style={styles.image} source={require('../assets/images/download.png')} />
                        )}
                        {params.id == 3 && (
                            <Image resizeMode='cover' style={styles.image} source={require('../assets/images/DONUT.png')} />
                        )}
                    </View>
                    <View>
                        <Text style={{ color: 'blue', fontSize: 36, fontWeight: 'bold' }}>{params.name}</Text>
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: '400' }}>{params.des}</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    mainContainer: {
        flex: 1,
        marginHorizontal: 15,
    },
    boxView: {
        borderWidth: 1,
        borderColor: '#000',
        height: 200,
        marginBottom: 40
    },
    image: {
        width: '100%',
        height: 300
    }

})