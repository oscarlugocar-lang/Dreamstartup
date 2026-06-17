import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Bienvenido,</Text>
        <Text style={styles.name}>Oscar</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Proyectos</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>8</Text>
          <Text style={styles.statLabel}>Clientes</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>€3.2k</Text>
          <Text style={styles.statLabel}>Ingresos</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Actividad Reciente</Text>
        <View style={styles.activityItem}>
          <Text style={styles.activityDot}>●</Text>
          <View>
            <Text style={styles.activityTitle}>Deploy automático activado</Text>
            <Text style={styles.activityTime}>Hoy</Text>
          </View>
        </View>
        <View style={styles.activityItem}>
          <Text style={[styles.activityDot, { color: '#8b5cf6' }]}>●</Text>
          <View>
            <Text style={styles.activityTitle}>Stripe integrado</Text>
            <Text style={styles.activityTime}>Ayer</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0f', padding: 20 },
  header: { marginTop: 20, marginBottom: 24 },
  greeting: { fontSize: 16, color: '#94a3b8' },
  name: { fontSize: 28, fontWeight: '800', color: '#f8fafc' },
  statsRow: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  statCard: {
    flex: 1, backgroundColor: '#1a1a2e', borderRadius: 12,
    padding: 16, borderWidth: 1, borderColor: '#1e293b',
  },
  statValue: { fontSize: 22, fontWeight: '700', color: '#a78bfa' },
  statLabel: { fontSize: 12, color: '#64748b', marginTop: 4 },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#f8fafc', marginBottom: 12 },
  activityItem: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#1e293b' },
  activityDot: { fontSize: 10, color: '#22c55e' },
  activityTitle: { fontSize: 14, color: '#f8fafc', fontWeight: '500' },
  activityTime: { fontSize: 12, color: '#64748b', marginTop: 2 },
});
