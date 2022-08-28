import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';

//desestruturação pegando somente o with
const {width} = Dimensions.get('window');

const Carousel = ({data}) => {
  return (
    <FlatList
     data={data}
     //Se tivesse o id ou outro valor passaria item.id item.index
     //pagingEnabled Para essa usabilidade ele não vai funcionar correto somente quando itens tem a largura total da tela width eixo X
     keyExtractor={(item) => String(item)}
     //showhorizontalScrollIndicator={true}
     horizontal
     //começa no index, passa a largura, calcula 80% da tela para o elemento, -40 (20px de cada lado)
     // index(possição - 1) Vezes 40 por conta do valor inicial q inicia em 0
     snapToOffsets={[...Array(data.length)].map((item, index) => index * (width * 0.8 - 40) + (index - 1) * 40)}
     snapToAlignment={'start'}
     scrollEventThrottle={16}
     decelerationRate='fast'
     style={{marginTop:20}}
     renderItem={({item}) => (
      <View
        style={{
          //Cor que já está sendo passada na lista o valor
          backgroundColor: item,
          //Largura dividida por 2.6
          height: width / 2.6,
          //valor total tela * 0.8 80% do valor da tela tamanho do elemento
          width: width * 0.8,
          //10px de cada lado horizontal
          marginHorizontal: 10,
          borderRadius: 12,
        }}
      />
      )}
    />
  );
}

export default Carousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
