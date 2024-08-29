import { Image, ScrollView, Text, View, StyleSheet } from 'react-native'

type Props = {
  title: string
  photos: Photo[]
}

export default function Carousel({ title, photos }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.images}
        showsHorizontalScrollIndicator={false}
        snapToStart
        snapToInterval={250 + 16}
        decelerationRate="fast"
      >
        {photos.map((photo) => (
          <Image key={photo.id} source={photo.image} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    padding: 16,
    fontWeight: 'bold',
    fontSize: 20,
  },
  images: {
    gap: 16,
    paddingHorizontal: 16,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 16,
  },
})
