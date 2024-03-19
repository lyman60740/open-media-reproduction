import React, { useEffect } from 'react';
import '../styles/global.scss';
import type { AppProps } from 'next/app';
import Nav from '../components/Nav/nav';


export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
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
  }, []);

  return (
    <>
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
