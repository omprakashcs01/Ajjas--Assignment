import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Journey = () => {
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
            <Text style={styles.value}>85.19</Text>
            <Text style={styles.unit}>km</Text>
          </View>
          <Text style={styles.footer}>
            <Text style={styles.arrowDown}>↓ </Text>
            <Text style={styles.footerText}>24% vs preceding period</Text>
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Time Duration</Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>2</Text>
            <Text style={styles.unit}>hr</Text>
            <Text style={styles.value}>20</Text>
            <Text style={styles.unit}>min</Text>
          </View>
          <Text style={styles.footer}>
            <Text style={styles.arrowDown}>↓ </Text>
            <Text style={styles.footerText}>24% vs preceding period</Text>
          </Text>
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
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  section: {
    flex: 1,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    color: 'grey',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  value: {
    fontSize: 45,
    color: '#fff',
  },
  unit: {
    fontSize: 20,
    color: '#fff',
    marginTop: 20,
    paddingLeft: 6,
  },
  divider: {
    width: 1,
    backgroundColor: 'grey',
    marginHorizontal: 10,
  },
  footer: {
    marginTop: 10,
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
