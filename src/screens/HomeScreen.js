import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
// import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
// import { Card, ListItem, Button, Icon } from 'react-native-elements';

const deviceWidth = Dimensions.get('window').width;

const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
]


export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#fff"
                />
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <View style={styles.boxView}>
                            <TouchableOpacity onPress={() => navigation.navigate('HomeDetailsScreen', { id: 1, name: 'Area', des: 'Area chart are easy to use' })}>
                                <Image resizeMode='cover' style={styles.imageView} source={require('../assets/images/area-chart.png')} />
                            </TouchableOpacity>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ color: 'blue', fontSize: 30, fontWeight: 'bold' }}>Area</Text>
                                <Text style={{ color: 'black', fontSize: 16, fontWeight: '400' }}>Area chart are easy to use</Text>
                            </View>
                        </View>
                        <View style={styles.boxView}>
                            <TouchableOpacity onPress={() => navigation.navigate('HomeDetailsScreen', { id: 2, name: 'Pie', des: 'Pie chart are easy to use' })}>
                                <Image resizeMode='cover' style={styles.imageView} source={require('../assets/images/download.png')} />
                            </TouchableOpacity>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ color: 'blue', fontSize: 30, fontWeight: 'bold' }}>Pie</Text>
                                <Text style={{ color: 'black', fontSize: 16, fontWeight: '400' }}>Pie chart are easy to use</Text>
                            </View>
                        </View>
                        <View style={styles.boxView}>
                            <TouchableOpacity onPress={() => navigation.navigate('HomeDetailsScreen', { id: 3, name: 'Donut', des: 'Donut chart are easy to use' })}>
                                <Image resizeMode='cover' style={styles.imageView} source={require('../assets/images/DONUT.png')} />
                            </TouchableOpacity>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ color: 'blue', fontSize: 30, fontWeight: 'bold' }}>Donut</Text>
                                <Text style={{ color: 'black', fontSize: 16, fontWeight: '400' }}>Donut chart are easy to use</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
        marginVertical: 30
    },
    boxView: {
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 150,
        flexDirection: 'row',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        marginTop: 15
    },
    imageView: {
        flexWrap: 'wrap',
        height: 150,
        width: deviceWidth / 2.5,
        flexDirection: 'row'
    }

})