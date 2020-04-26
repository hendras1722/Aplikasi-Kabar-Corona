import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getGlobal } from '../../redux/actions/kawalcorona';
import { connect } from 'react-redux';

class DataHome extends Component {

  async coronaGlobal() {
    await this.props.dispatch(getGlobal());
  };

  async componentDidMount() {
    await this.coronaGlobal();
  }

  render() {
    const { corona, indonesia } = this.props;
    console.log(indonesia, "ini corona")
    console.disableYellowBox = true
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            padding: 10,
          }}>
          {/* disini */}
          {corona.map((item, index) =>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 0.5,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 2,
              }} key={index}>
              <View style={{
                flex: 2, flexDirection: 'row',
                maxWidth: 200
              }} >
                <Icon
                  name="earth"
                  style={{
                    fontSize: 18,
                    top: 3,
                  }}
                />
                <Text
                  style={{
                    fontSize: 18,
                    maxWidth: 100
                  }}
                  numberOfLines={1} ellipsizeMode={'tail'}>{" "}
                  {item.attributes.Country_Region}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 'bold' }}>Confirmed</Text>
                <Text style={{ fontWeight: 'bold' }}>Active</Text>
                <Text style={{ fontWeight: 'bold' }}>Recovered</Text>
                <Text style={{ fontWeight: 'bold' }}>Deaths</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>{item.attributes.Confirmed}</Text>
                <Text>{item.attributes.Active}</Text>
                <Text>{item.attributes.Recovered}</Text>
                <Text>{item.attributes.Deaths}</Text>
              </View>
            </View>
          )}
          {/* disini */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state, "wew");
  return {
    corona: state.corona.corona,
    indonesia: state.corona.indonesia
  };
};

export default connect(mapStateToProps)(DataHome);
