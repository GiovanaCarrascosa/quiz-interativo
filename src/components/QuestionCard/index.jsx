// importamentos
import { useState, useEffect } from "react";
import styles from "./QuestionCard.module.css";
import data from "../../data/questions.js";

export default function QuestionCard() {

    // estado da pergunta atual começa com 0
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
    // acesso da pergunta
    const currentQuestion = data[currentQuestionIndex];
  
    const handleAnswer = (option) => {
      
      console.log(`Você clicou na opção: ${option}`);

      // para seguir com a proxima pergunta
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    };
    
    //retorna a pergunta atual
    return (
        <div className={styles.cardPrincipal}>
       
          {currentQuestion && (

            <div className={styles.questaoContainer}>

              {/* pega o numero da pergunta pelo id */}
              <h1 className={styles.numeroPergunta}>{`Pergunta ${currentQuestion.id}`}</h1>
              {/* pega a questao */}
              <h2 className={styles.questao}>{currentQuestion.question}</h2>

              {/* div das opcoes de resposta */}
              <div className={styles.botoes}>
                    {currentQuestion.options.map((option, index) => (
                        
                        <button
                            key={index}
                            className={styles.opcaoBotao}
                            onClick={() => handleAnswer(option)}
                        >
                            {option}
                        </button>
                    ))}
              </div>

            </div>
          )}
        </div>
      );
    }