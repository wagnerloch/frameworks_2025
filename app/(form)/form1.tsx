import { useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import Accordion from "react-native-collapsible/Accordion";

const SECTIONS = [
  {
    title: "Quanto tempo depois de beber eu posso dirigir?",
    content:
      "A quantidade de álcool no sangue depende de vários fatores, como peso, sexo e metabolismo. Em geral, recomenda-se esperar pelo menos 2 horas após consumir uma bebida padrão antes de dirigir.",
  },
  {
    title: "Como funciona o bafômetro?",
    content:
      "O bafômetro mede a concentração de álcool no ar exalado. O resultado é convertido em uma estimativa da quantidade de álcool no sangue.",
  },
  {
    title: "O que diz o código de trânsito?",
    content:
      "A legislação brasileira proíbe a condução de veículos sob efeito de álcool. A tolerância é zero, ou seja, qualquer quantidade de álcool no sangue pode resultar em penalidades.",
  },
  {
    title: "Quais são as consequências de dirigir alcoolizado?",
    content:
      "Dirigir sob efeito de álcool pode resultar em multas, suspensão da carteira de habilitação e até mesmo prisão, dependendo da gravidade da infração.",
  },
  {
    title: "Como posso evitar dirigir alcoolizado?",
    content:
      "Planeje com antecedência. Use transporte público, chame um táxi ou use aplicativos de transporte. Nunca dirija se tiver consumido álcool.",
  },
];

export default function Index() {
  const { email, whatsapp } = useLocalSearchParams();
  const [cervejas, setCervejas] = useState(0);
  const [horas, setHoras] = useState(0);
  const [activeSections, setActiveSections] = useState<number[]>([]);

  type AccordionSection = {
    title: string;
    content: string;
  };

  const renderHeader = (
    section: AccordionSection,
    _: number,
    isActive: boolean
  ) => (
    <View
      style={[styles.accordionHeader, isActive && styles.accordionHeaderActive]}
    >
      <Text style={styles.accordionHeaderText}>{section.title}</Text>
    </View>
  );

  const renderContent = (section: AccordionSection) => (
    <View style={styles.accordionContent}>
      <Text>{section.content}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Dados do usuário</Text>
        <Text style={styles.infoText}>📧 Email: {email}</Text>
        <Text style={styles.infoText}>📱 WhatsApp: {whatsapp}</Text>
        <Text style={styles.infoHint}>
          Esta página demonstra o uso de navegação com parâmetros.
        </Text>
      </View>

      <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={(indexes: number[]) => setActiveSections(indexes)}
        underlayColor="#f3f4f6"
      />

      <View style={styles.content}>
        <Text style={styles.title}>Quantos copos de cerveja você bebeu?</Text>

        <Text style={styles.valueText}>{Math.round(cervejas)} copo(s)</Text>

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          step={1}
          minimumTrackTintColor="#fbbf24"
          maximumTrackTintColor="#d1d5db"
          thumbTintColor="#f59e0b"
          value={cervejas}
          onValueChange={(val) => setCervejas(val)}
        />

        <Text style={styles.title}>Há quantas horas você parou de beber?</Text>

        <Text style={styles.valueText}>{Math.round(horas)} hora(s)</Text>

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={12}
          step={1}
          minimumTrackTintColor="#fbbf24"
          maximumTrackTintColor="#d1d5db"
          thumbTintColor="#f59e0b"
          value={horas}
          onValueChange={(val) => setHoras(val)}
        />

        <Button title="Avançar" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    paddingBottom: 40,
  },
  content: {
    marginTop: 32,
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
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    width: "90%",
    marginBottom: 24,
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
  accordionHeader: {
    backgroundColor: "#e5e7eb",
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    width: "90%",
  },
  accordionHeaderActive: {
    backgroundColor: "#fbbf24",
  },
  accordionHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },
  accordionContent: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 8,
    width: "90%",
    marginBottom: 8,
  },
});
