import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const sections = [
    {
      title: 'Nuestra Misión',
      content: 'Dar a conocer nuevas voces. Buscamos inspirar a quienes escriben y también a quienes leen, especialmente a esos escritores que alguna vez tuvieron miedo de intentarlo.',
      icon: (
        <svg className="w-12 h-12 text-moon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Nuestra Visión',
      content: 'Convertirnos en una editorial diferente, que brinde oportunidades a escritores con sueños de crecer. Soñamos con construir una comunidad donde las historias se compartan, se escuchen y brillen.',
      icon: (
        <svg className="w-12 h-12 text-moon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: 'Nuestro Objetivo',
      content: 'Llegar a cada escritor que sueña con ver sus historias hechas realidad. Queremos acompañarlos en cada paso, brindándoles un espacio donde puedan crecer, aprender y creer en sí mismos.',
      icon: (
        <svg className="w-12 h-12 text-moon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-moon-dark mb-4">
            ¿Quiénes Somos?
          </h2>
          <div className="w-24 h-1 bg-moon-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Somos una <span className="font-semibold text-moon-blue">editorial independiente y colaborativa</span>,
            creada con el propósito de dar voz a nuevas historias y acompañar a escritores.
            Nuestro enfoque es <span className="font-semibold">digital y progresivo</span>: publicamos primero en formato
            digital para llegar a más lectores y según la respuesta del público,
            llevamos las obras al formato físico.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg card-hover transition-all duration-1000 transform ${
                cardsVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: cardsVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className="mb-4">{section.icon}</div>
              <h3 className="font-display text-2xl font-bold text-moon-dark mb-4">
                {section.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div
          ref={statsRef}
          className={`bg-moon-dark rounded-2xl p-12 text-white transition-all duration-1000 transform ${
            statsVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className={`transition-all duration-700 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Digital First</div>
            </div>
            <div className={`transition-all duration-700 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-sm opacity-90">Géneros Literarios</div>
            </div>
            <div className={`transition-all duration-700 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              <div className="text-4xl font-bold mb-2">S/.0</div>
              <div className="text-sm opacity-90">Costo para Escritores</div>
            </div>
            <div className={`transition-all duration-700 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.739-8z"/>
              </svg>
              <div className="text-sm opacity-90">Oportunidades</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;