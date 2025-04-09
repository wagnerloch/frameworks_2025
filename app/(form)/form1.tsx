import { useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet, Button } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";

export default function Index() {
  const { email, whatsapp } = useLocalSearchParams();
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Dados do usuário</Text>
        <Text style={styles.infoText}>📧 Email: {email}</Text>
        <Text style={styles.infoText}>📱 WhatsApp: {whatsapp}</Text>
        <Text style={styles.infoHint}>
          Esta página demonstra o uso de navegação com parâmetros.
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Quantos copos de cerveja você bebeu hoje?</Text>

        <Text style={styles.valueText}>{Math.round(value)} copo(s)</Text>

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          step={1}
          minimumTrackTintColor="#fbbf24"
          maximumTrackTintColor="#d1d5db"
          thumbTintColor="#f59e0b"
          value={value}
          onValueChange={(val) => setValue(val)}
        />

        <Button title="Avançar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    paddingTop: 10,
  },
  content: {
    paddingTop: 100,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#111827",
    textAlign: "center",
  },
  valueText: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
    color: "#f59e0b",
  },
  slider: {
    width: 250,
    height: 40,
    marginBottom: 24,
  },
  infoBox: {
    position: "relative",
    top: 0,
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    width: "90%",
    zIndex: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1f2937",
  },
  infoText: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 4,
  },
  infoHint: {
    marginTop: 8,
    fontSize: 14,
    color: "#6b7280",
  },
});