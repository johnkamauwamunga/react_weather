import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React,{useLayoutEffect} from 'react';

const Stack = createStackNavigator();

export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={styles.card}>
          <LottieView
            source={require('./assets/lifestyle.json')}
            autoPlay
            loop
            style={styles.menu1}
          />
        </View>
        <View style={styles.card}>
          <LottieView
            source={require('./assets/travel.json')}
            autoPlay
            loop
            style={styles.menu1}
          />
        </View>
        <View style={styles.card}>
          <LottieView
            source={require('./assets/style1.json')}
            autoPlay
            loop
            style={styles.menu1}
          />
        </View>
      </View>
    
      <View style={styles.icon}>
        <LottieView
          source={require('./assets/weather3.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
      <View style={styles.texts}>
        <Text style={styles.text}>Temperature</Text>
        <Text style={styles.text}>17 °C</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  menu1: {
    width: 70,
    height: 70,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
  texts: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 10,
  },
  notificationIcon: {
    marginRight: 20,
  }
});
