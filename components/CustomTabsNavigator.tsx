import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Container } from "./Container";
import { EditScreenInfo } from "./EditScreenInfo";
import TodoListContainer from "./TodoListContainer";

const Tab = createMaterialTopTabNavigator();

export default function CustomTabsNavigator() {
    const [fontsLoaded] = useFonts({
      MontserratLight: require('../assets/fonts/Montserrat-Light.ttf'),
      MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
      Inter: require('../assets/fonts/Inter.ttf'),
      Poppins: require('../assets/fonts/Poppins.ttf'),
    });
      const navigation = useNavigation();
    
      if (!fontsLoaded) return null;

    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#fff',
            elevation: 0, // remove Android shadow
            shadowOpacity: 0, // remove iOS shadow
          },
          tabBarActiveTintColor: '#0055da',
          tabBarInactiveTintColor: '#888',
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#0055da',
            height: 0,
          },
        }}>
        <Tab.Screen name="All" component={TodoListContainer} />
        <Tab.Screen name="Open" component={EditScreenInfo} />
        <Tab.Screen name="Closed" component={Container} />
        <Tab.Screen name="Archived" component={EditScreenInfo} />
      </Tab.Navigator>
    );
}