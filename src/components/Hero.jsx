import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative bg-white">
      <div className="absolute inset-0 -top-24 h-[680px] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <Spline
            scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-20 pb-6">
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            AI Automation for Modern Dental Clinics
          </h1>
          <p className="text-base sm:text-lg text-black/80">
            Velodent streamlines front-desk ops, patient onboarding, and recall systems using safe, compliant AI.
          </p>
        </div>

        <div className="mt-8 rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-white">
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/Nw478YoO3og?si=0Pcoc1145T6JDndl"
              title="Velodent Hero Video"
              frameBorder="0"
              allowFullScreen
              className="w-full h-[500px]"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="https://cal.com/velodent-ogbkfv/20min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors"
          >
            Book a 20-Minute Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
