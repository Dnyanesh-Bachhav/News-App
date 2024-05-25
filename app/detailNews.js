import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
  StatusBar,
} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { COLORS } from "../constants";
import { useLocalSearchParams } from "expo-router";
import Header from "../components/global/Header";
import { Ionicons } from '@expo/vector-icons';
const CARD_HEIGHT = Dimensions.get("window").height / 5;
const CARD_WIDTH = Dimensions.get("window").width / 3;
function DetailNews() {
  // console.log(route.params.title);
  const {
    sourceName,
    imageUrl,
    title,
    author,
    description,
    url,
    publishedAt,
    content,
  } = useLocalSearchParams();

  async function handleClick(url) {
    let canOpen = Linking.canOpenURL(url);
    if (canOpen) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Can't Open this URL...");
    }
  }
  return (
    <View style={ styles.container }>
        <Header headerName="Detailed News" icon={<Ionicons name="arrow-back" size={24} color="white" />} />

    <ScrollView style={{ paddingHorizontal: 10 }}  showsVerticalScrollIndicator={false}>
      {/* sourceName, imageUrl, title, author, description, url, publishedAt, content */}
      <Text style={styles.titleStyle}>{title}</Text>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.imgStyle}
      />
      <Text style={styles.sourceNameStyle}>{sourceName}</Text>
      <Text style={styles.descriptionStyle}>{description}</Text>
      <View style={styles.contentStyle}>
        <Text style={{ fontSize: 16 }}>{content}</Text>
        <TouchableOpacity
          onPress={() => {
            handleClick(url);
          }}
          style={styles.readMoreStyle}
        >
          <Text style={{ color: COLORS.primary, fontSize: 16 }}>
            Read more...
          </Text>
          <Ionicons
            name="open-outline"
            size={21}
            color="black"
            style={{ color: COLORS.primary }}
          />
        </TouchableOpacity>
      </View>
      {author != null ? (
        <>
          <Text style={{ fontSize: 16 }}>
            <Text style={styles.authorStyle}>Author:</Text>{" "}
            {author}
          </Text>
        </>
      ) : null}

      <Text style={{ fontSize: 16 }}>
        <Text style={styles.authorStyle}>Published At: </Text>{" "}
        {publishedAt}
      </Text>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          handleClick(url);
        }}
      >
        <Text style={styles.buttonText}>Read More...</Text>
      </TouchableOpacity>
    </ScrollView>
    <StatusBar/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    marginTop: StatusBar.currentHeight,
  },
  imgStyle: {
    width: "100%",
    height: CARD_HEIGHT,
    resizeMode: "cover",
    borderRadius: 12,
    marginVertical: 8,
  },
  contentStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    tintColor: COLORS.red,
    color: COLORS.primary,
    marginTop: 4,
    fontSize: 15,
    // display: 'inline-flex',
    // width: CARD_WIDTH,
  },
  readMoreStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
    fontSize: 16,
  },
  titleStyle: {
    fontWeight: "700",
    textAlign: "left",
    fontSize: 22,
    marginBottom: 10,
  },
  sourceNameStyle: {
    color: COLORS.red,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
  },
  authorStyle: {
    color: COLORS.red,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descriptionStyle: {
    fontSize: 16,
  },
  buttonStyle: {
    padding: 10,
    paddingHorizontal: 15,
    alignSelf: "center",
    elevation: 25,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    width: "60%",
    marginTop: 40,
    marginBottom: 50,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 22,
    textAlign: "center",
  },
});

export default DetailNews;
