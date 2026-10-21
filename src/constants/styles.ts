
import { StyleSheet } from "react-native";

export const colors = {
  background: "#EFF6FF",
  header: "#DBEAFE",
  card: "#FFFFFF",
  primary: "#2563EB",
  primaryDark: "#1D4ED8",
  title: "#1E3A8A",
  text: "#475569",
  border: "#DBEAFE",
  white: "#FFFFFF",
  dark: "#0F172A",
};

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: 16,
  },

  header: {
    backgroundColor: colors.header,
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
  },

  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  smallText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  title: {
    color: colors.title,
    fontSize: 26,
    fontWeight: "bold",
  },

  subtitle: {
    color: colors.text,
    marginTop: 8,
    fontSize: 14,
  },

  listContainer: {
    marginBottom: 20,
  },

  sectionTitle: {
    color: colors.dark,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },

  bookCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 16,
    gap: 14,
    marginBottom: 16,
  },

  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 14,
    backgroundColor: colors.header,
    alignItems: "center",
    justifyContent: "center",
  },

  bookInfo: {
    flex: 1,
    gap: 4,
  },

  bookTitle: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: "bold",
  },

  author: {
    color: colors.text,
    fontSize: 14,
  },

  category: {
    color: colors.text,
    fontSize: 13,
  },

  status: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    marginBottom: 10,
  },

  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },

  totalText: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 10,
    fontSize: 12,
    color: colors.text,
  },
});
