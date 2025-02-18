import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, Image, ScrollView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cargos de T.I.</Text>
      <ScrollView>
        <Text style={styles.title}>Programador Júnior</Text>
          <Image style={styles.img} source={require('./assets/download.png')}/>
            <Text style={styles.text}>Normalmente, o programador júnior está no início de sua carreira e é responsável por tarefas mais simples e rotineiras, como escrever códigos, corrigir bugs, e realizar manutenção em sistemas já existentes. Eles geralmente têm supervisão constante e são guiados por programadores mais experientes.</Text>
        <Text style={styles.title}>Programador Pleno</Text>
          <Image style={styles.img} source={require('./assets/download1.png')}/>
            <Text style={styles.text}>O programador pleno já tem mais experiência, geralmente de 2 a 5 anos. Ele é capaz de lidar com tarefas mais complexas e possui maior autonomia. Além de programar, o pleno pode fazer sugestões de melhorias, lidar com problemas mais desafiadores e até mesmo começar a orientar programadores juniores.</Text>
        <Text style={styles.title}>Programador Sênior</Text>
          <Image style={styles.img} source={require('./assets/download2.jpg')}/>
            <Text style={styles.text}>O programador sênior tem ampla experiência, com mais de 5 anos na área. Ele não apenas escreve código, mas também é responsável por arquitetar soluções, tomar decisões técnicas importantes, orientar e liderar equipes de desenvolvimento. O sênior deve ter uma visão estratégica e conseguir solucionar problemas complexos de forma eficiente, muitas vezes participando da definição de processos e boas práticas dentro da equipe.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 12,
  },
  img: {
    height: 170,
    width: 'auto',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  text: {
    fontSize: 15
  },
});
