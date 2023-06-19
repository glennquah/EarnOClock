import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.appBar}>
        {/*<Image
          source={require('./profile-picture.jpg')}
          style={styles.profilePicture}
        />*/}
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.stars}>17 Stars</Text>
      </View>
      <View style={styles.starsBar}>
        <Text style={styles.starsText}>You have 50 / 100 stars</Text>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
      </View>
      <View style={styles.listView}>
        <Text style={styles.sectionTitle}>Your Next Shift</Text>
        <Text>Starbucks - Jem</Text>
        <Text>9 June 2023, Friday 12:00 - 19:00 | 7h</Text>
        <Text style={styles.sectionTitle}>Shift That Needs Help</Text>
        <Text>Starbucks Jurong Point</Text>
        <Text>10 June 2023, Saturday 15:00 - 23:00 | 8h</Text>
        <Text>1 barista needed</Text>
      </View>
      <View style={styles.navigationBar}>
        <Text>Home</Text>
        <Text>Shop</Text>
        <Text>Schedule</Text>
        <Text>Check-in</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profilePicture: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  name: {
    marginLeft: 8,
    fontWeight: 'bold',
  },
  stars: {
    marginLeft: 8,
    color: 'gold',
  },
  starsBar: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  starsText: {
    marginBottom: 8,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#d0d0d0',
    borderRadius: 5,
  },
  progress: {
    height: '100%',
    width: '50%', // Change this to dynamically represent the progress (e.g., based on stars)
    backgroundColor: 'gold',
    borderRadius: 5,
  },
  listView: {
    padding: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default HomeScreen;
