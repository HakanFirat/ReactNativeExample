import React from 'react';
import {Text, View} from 'react-native';

//Header componenti oluşturuyoruz.
const Header = ({headerText}) => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {headerText} </Text>
    </View>

    // style bu şekilde de eklenebilir.
    //Ya da yukarıda const{textStyle} eklenir ve <Text in içine sadece textStyle yazılır.>
    // <Text style={styles.textStyle}> Ornek Proje </Text>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#c4cdd5',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    // Gölge verme
    shadowOffSet: {widht: 0, height: 2},
    shadowOpacity: 0.5,
  },
};

//Headeri index.js de kullanmak için export ettik
//Buradaki Header ismi const Header ile aynı olmalı
export default Header;
