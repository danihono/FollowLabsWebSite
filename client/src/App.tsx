import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Solucoes from "./pages/Solucoes";
import Laboratorio from "./pages/Laboratorio";
import Cases from "./pages/Cases";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/ui/WhatsAppButton";


function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/solucoes" component={Solucoes} />
        <Route path="/laboratorio" component={Laboratorio} />
        <Route path="/cases" component={Cases} />
        <Route path="/blog" component={Blog} />
        <Route path="/contato" component={Contato} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
         <WhatsAppButton />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
