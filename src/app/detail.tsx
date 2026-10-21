
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { colors } from "../constants/styles";

export default function Detail() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: colors.background,
      }}
    >
      <Ionicons
        name="book-outline"
        size={64}
        color={colors.primary}
        style={{
          alignSelf: "center",
          marginBottom: 20,
        }}
      />

      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          color: colors.title,
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        Detail Buku
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: colors.text,
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        Selamat datang di halaman detail aplikasi BookList.
      </Text>

      <Pressable
        onPress={() => router.back()}
        style={{
          backgroundColor: colors.primary,
          padding: 14,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: colors.white,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Kembali
        </Text>
      </Pressable>
    </View>
  );
}
