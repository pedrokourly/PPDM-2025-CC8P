import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "#333",
        }}
      >
        Agora ta maior!! :O
      </Text>
    </View>
  );
}
