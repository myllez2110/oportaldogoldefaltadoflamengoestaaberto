import React, { useState } from 'react';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'main' | 'portal'>('main');

  if (currentScreen === 'portal') {
    return (
      <div className="min-h-screen bg-white relative">
        <button 
          onClick={() => setCurrentScreen('main')}
          className="absolute top-4 right-4 text-black hover:text-gray-800 transition-colors"
        >
          Voltar
        </button>
        <div className="min-h-screen flex items-center justify-center px-8">
          <div className="max-w-4xl text-center">
            <p className="text-2xl text-black leading-relaxed">
              Cada vez mais raros, os gols em cobranças de falta quando saem, geram ciclos de resultados ruins para o time.
            </p>
            <br />
            <p className="text-2xl text-black leading-relaxed">
              O primeiro gol a dar início a assombração foi marcado por Andreas Pereira, contra o Juventude, pelo Campeonato Brasileiro - a partida ocorreu em outubro de 2021. Quis o destino que na final da Libertadores, o próprio Andreas protagonizasse o fatídico lance que deu o título continental ao Palmeiras.
            </p>
            <br />
            <p className="text-2xl text-black leading-relaxed">
              A última abertura de "portal da maldição" foi recente e teve efeitos quase imediatos, gol de falta do De La Cruz.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative">
      <button 
        onClick={() => setCurrentScreen('portal')}
        className="absolute top-4 right-4 text-black hover:text-gray-800 transition-colors"
      >
        O que é o portal do gol de falta do Flamengo?
      </button>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-[12rem] font-bold text-black tracking-wider">
          SIM
        </h1>
      </div>
    </div>
  );
}

export default App;