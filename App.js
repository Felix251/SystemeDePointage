import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { React,useState} from 'react';
import Header from './Components/Header';
import { Icon } from 'react-native-vector-icons/FontAwesome';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>

        <View style={{marginTop: 20}}>
          <Text style={styles.size}>Less than an hours</Text>
          <View style={[styles.list, ]}>
            <Image
              style={[styles.tinyLogo, styles.hori]}
              source={require('./assets/clock.png')}
            />
            <View>
              <Text style={{color: 'blue', fontSize:15}}>ipdl - salle 202</Text>
              <Text style={{width: 300, fontSize:15}}>fin du cours dans 30 min et n'a pas encore ete controller</Text>
            </View>
          </View>
          <View style={[styles.list, ]}>
            <Image
              style={[styles.tinyLogo, styles.hori]}
              source={require('./assets/clock.png')}
            />
            <View>
              <Text style={{color: 'blue', fontSize:15}}>SE - salle 205</Text>
              <Text style={{width: 300, fontSize:15}}>fin du cours dans 30 min et n'a pas encore ete controller</Text>
            </View>
          </View>
          <View style={[styles.list, ]}>
            <Image
              style={[styles.tinyLogo, styles.hori]}
              source={require('./assets/message.svg.png')}
            />
            <View>
              <Text style={{width: 300, fontSize:15}}>message de mandicou ba</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.size}>More than two hours</Text>
          <View style={[styles.list, ]}>
            <Image
              style={[styles.tinyLogo, styles.hori]}
              source={require('./assets/clock.png')}
            />
            <View>
              <Text style={{color: 'blue', fontSize:15}}>ipdl - salle 202</Text>
              <Text style={{width: 300, fontSize:15}}>fin du cours dans 30 min et n'a pas encore ete controller</Text>
            </View>
          </View>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    
  },
  hori:{
    marginRight: 10
  },
  content: {
    padding: 20,
    
  },
  size: {
    fontSize: 15
  },
  list : {
    marginTop: 20,
    flexDirection: 'row',
    
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
});
