import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import PigzSvg from "../../images/pigz-logotipo-branco.svg";
import GoogleSvg from "../../images/logo_googleg_48dp.svg";
import EyeOpenSvg from "../../images/eyeOpenPass.svg";
import EyeCloseSvg from "../../images/eyeClosePass.svg";

export function SignIn({ navigation: { navigate } }) {
  const [showPass, setShowPass] = useState(false);

  function goHome() {
    navigate("Home");
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PigzSvg style={styles.image} />
        <Text style={styles.title}>Para entregadores</Text>
        <View style={styles.wrapperForm}>
          <Text style={styles.subtitle}>Login</Text>
          <View style={styles.wrapperInput}>
            <Text style={styles.Inputext}>Email ou Telefone</Text>
            <TextInput style={styles.input} placeholder="example@pigz.com.br" />
          </View>
          <View style={styles.wrapperInput}>
            <Text style={styles.Inputext}>Senha</Text>
            <View style={styles.wrapperInputPassword}>
              <TextInput
                style={styles.inputPassword}
                placeholder="p i g z p i g z"
                secureTextEntry={showPass}
              />
              <TouchableOpacity
                style={styles.inputPasswordShow}
                onPress={() => setShowPass(!showPass)}
              >
                {showPass ? <EyeCloseSvg /> : <EyeOpenSvg />}
              </TouchableOpacity>
            </View>
          </View>
          <Text
            onPress={() => {
              Linking.openURL("http://google.com.br");
            }}
            style={styles.link}
          >
            Esqueci minha senha
          </Text>
          <TouchableOpacity onPress={() => goHome()}>
            <LinearGradient
              style={styles.linearbutton}
              colors={["rgba(255, 136, 31, 1)", "rgba(250, 100, 30, 1)"]}
              start={[0.1, 0.1]}
            >
              <Text style={styles.buttontext}>Entrar</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.wrapperText}>
            <Text style={styles.textcreateacount}>Não tem uma Conta?</Text>
            <Text
              onPress={() => {
                Linking.openURL("http://google.com.br");
              }}
              style={styles.linkcreateacount}
            >
              Criar agora!
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.wrapperfootertitle}>
            <Text style={styles.footertitle}>Entrar com</Text>
            <View style={styles.footerline}></View>
          </View>
          <TouchableOpacity style={styles.footerbutton}>
            <GoogleSvg />
            <View style={styles.footerWrapper}>
              <Text style={styles.footertextbutton}>
                Continuar com o Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 24,
  },
  image: {
    marginBottom: 8,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    color: "#333333",
  },
  wrapperForm: {
    marginTop: 37,
    width: "100%",
  },
  subtitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    marginBottom: 16,
    color: "#222222",
  },
  wrapperInput: {
    marginBottom: 16,
  },
  Inputext: {
    marginBottom: 6,
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#676767",
  },
  input: {
    width: "100%",
    padding: 13,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#4B4B4B",
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#FA641E",
  },
  wrapperInputPassword: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#FA641E",
  },
  inputPassword: {
    flex: 5,
    padding: 13,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#4B4B4B",
  },
  inputPasswordShow: {
    flex: 1,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: "#676767",
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    textDecorationLine: "underline",
    marginTop: 24,
    marginBottom: 24,
  },
  linearbutton: {
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    padding: 11,
  },
  buttontext: {
    color: "#FFFFFF",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  wrapperText: {
    marginTop: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textcreateacount: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#676767",
  },
  linkcreateacount: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    marginLeft: 6,
    color: "#FA641E",
  },
  footer: {
    marginVertical: 60,
    width: "100%",
  },
  wrapperfootertitle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  footertitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    color: "#333333",
  },
  footerline: {
    height: 2,
    width: "80%",
    marginLeft: 6,
    backgroundColor: "#707070",
  },
  footerbutton: {
    flexDirection: "row",
    borderColor: "#9F9F9F",
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
  },
  footerWrapper: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  footertextbutton: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "#676767",
  },
});
