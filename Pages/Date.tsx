import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useDateCalculator} from '../hooks/date/dateCalculator';
import { useEffect } from 'react'

export default function App() {
  const {
    today,
    tomorrow,
    yesterday,
    futureDate,
    pastDate,
    setDaysToChange,
    getNextBusinessDaysFromDate,
    businessDay,
  } = useDateCalculator()

  useEffect(() => {
    setDaysToChange(-3)
    getNextBusinessDaysFromDate(today, 5)
  }, [])

  return (
    <View style={styles.container}>
      <Text>Today {today?.toString()}</Text>
      <Text>Tomorrow {tomorrow?.toString()}</Text>
      <Text>Yesterday {yesterday?.toString()}</Text>
      <Text>future {futureDate?.toString()}</Text>
      <Text>past {pastDate?.toString()}</Text>
      <Text>businessDay {businessDay?.toString()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
