import { createStaticNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from 'screens/HomeScreen';
import { StatusBar } from 'react-native';
import MessagesScreen from 'screens/MessagesScreen';
import LastActivityScreen from 'screens/LastActivityScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const MyTabs = createMaterialTopTabNavigator({
  screens: {
    Message: {
      screen: MessagesScreen,
      options: {
        title: 'Messages',
      },
    },
    Home: {
      screen: HomeScreen,
      options: {
        title: "Today's Task",
      },
    },
    Profile: {
      screen: LastActivityScreen,
      options: {
        title: 'Last Activity',
      },
    },
  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
        <StatusBar barStyle={'default'} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
