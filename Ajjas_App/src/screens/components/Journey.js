import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Journey = ({distance, duration}) => {
  const distanceKm = (distance / 1000).toFixed(2);
  const minutes = Math.floor((duration % 3600) / 60);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Journey</Text>
        <TouchableOpacity>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Distance Travelled</Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{distanceKm}</Text>
            <Text style={styles.unit}>km</Text>
          </View>
          <View style={styles.footer}>
            <Ionicons name="arrow-down" style={styles.arrowDown} />
            <Text style={styles.footerText}>24% vs preceding period</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Time Duration</Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{hours}</Text>
            <Text style={styles.unit}>hr</Text>
            <Text style={styles.value}>{minutes}</Text>
            <Text style={styles.unit}>min</Text>
          </View>
          <View style={styles.footer}>
            <Ionicons name="arrow-down" style={styles.arrowDown} />
            <Text style={styles.footerText}>24% vs preceding period</Text>
          </View>
        </View>
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
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: 'grey',
    marginBottom: 10,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  value: {
    fontSize: 45,
    color: '#fff',
  },
  unit: {
    fontSize: 20,
    color: '#fff',
    paddingLeft: 6,
    paddingBottom: 10,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: 'grey',
    marginHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  arrowDown: {
    color: '#f00',
    fontSize: 16,
    marginRight: 4,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
});
