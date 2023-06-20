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

  const MidBar = () => {
    return (
      <View style={[styles.midBar, styles.shadowProp]}>
            <TouchableOpacity
              style={styles.barButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Icon2 name="target" size={24} style={styles.icon} />
              <Text style={styles.barButtonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.barButton}
              onPress={() => navigation.navigate("Shop")}
            >
              <Icon2 name="gift" size={24} style={styles.icon} />
              <Text style={styles.barButtonText}>Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.barButton}
              onPress={() => navigation.navigate("Schedule")}
            >
              <Icon name="receipt-outline" size={24} style={styles.icon} />
              <Text style={styles.barButtonText}>Schedule</Text>
            </TouchableOpacity>
          </View>
    );
  }

  const TransactionHistory = [
    {
      id: '1',
      title: 'Starbucks Jurong Point',
      date: '4 June 2023 | 15:00-20:00',
      image: 'https://picsum.photos/200',
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
  ]

  const renderItem = ({ item }) => (
    <View style={styles.activityItem}>
      <Image source={{ uri: item.image }} style={styles.logo} />
      <View style={styles.activityText}>
        <Text style={styles.activityTitle}>{item.title}</Text>
        <Text style={styles.activityDate}>{item.date}</Text>
      </View>
      <View style={styles.activityStars}>
        <Text style={styles.stars}>{item.stars}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ProfileBar navigation={navigation} />
      <View style={styles.container}>
        <Image source={{ uri: 'https://picsum.photos/400' }} style={styles.backgroundImage} />
        <MidBar /> 
        <View style={styles.whiteBox}>
          <View style={styles.history}>
            <FlatList data={TransactionHistory} renderItem={renderItem} keyExtractor={item => item.id} contentContainerStyle={styles.flatListContent}/>
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
  activityText: {
  },
  activityTitle: {
  },
  activityDate: {
  },
  stars: {
  },
  flatListContent: {
    flexGrow: 1,
  },
});

export default ShopScreen;
