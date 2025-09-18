import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";

const arvores = [
  {
    id: 1,
    nome: "Carvalho",
    origem: "Europa",
    preco: 150.0,
    desc: "O carvalho é uma árvore do gênero Quercus, conhecida por sua longevidade, resistência e importância ecológica, com mais de 600 espécies distribuídas principalmente no hemisfério norte.",
    imagem: require("../assets/img/carvalho.png"),
  },
  {
    id: 2,
    nome: "Ipê Amarelo",
    origem: "Brasil",
    preco: 200.0,
    desc: "O ipê amarelo (Handroanthus albus) é uma árvore icônica da flora brasileira, conhecida por suas flores vibrantes e importância ecológica.",
    imagem: require("../assets/img/ipeamarelo.png"),
  },
  {
    id: 3,
    nome: "Baobá",
    origem: "África",
    preco: 500.0,
    desc: "O baobá, conhecido como árvore da vida, é uma árvore majestosa do gênero Adansonia, famosa por sua capacidade de armazenar água e suas características únicas.",
    imagem: require("../assets/img/baoba.png"),
  },
  {
    id: 4,
    nome: "Salgueiro",
    origem: "Ásia",
    preco: 120.0,
    desc: "O salgueiro (gênero Salix) é uma árvore de folhas caducas, conhecida por suas propriedades medicinais e sua importância ecológica, especialmente em áreas úmidas.",
    imagem: require("../assets/img/salgueiro.png"),
  },
  {
    id: 5,
    nome: "Sequoia",
    origem: "América do Norte",
    preco: 1000.0,
    desc: "A sequoia é uma árvore imensa e notável, conhecida por ser uma das mais altas e pesadas do mundo. A espécie mais conhecida é a Sequoia sempervirens, ou sequoia-vermelha, que pode atingir até 100 metros de altura e viver por milhares de anos. ",
    imagem: require("../assets/img/sequoia.png"),
  },
  {
    id: 6,
    nome: "Cedro",
    origem: "Mediterrâneo",
    preco: 300.0,
    desc: "O cedro é uma árvore majestosa, conhecida por sua beleza, durabilidade e múltiplas utilidades, sendo amplamente utilizada na indústria madeireira e no paisagismo.",
    imagem: require("../assets/img/cedro.png"),
  },
  {
    id: 7,
    nome: "Cerejeira",
    origem: "Ásia",
    preco: 400.0,
    desc: "A cerejeira é uma árvore ornamental e frutífera, famosa por suas flores delicadas e simbolismo cultural, especialmente no Japão.",
    imagem: require("../assets/img/cerejeira.png"),
  },
  {
    id: 8,
    nome: "Araucária",
    origem: "América do Sul",
    preco: 200.0,
    desc: "A araucária (Araucaria angustifolia) é uma árvore nativa do Brasil. Essa espécie é conhecida por sua importância econômica e ecológica, contribuindo para a diversidade das florestas subtropicais. A araucária é uma árvore de grande porte, com folhas em forma de agulha e uma copa característica, e é frequentemente associada à produção de pinhões, que são comestíveis e utilizados na culinária.",
    imagem: require("../assets/img/araucaria.png"),
  },
];

export default function App() {
  const [arvoreSelecionada, setArvoreSelecionada] = useState(null);
  const [modalVisivel, setModalVisivel] = useState(false);

  function abrirModal(item) {
    setArvoreSelecionada(item);
    setModalVisivel(true);
  }

  function fecharModal() {
    setModalVisivel(false);
    setArvoreSelecionada(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Catálogo de Árvores</Text>

      <FlatList
        style={{ width: "100%" }}
        data={arvores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemLista}
            onPress={() => abrirModal(item)}
          >
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>Origem: {item.origem}</Text>
            <Text>Preço: R$ {item.preco.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={fecharModal}
      >
        <View style={styles.modalFundo}>
          <View style={styles.modalContainer}>
            {arvoreSelecionada && (
              <>
                <Text style={styles.nomeDetalhes}>{arvoreSelecionada.nome}</Text>
                <Image
                  source={arvoreSelecionada.imagem}
                  style={styles.imagem}
                  resizeMode="cover"
                />
                <ScrollView style={{ maxHeight: 120, marginTop: 10 }}>
                  <Text style={styles.desc}>{arvoreSelecionada.desc}</Text>
                </ScrollView>
                <Text style={[styles.desc, { fontWeight: "bold", marginTop: 10 }]}>
                  Preço: R$ {arvoreSelecionada.preco.toFixed(2)}
                </Text>
                <Pressable style={styles.botaoFechar} onPress={fecharModal}>
                  <Text style={styles.textoBotao}>Fechar</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>
      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>🌱 2025 • Desenvolvido por Beatriz e Sophia</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e6f2e6",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2e7d32",
  },
  itemLista: {
    backgroundColor: "#a5d6a7",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#2e7d32",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  nome: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 5,
    color: "#1b5e20",
  },
  modalFundo: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // fundo semi-transparente
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#f1f8e9",
    borderRadius: 12,
    padding: 20,
    width: "85%",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#4caf50",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  nomeDetalhes: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2e7d32",
  },
  imagem: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  desc: {
    fontSize: 16,
    textAlign: "center",
    color: "#33691e",
  },
  botaoFechar: {
    marginTop: 20,
    backgroundColor: "#388e3c",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 30,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  rodape: {
  width: "100%",
  paddingVertical: 12,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#2e7d32",
  position: "absolute",
  bottom: 0,
  },
  textoRodape: {
    color: "#c8e6c9",
    fontSize: 14,
    fontWeight: "500",
  },
});
