import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const WeekScreen = () => {
  const [selectedWeek, setSelectedWeek] = useState('Last week');

  const weeks = [
    {label: 'This week', date: 'Mar 31 - April 6'},
    {label: 'Last week', date: 'Mar 24 - Mar 30'},
    {label: 'Last 7 days', date: 'Mar 29 - Apr 4'},
  ];

  return (
    <View style={styles.container}>
      {weeks.map((week, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.weekContainer,
            selectedWeek === week.label && styles.selectedWeekContainer,
          ]}
          onPress={() => setSelectedWeek(week.label)}>
          <Text style={styles.weekLabel}>{week.label}</Text>
          <Text style={styles.weekDate}>{week.date}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default WeekScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  weekContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  selectedWeekContainer: {
    backgroundColor: '#222',
  },
  weekLabel: {
    color: 'yellow',
    fontSize: 16,
  },
  weekDate: {
    color: '#777',
    fontSize: 14,
  },
});
