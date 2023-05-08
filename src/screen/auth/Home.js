import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Cities from '../../components/City';
import Card from '../../components/Card';
// import { useNavigation } from '@react-navigation/native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Home = props => {
  // const navigation = useNavigation();

  const [city, setCity] = useState('');

  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/image2.jpg')}
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

        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <View style={styles.search}>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Search city by the name"
              placeholderTextColor="white"
              style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
            />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Details', {name: city})
              }>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontSize: 25,
              color: 'white',
              paddingHorizontal: 10,
              marginTop: 220,
              marginBottom: 20,
            }}>
            My Location
          </Text>
          <FlatList
            horizontal
            data={Cities}
            renderItem={({item}) => (
              <Card
                name={item.name}
                image={item.image}
                navigation={props.navigation}
              />
            )}
          />
        </View>
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
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    marginTop: 16,
    paddingHorizontal: 10,
  },
});

export default Home;
