import React, { useEffect, useState } from 'react';
import '../styles/global.scss';
import type { AppProps } from 'next/app';
import Nav from '../components/Nav/nav';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';


export default function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    // Importation dynamique de GSAP et ses plugins côté client
    import("gsap/dist/gsap").then(gsapModule => {
      const gsap = gsapModule.gsap;
      Promise.all([
        import("gsap/dist/ScrollTrigger").then(module => module.ScrollTrigger),
        import("gsap/dist/ScrollSmoother").then(module => module.ScrollSmoother),
      ]).then(([ScrollTrigger, ScrollSmoother]) => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.2,
          effects: true,
          smoothTouch: 0.1,
        });
      });
    });

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
     {isLoading && <LoadingScreen />}

      <Nav />
    
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}
