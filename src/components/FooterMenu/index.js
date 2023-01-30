import { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { NavigationContext } from "@react-navigation/native";

import Relatorio from "../../images/relatorio.svg";
import Home from "../../images/home.svg";
import User from "../../images/user.svg";

export function FooterMenu() {
  const navigation = useContext(NavigationContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.wrapper}>
        <Relatorio />
        <Text style={styles.title}>Relatórios</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapper}>
        <Home />
        <Text style={styles.titleAtive}>Visão geral</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapper}>
        <User />
        <Text style={styles.title}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 10,
    color: "#9F9F9F",
  },
  titleAtive: {
    fontFamily: "Poppins_500Medium",
    fontSize: 10,
    color: "#FA641E",
  },
});
