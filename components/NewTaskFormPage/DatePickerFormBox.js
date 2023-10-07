import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Datepicker, Layout, Text } from "@ui-kitten/components";

export default function DatePickerFormBox(state) {
  const [date, setDate] = useState(new Date());

  function handleDateChange(nextDate) {
    state.setState("due_date", date);
    setDate(nextDate);
  }

  return (
    <Layout style={styles.datePickerContainer} level="1">
      <Text category="h6" style={styles.headerText}>
        {`Due Date: ${date.toLocaleDateString()}`}
      </Text>

      <Datepicker
        date={date}
        onSelect={(nextDate) => handleDateChange(nextDate)}
        style={styles.datePickerSelector}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  datePickerContainer: {
    backgroundColor: "#6F2DBD",
    color: "#fff",
  },
  headerText: {
    color: "#fff",
  },
});
