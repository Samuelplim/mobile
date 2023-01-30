import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { HeaderMenu } from "../../components/HeaderMenu";
import { FooterMenu } from "../../components/FooterMenu";

import EyeOpen from "../../images/eyeOpen.svg";
import EyeClose from "../../images/eyeClose.svg";
import Qrcode from "../../images/qrcode.svg";

export function Home({ navigation: { navigate } }) {
  const [hideDailyValue, setHideDailyValue] = useState(false);
  function goDeliver() {
    navigate("Deliver");
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <HeaderMenu title="Visão geral" />
        <View style={styles.contents}>
          <LinearGradient
            style={styles.dailySummary}
            colors={["rgba(255, 136, 31, 1)", "rgba(250, 100, 30, 1)"]}
            start={[0.1, 0.1]}
          >
            <View style={styles.rowDaily}>
              <Text style={styles.dailyText}>Ganhos do Dia</Text>
              <Text style={styles.dailyText}>29/07</Text>
            </View>
            <View style={styles.rowDaily}>
              <Text style={styles.dailyValue}>
                {hideDailyValue ? "----" : "R$ 150"}
              </Text>
              <TouchableOpacity
                onPress={() => setHideDailyValue(!hideDailyValue)}
              >
                {hideDailyValue ? <EyeClose /> : <EyeOpen />}
              </TouchableOpacity>
            </View>
          </LinearGradient>
          <View style={styles.deliverSummary}>
            <Text style={styles.deliverTitle}>Resumos das Entregas</Text>
            <View style={styles.deliverWrapper}>
              <View style={styles.deliverBox}>
                <Text style={styles.deliverSubtitle}>Aceitas</Text>
                <Text style={styles.deliverNumber}>15</Text>
              </View>
              <View style={styles.deliverBox}>
                <Text style={styles.deliverSubtitle}>Rejeitadas</Text>
                <Text style={styles.deliverNumber}>5</Text>
              </View>
              <View style={styles.deliverBox}>
                <Text style={styles.deliverSubtitle}>Total</Text>
                <Text style={styles.deliverNumber}>20</Text>
              </View>
            </View>
          </View>

          <View style={styles.newDeliver}>
            <Text style={styles.newDeliverTitle}>Iniciar Nova Entrega</Text>
            <Text style={styles.newDeliverSubTitle}>
              Número de Identificação
            </Text>
            <View style={styles.newDeliverWrapper}>
              <TextInput placeholder="0000" style={styles.newDeliverInput} />
              <TouchableOpacity
                style={styles.newDeliverButton}
                onPress={() => goDeliver()}
              >
                <Text style={styles.newDeliverText}>OK</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.newDeliverViewButton}>
              <LinearGradient
                style={styles.newDeliverViewButton}
                colors={["rgba(255, 136, 31, 1)", "rgba(250, 100, 30, 1)"]}
                start={[0.1, 0.1]}
              >
                <Qrcode />
                <Text style={styles.newDeliverViewButtonText}>
                  Escanear Qrcode
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footerMenu}>
          <FooterMenu />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  contents: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerMenu: {
    position: "relative",
    marginVertical: 70,
  },
  dailySummary: {
    width: "100%",
    flexDirection: "column",
    padding: 16,
    borderRadius: 16,
    marginVertical: 32,
  },
  rowDaily: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dailyText: {
    fontFamily: "Poppins_500Medium",
    color: "#FFFFFF",
    fontSize: 16,
  },
  dailyValue: {
    fontFamily: "Poppins_700Bold",
    color: "#FFF",
    fontSize: 30,
  },
  deliverSummary: {
    width: "100%",
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 6,
  },
  deliverTitle: {
    fontFamily: "Poppins_700Bold",
    marginBottom: 18,
    fontSize: 16,
    color: "#333333",
  },
  deliverWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  deliverBox: {
    height: 102,
    width: 99,
    marginHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  deliverSubtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 11,
    color: "#9F9F9F",
  },
  deliverNumber: {
    fontFamily: "Poppins_500Medium",
    fontSize: 40,
    color: "#333333",
  },
  newDeliver: {
    width: "100%",
    padding: 16,
    marginVertical: 32,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 6,
  },
  newDeliverTitle: {
    fontFamily: "Poppins_700Bold",
    marginBottom: 8,
    fontSize: 16,
    color: "#333333",
  },
  newDeliverWrapper: {
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  newDeliverSubTitle: {
    marginBottom: 10,
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#707070",
  },
  newDeliverInput: {
    width: "75%",
    padding: 8,
    marginRight: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#FF671F",
  },
  newDeliverButton: {
    height: 46,
    width: "100%",
    maxWidth: 64,
    borderRadius: 16,
    backgroundColor: "#FF671F",
    alignItems: "center",
    justifyContent: "center",
  },
  newDeliverText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 17,
    color: "#FFF",
  },
  newDeliverViewButton: {
    width: "100%",
    height: 46,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  newDeliverViewButtonText: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Poppins_500Medium",
  },
});
