import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Statistics</Text>
      <View style={styles.dateContainer}>
        <TouchableOpacity style={styles.dateButton}>
          <Icon name="calendar-outline" size={20} color="white" />
          <Text style={styles.dateText}>Mar 1 - Mar 7 (Last week)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DateRange')}>
          <Icon name="chevron-forward-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#1c1c1c',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  dateText: {
    color: 'white',
    marginLeft: 10,
  },
});

export default HeaderComponent;
