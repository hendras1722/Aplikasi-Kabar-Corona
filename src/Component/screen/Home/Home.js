import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import Cor from '../../img/unsplash.jpg';
import Cor1 from '../../img/unsplash1.jpg';
import cor2 from '../../img/anastrasila.jpg'
import cor3 from '../../img/tobias.jpg'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DataHome from '../Data/DataHome';
import { getPositif } from '../../redux/actions/positif';
import { getNegatif } from '../../redux/actions/negatif';
import { getDie } from '../../redux/actions/meninggal';
import { connect } from 'react-redux';

class Home extends Component {
  static navigationOptions = {
    tabBarOptions: {
      activeTintColor: '#171F33',
      inactiveTintColor: '#171F33'
    }
  };

  state = {
    images: [Cor, Cor1, cor2, cor3],
  };

  async coronaPositif() {
    await this.props.dispatch(getPositif())
  }


  async coronaNegatif() {
    await this.props.dispatch(getNegatif())
  }


  async coronaDie() {
    await this.props.dispatch(getDie())
  }

  async componentDidMount() {
    await this.coronaPositif();
    await this.coronaNegatif();
    await this.coronaDie();
  }

  render() {
    const { negatif, positif, die } = this.props
    console.log(die, "ksadk")
    return (
      <View style={styles.header}>
        <View style={styles.buff1}>
          <View style={styles.jumbotron}>
            <SliderBox
              images={this.state.images}
              autoplay={true}
              resizeMode={'cover'}
              dotColor={'#636d77'}
              inactiveDotColor={'white'}
              circleLoop={true}
            />
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 5,
              marginBottom: 5
            }}>
            <Text>Total seluruh </Text>
          </View>
          <ScrollView>
            <View style={styles.buff}>
              <View style={styles.info}>
                <View
                  style={{
                    backgroundColor: '#f24849',
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderRadius: 10,
                    width: 115,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }} >
                  <Icon name="medical-bag" style={{ fontSize: 30 }} />
                  <Text >Total Positif:</Text>
                  <Text>{positif.value}</Text>
                </View>
              </View>
              <View style={styles.info}>
                <View
                  style={{
                    backgroundColor: '#46ae95',
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderRadius: 10,
                    width: 115,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="hospital" style={{ fontSize: 30 }} />
                  <Text>Total Negatif:</Text>
                  <Text>{negatif.value}</Text>
                </View>
              </View>
              <View style={styles.info}>
                <View
                  style={{
                    backgroundColor: '#d5508d',
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderRadius: 10,
                    width: 115,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="skull-crossbones" style={{ fontSize: 30 }} />
                  <Text >Total Meninggal:</Text>
                  <Text>{die.value}</Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <DataHome />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buff: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  info: {
    marginVertical: 5,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buff1: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    flex: 1,
  },
  jumbotron: {
    backgroundColor: 'gray',
  },
});

const mapStateToProps = (state) => {
  console.log(state, "wew");
  return {
    positif: state.positif.positif,
    negatif: state.negatif.negatif,
    die: state.die.die
  };
};

export default connect(mapStateToProps)(Home);
