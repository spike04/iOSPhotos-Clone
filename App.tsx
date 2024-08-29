import { StatusBar } from 'expo-status-bar'
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import { photos } from './data'
import Carousel from './components/Carousel'
import { useState } from 'react'

export default function App() {
  const { width, height } = useWindowDimensions()
  const [headerCarouselPage, setHeaderCarouselPage] = useState(0)

  const onHeaderCarouselScroll = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const currentPage = Math.max(
      0,
      Math.floor((e.nativeEvent.contentOffset.x + width / 2) / width),
    )
    if (currentPage !== headerCarouselPage) {
      setHeaderCarouselPage(currentPage)
    }
  }

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
        onScroll={onHeaderCarouselScroll}
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

      <View
        style={{
          padding: 10,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}
      >
        {Array(3)
          .fill(0)
          .map((item, index) => (
            <View
              key={index}
              style={{
                width: headerCarouselPage === index ? 10 : 8,
                aspectRatio: 1,
                backgroundColor:
                  headerCarouselPage === index ? 'black' : 'gray',
                borderRadius: headerCarouselPage === index ? 5 : 4,
              }}
            />
          ))}
      </View>

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
