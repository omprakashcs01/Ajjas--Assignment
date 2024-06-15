import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MonthScreen = () => {
  const [selectedMonth, setSelectedMonth] = useState('Last month');

  const months = [
    {label: 'This month', date: 'April'},
    {label: 'Last month', date: 'March'},
    {label: 'Last 3 months', date: 'Jan - Mar'},
  ];

  return (
    <View style={styles.container}>
      {months.map((month, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.monthContainer,
            selectedMonth === month.label && styles.selectedMonthContainer,
          ]}
          onPress={() => setSelectedMonth(month.label)}>
          <Text style={styles.monthLabel}>{month.label}</Text>
          <Text style={styles.monthDate}>{month.date}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MonthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  monthContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  selectedMonthContainer: {
    backgroundColor: '#222',
  },
  monthLabel: {
    color: 'yellow',
    fontSize: 16,
  },
  monthDate: {
    color: '#777',
    fontSize: 14,
  },
});
