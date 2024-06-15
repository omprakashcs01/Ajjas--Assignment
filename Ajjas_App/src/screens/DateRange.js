import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import DayScreen from './components/DayScreen';
import WeekScreen from './components/WeekScreen';
import MonthScreen from './components/MonthScreen';
import OtherScreen from './components/OtherScreen';
import DateRangeHeader from './components/DateRangeHeader';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const DateRange = () => {
  return (
    <View style={styles.container}>
      <DateRangeHeader />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: '#000'},
          tabBarIndicatorStyle: {backgroundColor: 'yellow'},
          tabBarLabelStyle: {color: 'yellow'},
        }}>
        {DayScreen}
        <Tab.Screen name="Day" component={DayScreen} />
        <Tab.Screen name="Week" component={WeekScreen} />
        <Tab.Screen name="Month" component={MonthScreen} />
        <Tab.Screen name="Other" component={OtherScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default DateRange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
