import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const { email, whatsapp } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Página de início do meu app!!</Text>
      <Text>Dados do usuário:</Text>
      <Text>Email: {email}</Text>
      <Text>Whatsapp: {whatsapp}</Text>
      <Text>Essa página é um exemplo de como passar dados entre páginas</Text>
    </View>
  );
}
