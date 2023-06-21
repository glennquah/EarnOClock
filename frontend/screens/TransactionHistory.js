/*

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import NavigationBar from "../Components/NavBar";
import ProfileBar from "../Components/ProfileBar";

const TransactionHistoryScreen = () => {
  const navigation = useNavigation();
  const starsSource = require("../assets/star.png");
  const acaiSource = require("../assets/acai-affair.png");
  const starbucksSource = require("../assets/starbucks.png");

  const Jun2023 = [
    {
      id: '1',
      title: 'Starbucks Jurong Point',
      date: '4 June 2023 | 15:00-20:00',
      image: starbucksSource,
      stars: '+8'
    },
    {
      id: '2',
      title: 'Starbucks Orchard (Attachment)',
      date: '2 June 2023 | 15:00-20:00',
      image: starbucksSource,
      stars: '+12'
    },
    {
      id: '3',
      title: 'Acai Affair (50%)',
      date: '2 June 2023 | 15:43',
      image: acaiSource,
      stars: '-60'
    }, 
    {
      id: '4',
      title: 'Monthly Contribution Bonus',
      date: '1 June 2023 | 00:00',
      image: starbucksSource,
      stars: '+10'
    }, 
  ];

  const May2023 = [
    {
      id: '1',
      title: 'Starbucks Jurong Point',
      date: '30 May 2023 | 15:00-20:00',
      image: starbucksSource,
      stars: '+8'
    },
    {
      id: '2',
      title: 'Starbucks ion (Attachment)',
      date: '20 May 2023 | 15:00-20:00',
      image: starbucksSource,
      stars: '+12'
    },
    {
      id: '3',
      title: 'Acai Affair (1 Free Acai)',
      date: '15 May 2023 | 13:23',
      image: acaiSource,
      stars: '-80'
    }, 
    {
      id: '4',
      title: 'Weekly Contribution Bonus',
      date: '1 June 2023 | 00:00',
      image: starbucksSource,
      stars: '+5'
    }, 
  ];

  const transactionHistoryData = [
    { month: 'June 2023', data: Jun2023 },
    { month: 'May 2023', data: May2023 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.activityItem}>
      <Image source={item.image} style={styles.logo} />
      <View style={styles.activityText}>
        <Text style={styles.activityTitle}>{item.title}</Text>
        <Text style={styles.activityDate}>{item.date}</Text>
      </View>
      <View style={styles.activityStars}>
        <Text style={styles.stars}>{item.stars}</Text>
        <Image source={starsSource} style={styles.starlogo} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ProfileBar navigation={navigation} />
      <View style={styles.container}>
        <Image source={{ uri: 'https://picsum.photos/400' }} style={styles.backgroundImage} />
        <View style={styles.midBar} /> 
        <View style={styles.whiteBox}>
          <View style={styles.history}>
            <FlatList
              data={transactionHistoryData}
              renderItem={({ item }) => (
                <>
                  <View style={styles.header}>
                    <Text style={styles.headerText}>{item.month}</Text>
                  </View>
                  <FlatList
                    data={item.data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                  />
                </>
              )}
              keyExtractor={item => item.month}
              contentContainerStyle={styles.flatListContent}
            />
          </View>
        </View>
      </View>
      <NavigationBar navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    backgroundColor: "#D2B48C",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  whiteBox: {
    backgroundColor: '#FBF7EF',
    width: '100%',
    height: '70%',
    borderRadius: 10,
    marginTop: 10,
  },
  history: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 20,
  },
  midBar: {
    width: '65%',
    flexDirection: "row",
    justifyContent: "space-around", // Space the buttons evenly
    alignItems: 'center',
    height: '15%',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: -50,
    padding: 10,
  },
  header: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    flex: 1,
    width: '100%',
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 1000,
  },
  starlogo: {
    width: 16,
    height: 16,
    marginLeft: 5,
  },
  activityStars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityText: {},
  activityTitle: {},
  activityDate: {},
  stars: {},
  flatListContent: {
    flexGrow: 1,
  },
});

export default TransactionHistoryScreen;

*/