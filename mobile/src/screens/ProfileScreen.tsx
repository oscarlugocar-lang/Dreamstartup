import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>OL</Text>
      </View>
      <Text style={styles.name}>Oscar Lugo</Text>
      <Text style={styles.email}>latamdreamscape@gmail.com</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Plan Actual</Text>
        <Text style={styles.planName}>Dreamscape Profesional</Text>
        <Text style={styles.planPrice}>€799/mes</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Estadísticas</Text>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Proyectos este mes</Text>
          <Text style={styles.statValue}>12</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Videos entregados</Text>
          <Text style={styles.statValue}>8</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0f', padding: 20, alignItems: 'center' },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#8b5cf6', justifyContent: 'center', alignItems: 'center', marginTop: 40, marginBottom: 16 },
  avatarText: { fontSize: 28, fontWeight: '800', color: '#fff' },
  name: { fontSize: 22, fontWeight: '700', color: '#f8fafc' },
  email: { fontSize: 14, color: '#94a3b8', marginBottom: 32 },
  section: { width: '100%', backgroundColor: '#1a1a2e', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: '#1e293b', marginBottom: 16 },
  sectionTitle: { fontSize: 12, fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 },
  planName: { fontSize: 18, fontWeight: '600', color: '#f8fafc' },
  planPrice: { fontSize: 14, color: '#a78bfa', marginTop: 4 },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#1e293b' },
  statLabel: { fontSize: 14, color: '#94a3b8' },
  statValue: { fontSize: 14, fontWeight: '600', color: '#f8fafc' },
});
