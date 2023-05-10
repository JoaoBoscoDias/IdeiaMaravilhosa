import { StatusBar } from "expo-status-bar";
import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { db } from "./src/config/firebase";

export default function App() {
  const [produtos, setProdutos] = useState([]);

  async function buscarProduto() {
    const produtoRef = collection(db, "produto");
    const produtosSnapshot = await getDocs(produtoRef);
    const produtosLista = produtosSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    console.log(produtosLista);
  }

  useEffect(() => {
    buscarProduto();
  },[]);

  return (
    <View style={styles.container}>
      <Text>Alone in the world :/</Text>
      <Text>Nome do produto</Text>
      <Text>Descrição do produto</Text>
      <Text>Preço do produti</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
