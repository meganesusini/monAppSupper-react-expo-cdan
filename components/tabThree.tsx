import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { View, Button, Text } from "react-native";

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <NavigationContainer independent={true}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            navigation.navigate("modal2");
          }}
        />
      </View>
    </NavigationContainer>
  );
}