import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RidingBehavior = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Riding Behaviour</Text>
        <TouchableOpacity>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentage}>91%</Text>
        </View>
        <Text style={styles.status}>Excellent</Text>
      </View>
      <Text style={styles.footer}>
        <Text style={styles.arrowDown}>↓ </Text>
        <Text style={styles.footerText}>24% vs preceding period</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1e',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  percentageContainer: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  percentage: {
    color: 'white',
    fontSize: 16,
  },
  status: {
    color: 'white',
    fontSize: 18,
    marginRight: 180,
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#f00',
  },
  arrowDown: {
    color: '#f00',
    fontSize: 16,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RidingBehavior;
