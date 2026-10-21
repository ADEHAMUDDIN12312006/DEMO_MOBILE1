import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#EFF6FF",
  padding: 16,
},

header: {
  backgroundColor: "#DBEAFE",
  padding: 20,
  borderRadius: 16,
  marginBottom: 20,
},

headerTop: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

smallText: {
  fontSize: 12,
  fontWeight: "bold",
  color: "#2563EB",
  letterSpacing: 2,
},

title: {
  fontSize: 28,
  fontWeight: "bold",
  color: "#1E3A8A",
},

subtitle: {
  color: "#475569",
  marginTop: 8,
  fontSize: 14,
},

listContainer: {
  marginTop: 8,
  gap: 12,
},

sectionTitle: {
  fontSize: 20,
  fontWeight: "bold",
  color: "#1E293B",
  marginBottom: 8,
},

bookCard: {
  backgroundColor: "#FFFFFF",
  padding: 16,
  borderRadius: 16,
  borderWidth: 1,
  borderColor: "#DBEAFE",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 10,
},

iconBox: {
  backgroundColor: "#DBEAFE",
  padding: 12,
  borderRadius: 14,
  marginRight: 14,
},

bookInfo: {
  flex: 1,
},

bookTitle: {
  fontSize: 16,
  fontWeight: "bold",
  color: "#0F172A",
},

author: {
  color: "#475569",
  marginTop: 4,
},

category: {
  color: "#64748B",
  marginTop: 4,
},

status: {
  color: "#2563EB",
  fontWeight: "bold",
  marginTop: 4,
},

button: {
  backgroundColor: "#2563EB",
  padding: 14,
  borderRadius: 12,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  marginTop: 10,
},

buttonText: {
  color: "#FFFFFF",
  fontSize: 14,
  fontWeight: "bold",
  marginLeft: 8,
},
});
