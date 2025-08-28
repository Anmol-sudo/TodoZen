import { StyleSheet, View, FlatList } from 'react-native';
import TodoListItem from './TodoListItem';

const todos = [
  {
    id: '1',
    title: 'Client Review & Feedback',
    description: 'Crypto Wallet Redesign',
    day: 'Today',
    time: '10:00 PM - 11:45 PM',
    avatarsCount: 3,
    completed: true,
  },
  {
    id: '2',
    title: 'Team Standup Meeting',
    description: 'Daily sync-up',
    day: 'Today',
    time: '9:00 AM - 9:30 AM',
    avatarsCount: 4,
    completed: false,
  },
  {
    id: '3',
    title: 'Design Mockups',
    description: 'Dashboard UI refresh',
    day: 'Tomorrow',
    time: '2:00 PM - 4:00 PM',
    avatarsCount: 2,
    completed: false,
  },
  {
    id: '4',
    title: 'Backend API Integration',
    description: 'Payments module',
    day: 'Tomorrow',
    time: '11:00 AM - 1:00 PM',
    avatarsCount: 5,
    completed: true,
  },
  {
    id: '5',
    title: 'Content Writing',
    description: 'Blog draft for launch',
    day: 'Friday',
    time: '3:00 PM - 5:00 PM',
    avatarsCount: 3,
    completed: false,
  },
  {
    id: '6',
    title: 'User Testing',
    description: 'Onboarding flow',
    day: 'Friday',
    time: '6:00 PM - 7:30 PM',
    avatarsCount: 2,
    completed: true,
  },
  {
    id: '7',
    title: 'Data Analysis',
    description: 'Marketing campaign',
    day: 'Saturday',
    time: '1:00 PM - 2:30 PM',
    avatarsCount: 4,
    completed: false,
  },
  {
    id: '8',
    title: 'App Deployment',
    description: 'Production release',
    day: 'Saturday',
    time: '5:00 PM - 6:00 PM',
    avatarsCount: 3,
    completed: true,
  },
  {
    id: '9',
    title: 'Research New Tools',
    description: 'AI integrations',
    day: 'Sunday',
    time: '11:00 AM - 12:00 PM',
    avatarsCount: 2,
    completed: false,
  },
  {
    id: '10',
    title: 'Brainstorm Workshop',
    description: 'Q4 roadmap ideas',
    day: 'Monday',
    time: '4:00 PM - 6:00 PM',
    avatarsCount: 5,
    completed: false,
  },
];

export default function TodoListContainer() {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoListItem
            title={item.title}
            description={item.description}
            day={item.day}
            time={item.time}
            avatarsCount={item.avatarsCount}
            completed={item.completed}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
  },
});
