import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

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
function getBookStatus(year: number) {
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
        <Ionicons name="book-outline" size={32} color="#2563eb" />
      </View>

      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{book.title}</Text>

        <Text style={styles.author}>Penulis: {book.author}</Text>

        <Text style={styles.category}>
          {book.category} • {book.year}
        </Text>

        <Text style={styles.status}>{getBookStatus(book.year)}</Text>
      </View>
    </View>
  );
}

// HALAMAN UTAMA
export default function Index() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.smallText}>BOOKLIST</Text>

            <Text style={styles.title}>Daftar Buku</Text>
          </View>

          <Ionicons name="library-outline" size={42} color="#2563eb" />
        </View>

        <Text style={styles.subtitle}>
          Temukan dan lihat koleksi buku pilihanmu.
        </Text>
      </View>

      {/* DAFTAR BUKU */}
      <View style={styles.listContainer}>
        <Text style={styles.sectionTitle}>Koleksi Buku</Text>

        {/* LOOP MENGGUNAKAN MAP */}
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </View>

      {/* BUTTON */}
      <Pressable
        style={styles.button}
        onPress={() => alert("Fitur tambah buku")}
      >
        <Ionicons name="add-circle-outline" size={22} color="white" />

        <Text style={styles.buttonText}>Tambah Buku</Text>
      </Pressable>

      {/* INLINE STYLE */}
      <Text
        style={{
          textAlign: "center",
          marginTop: 15,
          fontSize: 12,
          color: "#64748b",
        }}
      >
        Total buku: {books.length}
      </Text>
    </View>
  );
}
