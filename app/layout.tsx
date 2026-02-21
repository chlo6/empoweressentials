// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Empower Essentials",
  description: "Student-led nonprofit organization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
