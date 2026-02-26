import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Theme } from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Categorias } from "./pages/Categorias";
import { CategoriaDetail } from "./pages/CategoriaDetail";
import { Sobre } from "./pages/Sobre";
import { Contato } from "./pages/Contato";
import { system } from "./theme";

function AppContent() {
  const { appearance } = useTheme();
  return (
    <Theme appearance={appearance} hasBackground>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/categorias/:slug" element={<CategoriaDetail />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Layout>
    </Theme>
  );
}

function App() {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
