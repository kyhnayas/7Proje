import { lazy, Suspense } from "react";
import { GlobalStyle } from "./globalStyles";
// let's import all the components
// we will use lazy to import all components

const Home = lazy(() => import("./Pages/Home") );
const Header = lazy(() => import("./components/Header") );
const Footer = lazy(() => import("./components/Footer") );
const ScrollToTop = lazy(() => import("./components/ScrollToTop") );

function App() {
  return <>
  
  <Suspense fallback={null}>
  <GlobalStyle />
  <Header />
  <Home />
  <Footer />
  <ScrollToTop />
  </Suspense>
  
  </>;
}

export default App;
