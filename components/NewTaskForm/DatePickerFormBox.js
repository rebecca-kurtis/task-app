import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Datepicker, Layout, Text } from '@ui-kitten/components';


export default function DatePickerFormBox(state) {
  const [date, setDate] = useState(new Date());


  function handleDateChange(nextDate) {
    state.setState("due_date", date)
    setDate(nextDate)
  }

  return (
    <Layout
      style={styles.container}
      level='1'
    >

      <Text category='h6'>
        {`Due Date: ${date.toLocaleDateString()}`}
      </Text>

      <Datepicker
        date={date}
        onSelect={nextDate => handleDateChange(nextDate)}
      />

    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    // minHeight: 376,
  },
});