import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Página inicial!!</Text>
      <Link href={"/login"}>Ir para o login</Link>
      <Link href={"/register"}>Ir para o cadastro</Link>
      <Link href={"/config"}>Ir para as configurações</Link>
      <Link href={"/config/user"}>Ir para as configurações do usuário</Link>
      <Link
        href={{
          pathname: '/produtos/[id]',
          params: { id: 'bacon' },
        }}>
        Ver detalhes do produto bacon
      </Link>
    </View>
  );
}
