
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Detail() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#eff6ff",
      }}
    >
      <Ionicons
        name="book-outline"
        size={64}
        color="#2563eb"
        style={{
          alignSelf: "center",
          marginBottom: 20,
        }}
      />

      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          color: "#1e3a8a",
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        Detail Buku
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: "#475569",
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        Selamat datang di halaman detail aplikasi BookList.
      </Text>

      <Pressable
        style={{
          backgroundColor: "#2563eb",
          padding: 14,
          borderRadius: 12,
          alignItems: "center",
        }}
        onPress={() => router.back()}
      >
        <Text
          style={{
            color: "#ffffff",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Kembali
        </Text>
      </Pressable>
    </View>
  );
}
