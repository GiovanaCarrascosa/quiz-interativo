// importação do css do header
import styles from './Header.module.css';
import React, { useState, useEffect } from 'react';

// função do header
function Header( { currentQuestion }) {

  // cria uma variável 'segundos' e uma função pra mudar ela, começando em 0
  const [segundos, setSegundos] = useState(0);

  // cria uma variável 'minutos' e uma função pra mudar ela, também começando em 0
  const [minutos, setMinutos] = useState(0);

  useEffect(() => {

    // executa algo a cada 1000 milissegundos
    const intervalo = setInterval(() => {

      // atualiza o estado dos segundos
      setSegundos(segundosAnteriores => {

        // se os segundos chegam em 59
        if (segundosAnteriores === 59) {

          // a gente atualiza os minutos, somando mais um
          setMinutos(minutosAnteriores => minutosAnteriores + 1);

          // e reseta os segundos pra 0
          return 0;

        } else {

          // se não, a gente soma mais um segundo
          return segundosAnteriores + 1;
        }
      });
    }, 1000);

    return () => clearInterval(intervalo);

    // o array vazio faz com que esse efeito rode só uma vez, quando a página é carregada
  }, []); 

  // formata os segundos pra ter sempre 2 dígitos
  const segundosFormatados = String(segundos).padStart(2, '0');

  // faz a mesma coisa pra formatar os minutos
  const minutosFormatados = String(minutos).padStart(2, '0');
  
  return (
  
    <header className={styles.appHeader}>

      {/* titulo do header */}
      <h1 className={styles.headerTitle}>Quiz Interativo! 🧠</h1>

      {/* paragrafo normal com um aviso de questões */}
      
                                   {/* tentei fazer essaparte mas deu tudo errado */}
      <h3 className={styles.paragrafo}>Questão 1 de 10</h3>

      {/* aqui ele chama os segundos e minutos formatados */}
      <h2 className={styles.tempo}>Tempo: {minutosFormatados}:{segundosFormatados}</h2>

    </header>
  );
}

export default Header;
