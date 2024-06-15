import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DateRange from './src/screens/DateRange';
import {Button} from 'react-native';
import StatisticsScreen from './src/screens/StatisticsScreen ';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StatisticsScreen"
          component={StatisticsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DateRange"
          component={DateRange}
          options={({navigation}) => ({
            headerLeft: () => (
              <Button
                title="✕"
                onPress={() => navigation.goBack()}
                color="#FFD700"
              />
            ),
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              color: '#fff',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
