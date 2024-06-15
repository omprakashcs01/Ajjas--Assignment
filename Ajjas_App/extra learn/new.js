write code to build similar to this image  this component in react native and

my code :import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Journey = () => {
  return (
    <View
      style={{
        backgroundColor: '#1c1c1e',
        padding: 20,
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
      }}>
      <View style={styles.header}>
        <Text style={styles.title}>Journey</Text>
        <TouchableOpacity>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 18, color: 'grey'}}> Distance Traveled</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 45, color: '#fff'}}>85.19</Text>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              marginTop: 20,
              paddingLeft: 6,
            }}>
            Km
          </Text>
        </View>

        <Text style={styles.footer}>
          <Text style={styles.arrowDown}>↓ </Text>
          <Text style={styles.footerText}>24% vs preceding period</Text>
        </Text>
      </View>
    </View>
  );
};

export default Journey;

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