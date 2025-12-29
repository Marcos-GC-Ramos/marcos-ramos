"use client";

import { useEffect, useState } from "react";
import InfoFixas from './portfolio/info-fixas';
import Sobre from './portfolio/sobre';
import Experiencia from './portfolio/experiencia';
import Skills from './portfolio/skills';
import Footer from './portfolio/footer';
import Loader from './components/loaderAnimation';

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const temp_loading = setTimeout(() => setLoading(false), 1500);
    const temp_hidden_loading = setTimeout(() => setShowLoader(false), 3000);

    return () => {
      clearTimeout(temp_loading);
      clearTimeout(temp_hidden_loading);
    };

  }, []);

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <> 
      {/* Renderiza só enquanto for preciso */}
      {showLoader && (
        <div className={loading ? "" : "loader-hidden"}>
          <Loader />
        </div>
      )}
      
      <div className={loading ? "hidden-content" : "show-content mx-auto max-w-screen-xl font-sans px-4 py-12 md:px-8 lg:py-0"}>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <InfoFixas/>

          <main className='pt-20 lg:w-[52%] lg:py-24 scroll-smooth'>
            <Sobre/>
            <Skills />
            <Experiencia/>
            <Footer />
            <input 
              type="file" 
              accept="image/*" 
              capture="environment"
              className="bg-white"
            />
          </main>
        </div>
      </div>
    </>
  );
}
