import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

export default function MainBanner() {
  const [fontsLoaded] = useFonts({
    MontserratLight: require('../assets/fonts/Montserrat-Light.ttf'),
    MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
    Inter: require('../assets/fonts/Inter.ttf'),
  });
  const navigation = useNavigation();

  if (!fontsLoaded) return null;

  const today = new Date();

  // Format date (e.g., 28 Aug 2025)
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long', // "Thursday"
    day: 'numeric', // "28"
    month: 'long', // "August"
  });

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.heading1}>Today's Task</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button style={{ borderRadius: 8 }} onPress={() => navigation.navigate('Profile')}>
          <View style={styles.btnContentContainer}>
            <AntDesign name="plus" size={18} color="#0055da" />
            <Text style={styles.btnText}>New Task</Text>
          </View>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 14,
    paddingVertical: 18,
    // borderBlockColor: 'black',
    // borderWidth: 2,
  },
  textContainer: {
    alignItems: 'flex-start', // children aligned left
    paddingHorizontal: 20, // optional, for spacing from edges
  },
  btnContainer: {
    justifyContent: 'center',
    // borderBlockColor: 'black',
    // borderWidth: 2,
  },
  btnContentContainer: {
    flex: 1,
    flexDirection: 'row',
    // width: 90,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnText: {
    marginLeft: 8,
    fontFamily: 'Inter',
    fontWeight: 'light',
    fontSize: 16,
    color: '#0055da',
  },
  heading1: {
    fontFamily: 'MontserratBold',
    paddingBottom: 3,
    fontSize: 26,
    fontWeight: 'bold',
    // color: 'blue',
  },
  date: {
    fontFamily: 'MontserratLight',
    fontSize: 16,
    color: 'grey',
  },
});
