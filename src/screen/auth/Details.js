import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const API_KEY = 'ff6e484aff9b10e07bfb6c6fd3d3292b';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Details = props => {
  const [data, setData] = useState();
  const {name} = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=india&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);

  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 22, color: 'grey'}}>{title}</Text>
      <Text style={{fontSize: 22, color: 'white'}}>{value}</Text>
    </View>
  );

  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/image1.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <View style={styles.header}>
          <Icon name="menu" size={46} color="white" />
          <Image
            source={require('../../assets/images/user.png')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>
        {data ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
            <View>
              <Text style={{fontSize: 40, color: 'white'}}>{name}</Text>
              <Text style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
                {data['weather'][0]['main']}
              </Text>
            </View>

            <Text style={{fontSize: 64, color: 'white'}}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>

            <View>
              <Text style={{fontSize: 22, color: 'white', marginBottom: 16}}>
                Weather Details
              </Text>
              <View style={{width: deviceWidth - 60}}>
                <Data value={data['wind']['speed']} title="Wind" />
                <Data value={data['main']['pressure']} title="Pressure" />
                <Data value={`${data['main']['humidity']}%`} title="Humidity" />
                <Data value={data['visibility']} title="Visibility" />
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: deviceWidth - 25,
  },
});

export default Details;
