import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Michael Williams</Text>
      <Text>
        Hello everyone, I'm Michael Williams. I'm a web developer and indie game developer that likes anime and video games. I've been wanting to make games since 2020 and I've been using a software called Bitsy, which is a small game engine and it's been useful for me. My goal is to learn Pico 8 and Godot, JavaScript, Linux, and hacking.
        My favorite games are Hitman, Assassin's Creed, Yakuza, League of Legends, and Ninja Gaiden 3. My least favorite games are Brawlhalla (I've never played it) and Super Smash Bros. (it's too hard to play).
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});