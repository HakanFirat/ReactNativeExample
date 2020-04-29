//////////// import edilen bölüm

// React, bütün component ve classların birlikte çalışmasını sağlayan yapı
import React from 'react';
// ReactNative, view componentlerin içinde bulunduğu modül.
import ReactNative from 'react-native';
// Aşağıda bulunan AppRegistry, api kaydetmek için yazıldı.
import {View, Text, AppRegistry} from 'react-native';
//import {Text,View,Image, ScrollView } from 'react-native'
//Aşagıda Headeri import ettik.
import Header from './src/components/Header';
//Liste componentini import ettik
import Liste from './src/components/Liste';

/////////kendi komponentlerimiz yazılacak.
const App = () => (
  //<Text>Abc xxxxxyy!</Text>
  <View>
    <Header headerText={'Başlık'} />
    <Liste />
  </View>
);

//////////kodların render edildigi yer
AppRegistry.registerComponent('ornekproje', () => App);
