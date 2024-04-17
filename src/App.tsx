

import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeView from './views/HomeView/HomeView';
import FigurineDetailsView from './views/FigurineDetailsView/FigurineDetailsView';
import FigurineListView from './views/FigurineListView/FigurineListView';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeView} options={{title :'',headerShown : false }}/>
      <HomeStack.Screen name="Home2" component={FigurineDetailsView} options={{title :'' ,headerShown : false }}/>
    </HomeStack.Navigator>
  );
}

const FigurineStack = createNativeStackNavigator();

function FigurineStackScreen() {
  return (
    <FigurineStack.Navigator>
      <FigurineStack.Screen name="MyFigurine" component={FigurineListView} options={{title :'Figurines que je préfère' }} />
      <FigurineStack.Screen name="Home2" component={FigurineDetailsView} options={{title :''}}/>
    </FigurineStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

  
  return (


    <NavigationContainer>
      <Tab.Navigator    screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
              return <FontAwesome name='home' size={size} color={color} />;

            } else if (route.name === 'Figurine') {
              return <MaterialCommunityIcons  name='human-queue' size={size} color={color} />;
            }

            // You can return any component that you like here!
      
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} options={{title :'',headerShown : false }}/>
        <Tab.Screen name="Figurine" component={FigurineStackScreen} options={{title :'',headerShown : false }}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}0
 
;

export default App;
