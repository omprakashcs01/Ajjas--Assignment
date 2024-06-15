import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import StatisticsHeader from './components/StatisticsHeader';
import RidingBehavior from './components/RidingBehavior';
import Journey from './components/Journey';
import {data} from '../../data/data';

const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      <StatisticsHeader />
      <FlatList
        data={data}
        keyExtractor={item => item.startDate.toString()}
        renderItem={({item}) => (
          <View>
            <RidingBehavior score={item.score} />
            <Journey distance={item.distance} duration={item.duration} />
          </View>
        )}
      />
    </View>
  );
};

export default StatisticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
