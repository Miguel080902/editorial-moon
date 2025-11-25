import React, { useState } from 'react';

const Convocatoria = () => {
  const [activeTab, setActiveTab] = useState('requisitos');

  const requisitos = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      text: 'Novelas, relatos o proyectos narrativos dirigidos a público juvenil y joven adulto'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      text: 'Obras originales, inéditas y escritas en español'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      text: 'Una sinopsis breve (máximo 1 página)'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      text: 'Los primeros 4 capítulos de tu obra (incluye prólogo si existe)'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      text: 'Si es poemario, envía entre 10 y 15 poemas'
    }
  ];

  const formato = [
    { label: 'Fuente', value: 'Arial o Times New Roman' },
    { label: 'Tamaño', value: '12 puntos' },
    { label: 'Interlineado', value: '1.5' },
    { label: 'Márgenes', value: 'Normales' },
    { label: 'Formato', value: 'PDF o Word' }
  ];

  return (
    <section id="convocatoria" className="py-20 bg-gradient-to-br from-moon-dark via-moon-blue to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold mr-4">
              Convocatoria Abierta
            </h2>
            <span className="bg-yellow-400 text-moon-dark px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              ¡ACTIVA!
            </span>
          </div>
          <div className="w-24 h-1 bg-white mx-auto mb-8 opacity-50"></div>

          {/* Partnership Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-medium mr-2">En colaboración con</span>
            <span className="font-display text-2xl font-bold gradient-text">Kryon</span>
          </div>

          <p className="text-xl max-w-3xl mx-auto opacity-90">
            ¿Tienes una historia que contar? En Editorial Moon buscamos voces nuevas
            y frescas que quieran compartir sus mundos con los lectores.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-1">
            <button
              onClick={() => setActiveTab('requisitos')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'requisitos'
                  ? 'bg-white text-moon-dark'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Requisitos
            </button>
            <button
              onClick={() => setActiveTab('formato')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'formato'
                  ? 'bg-white text-moon-dark'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Formato
            </button>
            <button
              onClick={() => setActiveTab('importante')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'importante'
                  ? 'bg-white text-moon-dark'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Importante
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'requisitos' && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-display font-bold mb-6 text-center">
                ¿Qué necesitas enviar?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {requisitos.map((req, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-start space-x-3 card-hover"
                  >
                    <div className="flex-shrink-0 text-yellow-300">{req.icon}</div>
                    <p className="text-sm">{req.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'formato' && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-display font-bold mb-6 text-center">
                Requisitos de Formato
              </h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                {formato.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-white/20 last:border-0">
                    <span className="font-medium">{item.label}:</span>
                    <span className="text-yellow-300 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'importante' && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-display font-bold mb-6 text-center">
                Información Importante
              </h3>
              <div className="space-y-4">
                <div className="bg-green-500/20 border border-green-400 rounded-xl p-6">
                  <div className="flex items-center mb-2">
                    <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="font-bold">Publicación Progresiva</h4>
                  </div>
                  <p className="text-sm opacity-90">
                    Publicamos primero en formato digital. Según la respuesta de los lectores,
                    la obra pasará al formato físico, permitiendo que tu historia tenga dos tipos de formatos.
                  </p>
                </div>

                <div className="bg-blue-500/20 border border-blue-400 rounded-xl p-6">
                  <div className="flex items-center mb-2">
                    <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="font-bold">Tiempo de Respuesta</h4>
                  </div>
                  <p className="text-sm opacity-90">
                    El proceso de revisión puede tomar entre 1 y 2 meses,
                    dependiendo del contenido y la extensión de los capítulos enviados.
                  </p>
                </div>

                <div className="bg-yellow-500/20 border border-yellow-400 rounded-xl p-6">
                  <div className="flex items-center mb-2">
                    <svg className="w-6 h-6 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="font-bold text-yellow-300">100% Gratuito</h4>
                  </div>
                  <p className="text-sm opacity-90">
                    En todo el proceso de publicación, el escritor no pagará nada.
                    ¡La publicación es completamente gratuita!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://mail.google.com/mail/?view=cm&to=mooneditorial.oficial@gmail.com&su=Envío de Manuscrito"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-moon-dark px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Enviar Manuscrito
          </a>
          <p className="mt-4 text-sm opacity-75">
            mooneditorial.oficial@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Convocatoria;