import React from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import StatisticsHeader from './components/StatisticsHeader';
import RidingBehavior from './components/RidingBehavior';
import Journey from './components/Journey';

const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      <StatisticsHeader />

      <RidingBehavior />

      <Journey />

      <FlatList />
    </View>
  );
};

export default StatisticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // To match the overall dark theme
  },
});
