import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

class about extends Component {
    static navigationOptions = {
        tabBarOptions: {
            activeTintColor: 'black',
            activeBackgroundColor: 'white',
            inactiveTintColor: '#171F33'
        },
        style: {
            backgroundColor: '#171F33' // TabBar background
        }
    };
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1, justifyContent: "center", alignItems: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../img/ic.png')} style={{ width: 100, height: 100, flex: 1 }} resizeMode={'contain'} />
                    <View style={{ top: -120, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Selamat datang di Kabar Covid-19</Text>
                        <Text>Aplikasi mengikuti perkembangan covid-19 </Text>
                        <Text>diseluruh dunia maupun diindonesia</Text>
                        <Text>API diambil dari Kawal Corona</Text>
                        <View style={{ top: 100 }}>
                            <Text>Apps Buatan MSA Inc</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default about;