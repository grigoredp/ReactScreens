// In App.js in a new project

import * as React from 'react';
import { StyleSheet, Image, Button, View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EcranCeas from './screens/ceas';
import Todo from './screens/todo';
import Cronometru from './screens/cronometru';
import Calculator from './screens/calc';
import Info from './screens/info';
const styles = StyleSheet.create({
  logo: {
    width: 180,
    height: 180,
  },
  acasa: {
    flex: 1, flexWrap: 'wrap', flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start',
    backgroundColor: '#540101',
  },
});

function EcranAcasa({navigation}) {
  return (
    <View style={styles.acasa}>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
      {/* <Button
        title="Ceas"
        onPress={() => navigation.navigate('Ceas')}
      ></Button> */}
      <Pressable onPress={() => navigation.navigate('Ceas')}><Image style={styles.logo} source={require("./resurse/imagini/ceas.png")}/></Pressable>
      <Pressable onPress={() => navigation.navigate('Todo')}><Image style={styles.logo} source={require("./resurse/imagini/todo.png")}/></Pressable>
      <Pressable onPress={() => navigation.navigate('Cronometru')}><Image style={styles.logo} source={require("./resurse/imagini/cronometru.png")}/></Pressable>
      <Pressable onPress={() => navigation.navigate('Calculator')}><Image style={styles.logo} source={require("./resurse/imagini/calc.png")}/></Pressable>
      <Pressable onPress={() => navigation.navigate('Info')}><Image style={styles.logo} source={require("./resurse/imagini/info.png")}/></Pressable>

    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Acasa" style={{}}>
        <Stack.Screen name="Acasa" component={EcranAcasa} options={{
          title: 'Swiss Army Knife',
          headerStyle: {
            backgroundColor: '#e30707',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen name="Ceas" component={EcranCeas} options={{
          headerStyle: {
            backgroundColor: '#e30707',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Todo" component={Todo} options={{
          title: 'Listă To-Do',
          headerStyle: {
            backgroundColor: '#e30707',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Cronometru" component={Cronometru} options={{
          title: 'Cronometru',
          headerStyle: {
            backgroundColor: '#e30707',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
          <Stack.Screen name="Calculator" component={Calculator} options={{
            title: 'Calculator',
            headerStyle: {
              backgroundColor: '#e30707',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
            <Stack.Screen name="Info" component={Info} options={{
              title: 'Informații',
              headerStyle: {
                backgroundColor: '#e30707',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;