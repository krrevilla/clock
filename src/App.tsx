// App.tsx
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import Clock from './components/Clock';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.container}
          centerContent={true}
          contentInsetAdjustmentBehavior="automatic">
          <Clock />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

// const ScrollView = styled.ScrollView`
//   flex: 1;
//   background-color: black;
// `;

// const SafeAreaView = styled.SafeAreaView`
//   background-color: black;
//   flex: 1;
// `;

export default App;
