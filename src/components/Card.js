import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Card = ({name, image, navigation}) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} onPress={() => navigation.navigate('Details', {name})}>
      <ImageBackground
        source={image}
        style={{height: deviceHeight / 5, width: deviceWidth / 2 - 50}}
        imageStyle={{borderRadius: 16}}
      />
      <View style={{position: 'absolute', width: '100%', height: '100%'}}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
    fontWeight: '500'
  },
});

export default Card;
