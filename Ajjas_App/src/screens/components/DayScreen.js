import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const DayScreen = () => {
  const [selectedDay, setSelectedDay] = useState('Yesterday');

  const days = [
    {label: 'Today', date: 'Friday, April 5'},
    {label: 'Yesterday', date: 'Thursday, April 4'},
    {label: 'Day before yesterday', date: 'Wednesday, April 3'},
  ];

  return (
    <View style={styles.container}>
      {days.map((day, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.dayContainer,
            selectedDay === day.label && styles.selectedDayContainer,
          ]}
          onPress={() => setSelectedDay(day.label)}>
          <Text style={styles.dayLabel}>{day.label}</Text>
          <Text style={styles.dayDate}>{day.date}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  dayContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  selectedDayContainer: {
    backgroundColor: '#222',
  },
  dayLabel: {
    color: 'yellow',
    fontSize: 16,
  },
  dayDate: {
    color: '#777',
    fontSize: 14,
  },
});
