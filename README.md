# Rock Paper Scissors Game

This is a simple **Rock, Paper, Scissors** game built with React. The player selects one option (Rock, Paper, or Scissors), and the computer randomly selects another. The result is then displayed through an alert, showing who won the round.

## Features
- Select between Rock, Paper, and Scissors.
- The computer randomly picks its choice.
- An alert shows the player’s choice, the computer’s choice, and the game result (Player wins, Computer wins, or Tie).

## How to Run the Project

### Prerequisites
Make sure you have the following installed:
- Node.js (version 12 or higher)
- npm (or yarn)

### Installation
1. Clone the repository:
   ```bash
   git clone ...
   ```
2. Navigate into the project folder:
   ```bash
   cd rock-paper-scissors
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or if you're using yarn:
   ```bash
   yarn install
   ```

### Running the Project
1. Start the development server:
   ```bash
   npm start
   ```
   or with yarn:
   ```bash
   yarn start
   ```

2. Open your browser and go to `http://localhost:3000` to see the game in action.

### Project Structure
- **`App.js`**: The main game logic is implemented here. It handles the player's input, the computer's random choice, and the result calculation.
- **`App.css`**: Contains the styling for the game.
- **Images**:
  - `rock.png`: Image representing "Rock".
  - `paper.png`: Image representing "Paper".
  - `scissors.png`: Image representing "Scissors".

### Game Logic
1. The player clicks on one of the options (Rock, Paper, or Scissors).
2. The computer randomly picks one of the options.
3. The result is determined based on the rules:
   - Rock beats Scissors.
   - Paper beats Rock.
   - Scissors beat Paper.
   - If both choices are the same, it's a tie.
4. An alert shows the player's choice, the computer's choice, and the result of the game.

## Available Scripts
In the project directory, you can run:

- **`npm start`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production to the `build` folder.

## Future Improvements
- Add animations for transitions between player and computer choices.
- Store and display a scoreboard to track wins, losses, and ties.
- Improve UI for a more engaging user experience.

## Contributing
Feel free to submit issues or pull requests if you would like to contribute to this project.
