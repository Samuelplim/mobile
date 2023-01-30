import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { HeaderMenu } from "../../components/HeaderMenu";

import DeliveryDining from "../../images/delivery_dining_black_24dp.svg";
import ArrowAccept from "../../images/ArrowAccept.svg";
import CloseBlack from "../../images/close_black_24dp.svg";

export function Deliver() {
  return (
    <View style={styles.container}>
      <View style={styles.headerMenu}>
        <HeaderMenu title="Nova entrega" />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.infoContainer}>
          <View style={styles.infoWrapper}>
            <Text style={styles.infoTitle}>Tempo Estimado</Text>
            <Text style={styles.infoText}>30 Min</Text>
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.infoTitle}>Número de ID</Text>
            <Text style={styles.infoText}>#6789</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.costWrapper}>
          <Text style={styles.costText}>Valor da Entrega</Text>
          <Text style={styles.cost}>R$ 13,75</Text>
        </View>
        <View style={styles.statusDeliver}>
          <View style={styles.statusLine} />
          <View style={styles.statusSumary}>
            <LinearGradient
              colors={["rgba(255, 136, 31, 1)", "rgba(250, 100, 30, 1)"]}
              start={[0.1, 0.1]}
              style={styles.statusSumary}
            >
              <DeliveryDining style={styles.statusDeliverSvg} />
              <View>
                <Text style={styles.statusTitle}>Entrega</Text>
                <Text style={styles.totalRoute}>Percurso Total: 8km</Text>
              </View>
            </LinearGradient>
          </View>
          <View style={styles.statusContainer}>
            <View>
              <View style={styles.statusWrapper}>
                <LinearGradient
                  colors={["rgba(255, 136, 31, 1)", "rgba(250, 100, 30, 1)"]}
                  start={[0.1, 0.1]}
                  style={styles.statusGradientPoint}
                />
                <Text style={styles.statusSubTitle}>Coleta</Text>
              </View>
              <View style={styles.statusWrapperBulletPoints}>
                <View style={styles.statusBulletPoints} />
                <View>
                  <Text style={styles.statusText}>
                    Restaurante Recanto da Peixada
                  </Text>
                  <Text style={styles.statusText}>Distancia: 2km</Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.statusWrapper}>
                <LinearGradient
                  colors={["rgba(255, 136, 31, 1)", "rgba(250, 100, 30, 1)"]}
                  start={[0.1, 0.1]}
                  style={styles.statusGradientPoint}
                />
                <Text style={styles.statusSubTitle}>Entrega</Text>
              </View>
              <View style={styles.statusWrapperBulletPoints}>
                <View style={styles.statusBulletPoints} />
                <View>
                  <Text style={styles.statusText}>
                    Av: Cabo dos Soldados - Caranã
                  </Text>
                  <Text style={styles.statusText}>Distancia: 6km</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonAccept}>
          <LinearGradient
            style={styles.buttonAccept}
            colors={["rgba(255, 136, 31, 1)", "rgba(250, 100, 30, 1)"]}
            start={[0.1, 0.1]}
          >
            <ArrowAccept />
            <Text style={styles.buttonAcceptText}>Aceitar</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonClosed}>
          <CloseBlack />
          <Text style={styles.buttonClosedText}>Rejeitar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerMenu: {
    margin: 16,
  },
  wrapper: {
    marginTop: 44,
    paddingHorizontal: 24,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  infoWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  infoTitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#707070",
  },
  infoText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    color: "#FA641F",
  },
  divider: {
    height: 2,
    width: "100%",
    opacity: 0.5,
    backgroundColor: "#707070",
    marginTop: 13,
    marginBottom: 20,
  },
  costWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  costText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#707070",
  },
  cost: {
    fontFamily: "Poppins_700Bold",
    fontSize: 35,
    color: "#FA641F",
  },
  statusDeliver: {
    marginVertical: 36,
  },
  statusSumary: {
    width: "100%",
    padding: 5,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 16,
  },
  statusDeliverSvg: {
    margin: 10,
  },
  statusTitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    color: "#FFF",
  },
  totalRoute: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#FFF",
  },
  statusLine: {
    position: "absolute",
    height: "80%",
    width: 2,
    marginTop: 5,
    marginLeft: 30,
    backgroundColor: "#BABABA",
  },
  statusContainer: {
    marginLeft: 23,
  },
  statusSubTitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    color: "#FA641F",
  },
  statusText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#707070",
  },
  statusWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusWrapperBulletPoints: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  statusGradientPoint: {
    height: 16,
    width: 16,
    marginRight: 9,
    borderRadius: 8,
  },
  statusBulletPoints: {
    height: 10,
    width: 10,
    marginLeft: 3,
    marginRight: 12,
    backgroundColor: "#FFF",
    borderColor: "#FA641F",
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonAccept: {
    height: 48,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    borderRadius: 16,
  },
  buttonAcceptText: {
    marginLeft: 6,
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "#FFFFFF",
  },
  buttonClosed: {
    height: 48,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#E8453E",
  },
  buttonClosedText: {
    marginLeft: 6,
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "#E8453E",
  },
});
