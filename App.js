import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Carousel from './src/components/Carousel';

export default function App() {

  const dataValue = [
   '#FF6633',
   '#FFB399',
   '#00B3B6',
   '#99FF',
   '#99FF50',
   '#70FF',
   '#704',
   '#526687',
   '#FF33',
   '#FF33FF'
  ];

  return (
    <View style={styles.container}>
       <SafeAreaView>
        <Carousel data={dataValue}/>
       </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
