import { useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const router = useRouter()


  const gotoScannerPage=()=>{
    router.push("/scan")
  }
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>fithub Code Scanner</Text>
        <Image
          source={require('../../assets/images/icon.png')} 
          style={styles.headerImage}
        />
      </View>

      {/* Scan Button */}
      <TouchableOpacity style={styles.scanButton} onPress={() => gotoScannerPage()}>
        <Text style={styles.scanButtonText}>Scan fithub Code</Text>
      </TouchableOpacity>

      {/* Info Section */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>How to Use:</Text>
        <Text style={styles.infoText}>1. Tap the "Scan fithub Code" button.</Text>
        <Text style={styles.infoText}>2. Align the fithub code in the frame.</Text>
        <Text style={styles.infoText}>3. Get instant results!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  headerImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  scanButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 24,
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoSection: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: '100%',
    maxWidth: 400,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
});
