import React, { Component } from 'react'
import { View, Text, Image, Dimensions, ScrollView, RefreshControl } from 'react-native'
import jakarta from '../../img/jakarta.jpg'
import { connect } from 'react-redux'
import { getLocal } from '../../redux/actions/provinsi';
// import ina from 'https://image.flaticon.com/icons/svg/323/323372.svg'

class Indonesia extends Component {
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

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }

    _onRefresh = () => {
        this.setState({ refreshing: true });
    }

    async coronaProvinsi() {
        await this.props.dispatch(getLocal());
    }

    async componentDidMount() {
        await this.coronaProvinsi();
    }
    render() {
        const windowWidth = Dimensions.get('window').width;
        const { local } = this.props
        // console.log("provinsi", this.coronaProvinsi())
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{ backgroundColor: 'white', flex: 1 }}>
                    <Image source={jakarta} style={{ width: windowWidth, height: 500, flex: 1 }} resizeMode="contain" />
                </View>
                <View style={{ backgroundColor: 'white', flex: 2, marginHorizontal: 5 }}>
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh} />}>
                        {this.props && local.map((item, index) =>
                            <View style={{
                                flexDirection: 'row',
                                borderRadius: 10,
                                borderColor: 'black',
                                borderWidth: 0.5,
                                padding: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginVertical: 2,
                            }} key={index}>
                                <Image source={require('../../img/indonesia.png')} style={{ width: 20, height: 20, flex: 1 }} resizeMode={'contain'} />
                                <View style={{ flex: 2 }}>
                                    <Text>{item.attributes.Provinsi}</Text>
                                </View>
                                <View style={{ flex: 2 }}>
                                    <Text style={{ fontWeight: 'bold' }}>Confirmed</Text>
                                    <Text style={{ fontWeight: 'bold' }}>Active</Text>
                                    <Text style={{ fontWeight: 'bold' }}>Recovered</Text>
                                    <Text style={{ fontWeight: 'bold' }}>Deaths</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text>{item.attributes.Confirmed}</Text>
                                    <Text>{item.attributes.Kasus_Posi}</Text>
                                    <Text>{item.attributes.Kasus_Semb}</Text>
                                    <Text>{item.attributes.Kasus_Meni}</Text>
                                </View>
                            </View>
                        )}

                    </ScrollView>
                </View>
            </View >
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        local: state.local.local
    };
};

export default connect(mapStateToProps)(Indonesia);