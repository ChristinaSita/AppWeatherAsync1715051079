import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Cuaca extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: 0,
        temp: 0,
        sunrise: 0,
        preassure: 0,
        message: 0,
        windSpeed: 0,
        sunset: 0,
        humidity: 0,
        ground: 0,
      }
    };
  }

  getWeather = () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=+'
      + this.state.city +
      '&appid=f77fe11af3635c41c4cac80a5cfe9715&units=metric';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forecast: {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp,
            sunrise: responseJson.sys.sunrise,
            preassure: responseJson.main.pressure,
            message: responseJson.sys.message,
            windSpeed: responseJson.wind.speed,
            sunset: responseJson.sys.sunset,
            humidity: responseJson.main.humidity,
            ground: responseJson.coord.lat,
          }
        });
      });
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <View style={{ height: 24 }}>
        </View>

        <View style={styles.header}>
          <Text style={styles.vText1} >
            Prakiraan Cuaca   </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.inputKota}>
            <TextInput
              style={styles.isian}
              placeholder="Masukkan Nama Kota"
              onChangeText={(city) => this.setState({ city })}
            />

            <Button
              onPress={() => this.getWeather()}
              title="Cari"
              accessibilityLabel="Cari"
            />
          </View>

          <View style={styles.hasil}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={styles.kotak}>
              <Icon name='ios-thermometer' color='#4298f4' size={25}></Icon>
                <Text style={{ padding: 5, fontSize: 12 }} >
                  Temp:{'\t'}{'\t'}: {this.state.forecast.temp} {'\n'}
                </Text>
              </View>

              <View style={styles.kotak}>
              <Icon name='ios-leaf' color='#4298f4' size={25}></Icon>
                <Text style={{ padding: 5, fontSize: 12 }} >
                  Wind Speed{'\t'}{'\t'}: {this.state.forecast.windSpeed} {'\n'}
                </Text>
              </View>

            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={styles.kotak}>
                <Icon name='ios-cloud' color='#4298f4' size={25}></Icon>
                <Text style={{ padding: 5, fontSize: 12 }} >
                  Main{'\t'}{'\t'}: {this.state.forecast.main} {'\n'}
                </Text>
              </View>

              <View style={styles.kotak}>
              <Icon name='ios-partly-sunny' color='#4298f4' size={25}></Icon>
                <Text style={{ padding: 5, fontSize: 12 }} >
                  Main Desc{'\t'}{'\t'}: {this.state.forecast.description} {'\n'}
                </Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={styles.kotak}>
              <Icon name='ios-sunny' color='#4298f4' size={25}></Icon>
                <Text style={{ padding: 5, fontSize: 12 }} >
                  Sunrise{'\t'}{'\t'}: {this.state.forecast.sunrise} {'\n'}
                </Text>
              </View>

              <View style={styles.kotak}>
              <Icon name='ios-sunny' color='#4298f4' size={25}></Icon>
                <Text style={{ padding: 5, fontSize: 12 }} >
                  Sunset{'\t'}{'\t'}: {this.state.forecast.sunset} {'\n'}
                </Text>
              </View>

            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={styles.kotak}>
              <Icon name='ios-git-compare' color='#4298f4' size={25}></Icon>
                <Text style={{ padding: 5, fontSize: 12 }} >
                  Preasure{'\t'}{'\t'}: {this.state.forecast.preassure} {'\n'}
                </Text>
              </View>

              <View style={styles.kotak}>
              <Icon name='ios-water' color='#4298f4' size={25}></Icon>
                <Text style={{ padding: 5, fontSize: 12 }} >
                  Humidity:{'\t'}{'\t'}: {this.state.forecast.humidity} {'\n'}
                </Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={styles.kotak}>
              <Icon name='ios-trending-down' color='#4298f4' size={25}></Icon>
                <Text style={{ padding: 5, fontSize: 12 }} >
                  Sea Level{'\t'}{'\t'}: {this.state.forecast.message} {'\n'}
                </Text>
              </View>

              <View style={styles.kotak}>
                <Text style={{ padding: 5, fontSize: 12 }} >
                <Icon name='ios-analytics' color='#4298f4' size={25}></Icon>
                  Ground Lvl{'\t'}{'\t'}: {this.state.forecast.ground} {'\n'}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.vText2} >
            Copyright @Christina Sita</Text>
        </View>
      </View >
    );
  }
}



const styles = StyleSheet.create({

  containerMain: {
    backgroundColor: 'cyan',
    flex: 1,
    flexDirection: 'column'
  },

  header: {
    flex: 1,
    backgroundColor: '#000099',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },

  content: {
    backgroundColor: 'cyan',
    flex: 8,
  },



  footer: {
    flex: 1,
    backgroundColor: '#000099',
    alignItems: 'center',
    justifyContent: 'center',
  },

  vText1: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },

  vText2: {
    fontSize: 18,
    color: '#fff',
  },

  inputKota: {
    backgroundColor: '#3366FF',
    flex: 1.5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000099",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#000099',
    borderRadius: 4,
  },

  hasil: {
    backgroundColor: '#3366FF',
    flex: 4,
    flexDirection: 'column',
    margin: 5,
    shadowColor: "#FF1493",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#3366FF',
    borderRadius: 4,
  },

  isian: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: 200,
    padding: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    borderWidth: 1.5,
    borderColor: '#b2b2b2',
    borderRadius: 4,
  },

  bayangan: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },

  kotak: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#FFCC00',
    width: 20,
    padding: 10,
    margin: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    borderWidth: 1.5,
    borderColor: '#b2b2b2',
    borderRadius: 1,
  },

  vText3: {
    color: 'black',
    fontSize: 11,
  },
});
