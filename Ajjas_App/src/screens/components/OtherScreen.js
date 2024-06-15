import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const OtherScreen = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const handleStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartPicker(false);
    setStartDate(currentDate);
  };

  const handleEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndPicker(false);
    setEndDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.rangeOption}>
        <Text style={styles.rangeText}>This year</Text>
        <Text style={styles.rangeDate}>Jan 1 - Apr 20</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rangeOption}>
        <Text style={styles.rangeText}>Previous year</Text>
        <Text style={styles.rangeDate}>Jan 1, 2023 - Dec 20, 2023</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rangeOption}>
        <Text style={styles.rangeText}>Lifetime</Text>
        <Text style={styles.rangeDate}>Apr 5, 2022 - Apr 20, 2024</Text>
      </TouchableOpacity>

      <Text style={styles.customText}>Custom</Text>
      <View style={styles.datePickerRow}>
        <TouchableOpacity
          onPress={() => setShowStartPicker(true)}
          style={styles.datePickerButton}>
          <Text style={styles.datePickerText}>Start date</Text>
          <Text style={styles.dateText}>{startDate.toDateString()}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowEndPicker(true)}
          style={styles.datePickerButton}>
          <Text style={styles.datePickerText}>End date</Text>
          <Text style={styles.dateText}>{endDate.toDateString()}</Text>
        </TouchableOpacity>
      </View>

      {showStartPicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={handleStartDateChange}
        />
      )}
      {showEndPicker && (
        <DateTimePicker
          value={endDate}
          mode="date"
          display="default"
          onChange={handleEndDateChange}
        />
      )}
    </View>
  );
};

export default OtherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  rangeOption: {
    marginBottom: 20,
  },
  rangeText: {
    color: 'yellow',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rangeDate: {
    color: 'gray',
    fontSize: 16,
  },
  customText: {
    color: 'yellow',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  datePickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datePickerButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  datePickerText: {
    color: 'yellow',
    fontSize: 16,
  },
  dateText: {
    color: 'white',
    fontSize: 14,
  },
});
