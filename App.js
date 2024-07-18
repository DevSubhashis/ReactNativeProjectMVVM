// App.js
// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import ProductHome from './src/screens/ProductHome';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ProductHome />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;


import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/screens/course/Store';
import CourseList from './src/screens/course/CourseList';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <CourseList />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;