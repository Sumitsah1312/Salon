import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { FloatingWhatsApp, ScrollToTop } from "./components/common/FloatingActions";
import AIChatbot from "./components/chat/AIChatbot";

// Lazy Pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Academy = lazy(() => import("./pages/Academy"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Contact = lazy(() => import("./pages/Contact"));

const ScrollToPageTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>LOONIX UNISEX SALON & ACADEMY | Best Salon in Sant Nagar, Burari</title>
          <meta name="description" content="LOONIX UNISEX SALON & ACADEMY - Delhi's premier unisex salon for professional grooming and barber training academy. Book your elite haircut today!" />
          <meta name="keywords" content="salon, barber shop, academy, unisex salon, hair training, delhi salon, burari salon, loonix" />
        </Helmet>

        <ScrollToPageTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center bg-secondary">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/academy" element={<Academy />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
          <FloatingWhatsApp />
          <AIChatbot />
          <ScrollToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
