import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Datepicker, Layout, Text } from '@ui-kitten/components';


export default function DatePickerFormBox() {
  const [date, setDate] = useState(new Date());

  return (
    <Layout
      style={styles.container}
      level='1'
    >

      <Text category='h6'>
        {`Selected date: ${date.toLocaleDateString()}`}
      </Text>

      <Datepicker
        date={date}
        onSelect={nextDate => setDate(nextDate)}
      />

    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    // minHeight: 376,
  },
});