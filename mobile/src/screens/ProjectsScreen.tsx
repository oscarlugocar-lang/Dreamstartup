import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const PROJECTS = [
  { id: '1', name: 'Video Corporativo', client: 'TechCorp', status: 'Completado' },
  { id: '2', name: 'Intro Animada', client: 'StreamMax', status: 'En curso' },
  { id: '3', name: 'Reels Instagram', client: 'FitLife', status: 'Revisión' },
];

export default function ProjectsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={PROJECTS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.projectName}>{item.name}</Text>
            <Text style={styles.clientName}>{item.client}</Text>
            <View style={[styles.statusBadge, {
              backgroundColor: item.status === 'Completado' ? '#22c55e22' : '#f59e0b22',
              borderColor: item.status === 'Completado' ? '#22c55e' : '#f59e0b',
            }]}>
              <Text style={[styles.statusText, {
                color: item.status === 'Completado' ? '#22c55e' : '#f59e0b',
              }]}>{item.status}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0f', padding: 20 },
  card: {
    backgroundColor: '#1a1a2e', borderRadius: 12, padding: 16,
    borderWidth: 1, borderColor: '#1e293b', marginBottom: 12,
  },
  projectName: { fontSize: 16, fontWeight: '600', color: '#f8fafc' },
  clientName: { fontSize: 13, color: '#94a3b8', marginTop: 4 },
  statusBadge: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 12, borderWidth: 1, marginTop: 8 },
  statusText: { fontSize: 11, fontWeight: '600' },
});
