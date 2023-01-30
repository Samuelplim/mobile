import { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { NavigationContext } from "@react-navigation/native";

import ArrowBackBlackSvg from "../../images/arrow_back_black_24dp.svg";

export function HeaderMenu(props) {
  const navigation = useContext(NavigationContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowBackBlackSvg />
      </TouchableOpacity>
      {props.title ? (
        <Text style={styles.title}>{props.title}</Text>
      ) : (
        <Text></Text>
      )}
      <Text></Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
  },
});
