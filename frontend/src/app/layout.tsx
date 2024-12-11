import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "@/config/theme";
import Box from "@mui/material/Box";

import type { Metadata } from "next";
import Header from "../components/header";
export const metadata: Metadata = {
  title: "MDS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <body>
          <main>
            <Header />
            <Box sx={{ mb: "0.5rem" }} />
            {children}
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}
