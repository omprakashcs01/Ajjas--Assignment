import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const DateRangeHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Date Range</Text>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateRangeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#000',
  },
  title: {
    color: 'yellow',
    fontSize: 20,
  },
  saveButton: {
    padding: 10,
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#000',
  },
});
