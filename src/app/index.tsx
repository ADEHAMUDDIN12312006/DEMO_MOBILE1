
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";

import { styles } from "../constants/styles";

// TYPE / INTERFACE
interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  year: number;
}

// ARRAY OF OBJECTS
const books: Book[] = [
  {
    id: 1,
    title: "Pemrograman Mobile",
    author: "Andi Pratama",
    category: "Teknologi",
    year: 2025,
  },
  {
    id: 2,
    title: "Belajar JavaScript",
    author: "Budi Santoso",
    category: "Pemrograman",
    year: 2024,
  },
  {
    id: 3,
    title: "Dasar-Dasar UI/UX",
    author: "Citra Lestari",
    category: "Desain",
    year: 2025,
  },
];

// CUSTOM FUNCTION
function getBookStatus(year: number): string {
  if (year >= 2025) {
    return "Terbaru";
  }

  return "Tersedia";
}

// KOMPONEN CARD BUKU
function BookCard({ book }: { book: Book }) {
  return (
    <View style={styles.bookCard}>
      <View style={styles.iconBox}>
        <Ionicons
          name="book-outline"
          size={32}
          color="#2563eb"
        />
      </View>

      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{book.title}</Text>

        <Text style={styles.author}>
          Penulis: {book.author}
        </Text>

        <Text style={styles.category}>
          {book.category} • {book.year}
        </Text>

        <Text style={styles.status}>
          {getBookStatus(book.year)}
        </Text>
      </View>
    </View>
  );
}

// HALAMAN UTAMA
export default function Index() {
  const router = useRouter();

  // USESTATE
  const [selectedCount, setSelectedCount] = useState(0);

  // USEEFFECT
  useEffect(() => {
    console.log("Jumlah pilihan berubah:", selectedCount);
  }, [selectedCount]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
      showsVerticalScrollIndicator={true}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.smallText}>BOOKLIST</Text>
            <Text style={styles.title}>Daftar Buku</Text>
          </View>

          <Ionicons
            name="library-outline"
            size={42}
            color="#2563eb"
          />
        </View>

        <Text style={styles.subtitle}>
          Temukan dan lihat koleksi buku pilihanmu.
        </Text>
      </View>

      {/* DAFTAR BUKU */}
      <View style={styles.listContainer}>
        <Text style={styles.sectionTitle}>Koleksi Buku</Text>

        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </View>

      {/* TOMBOL TAMBAH BUKU */}
      <Pressable
        style={styles.button}
        onPress={() =>
          Alert.alert(
            "Informasi",
            "Fitur tambah buku belum tersedia."
          )
        }
      >
        <Ionicons
          name="add-circle-outline"
          size={22}
          color="#ffffff"
        />
        <Text style={styles.buttonText}>Tambah Buku</Text>
      </Pressable>

      {/* USESTATE */}
      <Pressable
        style={styles.button}
        onPress={() =>
          setSelectedCount((previous) => previous + 1)
        }
      >
        <Text style={styles.buttonText}>Pilih Buku (+1)</Text>
      </Pressable>

      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: 14,
          color: "#475569",
        }}
      >
        Jumlah pilihan: {selectedCount}
      </Text>

      {/* ROUTER.PUSH */}
      <Pressable
        style={styles.button}
        onPress={() => router.push("/detail")}
      >
        <Text style={styles.buttonText}>Buka Detail Buku</Text>
      </Pressable>

      {/* ROUTER.CANGO BACK */}
      <Pressable
        style={styles.button}
        onPress={() => {
          const canGoBack = router.canGoBack();

          Alert.alert(
            "Cek Navigasi",
            canGoBack
              ? "Halaman sebelumnya tersedia."
              : "Tidak ada halaman sebelumnya."
          );

          console.log("router.canGoBack():", canGoBack);
        }}
      >
        <Text style={styles.buttonText}>
          Cek Navigasi Kembali
        </Text>
      </Pressable>

      {/* INLINE STYLE */}
      <Text
        style={{
          textAlign: "center",
          marginTop: 15,
          marginBottom: 10,
          fontSize: 12,
          color: "#475569",
        }}
      >
        Total buku: {books.length}
      </Text>
    </ScrollView>
  );
}
