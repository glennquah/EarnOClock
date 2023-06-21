import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDatePress = (date) => {
    setSelectedDate(date.dateString);
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          theme={{
            calendarBackground: "#ffffff",
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#ff9f43",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#ff9f43",
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e1e8",
            dotColor: "#00adf5",
            selectedDotColor: "#ffffff",
            arrowColor: "#ff9f43",
            monthTextColor: "#ff9f43",
            textDayFontWeight: "500",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "bold",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 14,
          }}
          onDayPress={handleDatePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  calendarContainer: {
    borderRadius: 20,
    overflow: "hidden",
    width: 280, // adjust the width as desired
    height: 260, // adjust the height as desired
  },
  calendar: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
  },
});

export default CalendarComponent;
