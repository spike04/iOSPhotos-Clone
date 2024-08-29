import { StatusBar } from 'expo-status-bar'
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import { photos } from './data'
import Carousel from './components/Carousel'

export default function App() {
  const { width, height } = useWindowDimensions()
  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <ScrollView
        horizontal
        style={{ height: height / 2 }}
        showsHorizontalScrollIndicator={false}
        snapToStart
        snapToInterval={width}
        decelerationRate="fast"
      >
        <FlatList
          style={{ width }}
          data={photos}
          numColumns={4}
          contentContainerStyle={{ gap: 2 }}
          columnWrapperStyle={{ gap: 2 }}
          scrollEnabled={false}
          inverted
          renderItem={({ item }) => (
            <Image
              source={item.image}
              style={{ width: `${100 / 4}%`, aspectRatio: 1 }}
            />
          )}
        />

        <Image
          source={photos[0].image}
          style={{ width, height: '100%' }}
          resizeMode="cover"
        />
        <Image
          source={photos[10].image}
          style={{ width, height: '100%' }}
          resizeMode="cover"
        />
      </ScrollView>

      <Carousel title="Albums" photos={photos.slice(0, 6)} />
      <Carousel title="People" photos={photos.slice(3, 6)} />
      <Carousel title="Featured" photos={photos.slice(6, 9)} />

      <StatusBar style="auto" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
