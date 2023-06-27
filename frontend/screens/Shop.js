import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon2 from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Ionicons";
import NavigationBar from "../Components/NavBar";
import ProfileBar from "../Components/ProfileBar";

const ShopScreen = () => {
  const navigation = useNavigation();
  const starbucksSource = require("../assets/starbucks.png");
  const starsSource = require("../assets/star.png");

  const MidBar = () => {
    return (
      <View style={[styles.midBar, styles.shadowProp]}>
        <TouchableOpacity
          style={styles.barButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon2 name="target" size={24} style={styles.icon} />
          <Text style={styles.barButtonText}>Goal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.barButton}
          onPress={() => navigation.navigate("Shop")}
        >
          <Icon2 name="gift" size={24} style={styles.icon} />
          <Text style={styles.barButtonText}>Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.barButton}
          onPress={() => navigation.navigate("Shop")}
        >
          <Icon name="receipt-outline" size={24} style={styles.icon} />
          <Text style={styles.barButtonText}>History</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const TransactionHistoryInfo = [
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
      image: 'https://picsum.photos/200',
      stars: '+12'
    },
    {
      id: '3',
      title: 'Acai Affair (50%)',
      date: '2 June 2023 | 15:43',
      image: 'https://picsum.photos/200',
      stars: '-60'
    }, 
    {
      id: '4',
      title: 'Monthly Contribution Bonus',
      date: '1 June 2023 | 00:00',
      image: 'https://picsum.photos/200',
      stars: '+10'
    }, 
  ];

  const renderItem = ({ item }) => (
    <View style={styles.activityItem}>
      <View style={styles.itemContainer}>
        <Image source={starbucksSource} style={styles.logo} />
        <View style={styles.activityText}>
          <Text style={styles.activityTitle}>{item.title}</Text>
          <Text style={styles.activityDate}>{item.date}</Text>
        </View>
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
        <Image source={{ uri: 'https://globalassets.starbucks.com/assets/92a2acfde0d74350bae518afe9928fea.jpg' }} style={styles.backgroundImage} />
        <MidBar /> 
        <View style={styles.whiteBox}>
          <Text style={styles.title}>Recent Activity</Text>
          <View style={styles.history}>
            <FlatList
              data={TransactionHistoryInfo}
              renderItem={renderItem}
              keyExtractor={item => item.id}
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
    height: '100%', // Set the height to 100%
  },
  whiteBox: {
    backgroundColor: '#D2B48C',
    width: '100%',
    height: '70%',
    borderRadius: 10,
    // Remove marginTop: 10
  },
  history: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // Remove width: '80%'
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
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: -50,
    padding: 10,
  },
  shadowProp: {
    shadowOffset: {width: 0, height: 3},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  
  },
  barButton: {
    flex: 1, // Equal flex distribution for all buttons
    paddingVertical: 8,
    alignItems: "center",
  },
  barButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    marginBottom: 4,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
    flex: 1,
    width: '80%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    alignItems: 'right',
  },
  activityStars: {
    flexDirection: 'row',
    alignItems: 'right',
  },
  activityText: {},
  activityTitle: {},
  activityDate: {},
  stars: {},
  flatListContent: {
    flexGrow: 1,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#DDDDDD',
    marginTop: 10,
    alignSelf: 'flex-end',
    width: '80%',
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "flex-start",
    marginLeft: 20, // Add marginLeft: 20 to align with the container
  }
});

export default ShopScreen;
