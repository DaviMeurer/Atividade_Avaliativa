import { View, Text, StyleSheet,  } from "react-native"
import Input from "./components/Input"

const App = () => {
  return(
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Login
      </Text>
      <Input style={styles.email}>
      </Input>
      <Input style={styles.senha}>
      </Input>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 50,
    padding: 20
  },
  titulo:{
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "flex-start",
    marginBottom: 30
  },
  email:{
    marginBottom: 20
  },
  senha:{
    marginTop: 20,
  },
  salvar:{

  }
})

export default App