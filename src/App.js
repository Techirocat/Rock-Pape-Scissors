import './App.css';
import rockImage from './images/rock.png';
import paperImage from './images/paper.png';
import scissorsImage from './images/scissors.png';
import { useState } from 'react';

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const options = [
    { name: 'Rock', image: rockImage },
    { name: 'Paper', image: paperImage },
    { name: 'Scissors', image: scissorsImage }
  ];

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      return 'It\'s a tie!';
    }
    if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      return 'You win!';
    }
    return 'Computer wins!';
  };

  const handleClick = (choice) => {
    setPlayerChoice(choice);
    
    // Escolha aleatória do computador
    const computerChoice = options[randomNumber(0, 2)].name;
    setComputerChoice(computerChoice);
    
    // Determinar o vencedor
    const gameResult = determineWinner(choice, computerChoice);
    alert(`Your choice: ${choice}\nComputer's choice: ${computerChoice}\n\nResult: ${gameResult}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='Title'>ROCK PAPER SCISSORS</div>
        <div className='Opcions'>
          {options.map((option) => (
            <div className='Opcion' key={option.name} onClick={() => handleClick(option.name)}>
              <img className='Images' src={option.image} alt={option.name} />
              <h3 className='text-opcion'>{option.name}</h3>
            </div>
          ))}
        </div>

        <h2>Choose your option</h2>
      </header>
    </div>
  );
}

export default App;
