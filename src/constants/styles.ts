import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eff6ff",
    padding: 20,
    paddingTop: 60,
  },

  header: {
    marginBottom: 25,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  smallText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2563eb",
    letterSpacing: 2,
    marginBottom: 5,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0f172a",
  },

  subtitle: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 10,
    lineHeight: 20,
  },

  listContainer: {
    gap: 12,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 5,
  },

  bookCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#dbeafe",
  },

  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 12,
    backgroundColor: "#dbeafe",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  bookInfo: {
    flex: 1,
  },

  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 4,
  },

  author: {
    fontSize: 13,
    color: "#475569",
    marginBottom: 3,
  },

  category: {
    fontSize: 12,
    color: "#64748b",
  },

  status: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2563eb",
    marginTop: 5,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
