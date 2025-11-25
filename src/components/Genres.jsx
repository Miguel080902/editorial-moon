import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import romanceImg from '../assets/romance.webp';
import juvenilImg from '../assets/juvenil.webp';
import fantasiaImg from '../assets/fantasia.webp';
import poesiaImg from '../assets/poesia.webp';
import blglImg from '../assets/blgl.webp';

const Genres = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  const genres = [
    {
      name: 'Romance',
      description: 'Historias de amor que emocionan y conectan corazones',
      image: romanceImg,
      gradient: 'from-pink-400 to-red-400'
    },
    {
      name: 'Literatura Juvenil',
      description: 'Narrativas que capturan la esencia de la juventud y sus desafíos',
      image: juvenilImg,
      gradient: 'from-purple-400 to-indigo-400'
    },
    {
      name: 'Fantasía',
      description: 'Mundos mágicos donde todo es posible',
      image: fantasiaImg,
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      name: 'Poesía',
      description: 'Versos que tocan el alma y expresan lo inefable',
      image: poesiaImg,
      gradient: 'from-yellow-400 to-orange-400'
    },
    {
      name: 'BL/GL',
      description: 'Historias de amor diversas e inclusivas',
      image: blglImg,
      gradient: 'from-green-400 to-teal-400'
    }
  ];

  return (
    <section id="generos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-moon-dark mb-4">
            Géneros que Publicamos
          </h2>
          <div className="w-24 h-1 bg-moon-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Buscamos historias que inspiren, conmuevan y dejen una huella en quienes las lean.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {genres.map((genre, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-xl card-hover cursor-pointer transition-all duration-1000 transform ${
                cardsVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={genre.image}
                  alt={genre.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${genre.gradient} rounded-full opacity-75 animate-pulse`}></div>
                <h3 className="font-display text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {genre.name}
                </h3>
                <p className="text-sm opacity-90 transform transition-all duration-300 group-hover:opacity-100">
                  {genre.description}
                </p>
              </div>
            </div>
          ))}

          {/* Call to action card */}
          <div
            className={`bg-gradient-to-br from-moon-blue to-blue-600 rounded-2xl shadow-xl p-8 flex flex-col justify-center text-white text-center transition-all duration-1000 transform ${
              cardsVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
            style={{
              transitionDelay: cardsVisible ? `${genres.length * 150}ms` : '0ms'
            }}
          >
            <svg className="w-16 h-16 mx-auto mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="font-display text-2xl font-bold mb-4">
              ¿Tu género aquí?
            </h3>
            <p className="mb-6 opacity-90">
              Si tu historia encaja en alguno de estos géneros, queremos leerla
            </p>
            <a href="#convocatoria" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-moon-blue transition-all duration-300 mx-auto">
              Envía tu Obra
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Genres;