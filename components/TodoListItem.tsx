import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const OverlappingAvatars = ({ avatarUrls, count }: { avatarUrls: string[]; count: number }) => {
  const limitedAvatars = avatarUrls.slice(0, count);

  return (
    <View style={avatarStyles.container}>
      {limitedAvatars.map((uri, index) => (
        <Image
          key={index}
          source={{ uri }}
          style={[avatarStyles.avatar, index > 0 && avatarStyles.overlappingAvatar]}
        />
      ))}
    </View>
  );
};

export default function TodoListItem({
  title,
  description,
  day,
  time,
  avatarsCount = 2,
  completed,
}: {
  title: string;
  description: string;
  day: string;
  time: string;
  avatarsCount?: number;
  completed?: boolean;
}) {
  const [fontsLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins.ttf'),
  });
  const navigation = useNavigation();

  if (!fontsLoaded) return null;

  const avatarUrls = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/65.jpg',
    'https://randomuser.me/api/portraits/women/22.jpg',
  ];

  return (
    <View style={styles.cardContainer}>
      {/* Top Content */}
      <View style={styles.content}>
        <View style={styles.textContent}>
          <Text style={[styles.heading, completed && { textDecorationLine: 'line-through' }]}>
            {title}
          </Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View>
          <MaterialIcons
            name={completed ? 'check-circle' : 'radio-button-unchecked'}
            size={38}
            color={completed ? '#1abc9c' : '#bdc3c7'}
          />
        </View>
      </View>

      {/* Separator */}
      <View style={styles.thinSeparator} />

      {/* Bottom Content */}
      <View style={styles.lowerSection}>
        <View style={styles.timeInfo}>
          <Text style={styles.timeLabel}>{day} </Text>
          <Text style={styles.timeValue}>{time}</Text>
        </View>
        <OverlappingAvatars avatarUrls={avatarUrls} count={avatarsCount} />
      </View>
    </View>
  );
}

const avatarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: 'white',
    backgroundColor: '#eee',
  },
  overlappingAvatar: {
    marginLeft: -10,
  },
});

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    paddingVertical: 18,
    marginVertical: 12,
    alignSelf: 'center',

    // No border, soft shadow
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 25,
    marginBottom: 12,
  },

  textContent: {
    flex: 1,
    marginRight: 15,
  },

  heading: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    color: '#222',
    marginBottom: 4,
  },

  description: {
    fontFamily: 'Poppins',
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },

  thinSeparator: {
    height: 1,
    backgroundColor: '#f2f2f2',
    marginHorizontal: 25,
    marginBottom: 12,
  },

  lowerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  timeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  timeLabel: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#555',
    marginRight: 4,
  },

  timeValue: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#888',
  },
});
