import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const ProgressBar = ({totalPoints, goalPoints}) => {

  // Calculate the progress percentage
  const progress = (goalPoints / totalPoints) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>Total No of Points: {goalPoints}</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress}%` }]} />
        <Image source={require('./assets/star.png')} style={styles.star} />
      </View>
      <Text style={styles.rightText} >Goal: {totalPoints}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#24B874',
    borderRadius: 10,
  },
  star: {
    width: 20,
    height: 20,
    marginLeft: 60,
  },

  leftText: {
    alignItems: 'left',
    marginBottom: 5,
  },
  rightText: {
    alignItems: 'right',
    marginBottom: 10,
    marginTop: 5,
  },
});

export default ProgressBar;
