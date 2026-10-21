
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Daftar Buku",
        }}
      />

      <Stack.Screen
        name="detail"
        options={{
          title: "Detail Buku",
        }}
      />

      <Stack.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
    </Stack>
  );
}
