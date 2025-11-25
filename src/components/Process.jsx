import React, { useEffect, useRef, useState } from 'react';

const Process = () => {
  const [isVisible, setIsVisible] = useState([false, false, false]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          }
        },
        { threshold: 0.3 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (sectionRefs.current[index]) {
          observer.unobserve(sectionRefs.current[index]);
        }
      });
    };
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Lee las Bases',
      description: 'Antes de enviar tu manuscrito, lee con atención nuestro PDF con los puntos más importantes que debes tener en cuenta.',
      buttonText: 'Descargar PDF',
      buttonLink: '/convocatoria.pdf',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'bg-blue-500'
    },
    {
      number: '02',
      title: 'Envía tu Manuscrito',
      description: 'Si todo está claro, envíanos tu trabajo al correo oficial: mooneditorial.oficial@gmail.com siguiendo el formato indicado.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'bg-purple-500'
    },
    {
      number: '03',
      title: 'Nuestra Respuesta',
      description: 'Recibirás dos correos: un agradecimiento inicial y luego la evaluación final con nuestra decisión.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-1.414 0l-2.414-2.414a1 1 0 00-.707-.293H8" />
        </svg>
      ),
      color: 'bg-green-500'
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-gradient-to-b from-moon-dark to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Proceso de Envío
          </h2>
          <div className="w-24 h-1 bg-moon-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tres simples pasos para que tu historia llegue a nosotros
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Line connector */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-600"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => sectionRefs.current[index] = el}
              className={`flex flex-col md:flex-row items-center mb-12 transition-all duration-1000 transform ${
                isVisible[index]
                  ? 'translate-x-0 opacity-100'
                  : index % 2 === 0
                    ? '-translate-x-20 opacity-0'
                    : 'translate-x-20 opacity-0'
              } ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                  <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center text-white mr-3 ${index % 2 === 0 ? 'md:order-2 md:mr-0 md:ml-3' : ''}`}>
                      {step.icon}
                    </div>
                    <span className="text-4xl font-bold text-gray-600">{step.number}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                  {step.buttonText && (
                    <a
                      href={step.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 px-4 py-2 bg-moon-blue text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {step.buttonText}
                    </a>
                  )}
                </div>
              </div>

              {/* Center dot */}
              <div className="hidden md:flex w-2/12 justify-center">
                <div className={`${step.color} w-4 h-4 rounded-full ring-4 ring-gray-800 z-10 ${isVisible[index] ? 'animate-pulse' : ''}`}></div>
              </div>

              {/* Spacer */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-moon-blue to-blue-600 rounded-2xl text-white shadow-2xl">
          <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-2xl font-light italic mb-2">
            "Si no es ahora, será después. Pero nunca dejes de intentarlo"
          </p>
          <p className="text-sm opacity-75">- Editorial Moon</p>
        </div>
      </div>
    </section>
  );
};

export default Process;