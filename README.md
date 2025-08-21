# Cross-Platform Tic-Tac-Toe Game

A clean, beginner-friendly Tic-Tac-Toe game built with HTML, CSS, and JavaScript that works on desktop and mobile devices.

## Features

- **Cross-Platform**: Works on desktop browsers and mobile devices
- **Human vs AI**: Play against an AI opponent that makes random moves
- **Clean UI**: Modern, responsive design with hover effects and animations
- **Game Logic**: Complete win/draw detection and game state management
- **Restart Functionality**: Easy game reset with visual feedback
- **Touch-Friendly**: Optimized for both mouse and touch interactions

## Game Rules

- 3x3 game board
- Human player uses "X" symbols
- AI player uses "O" symbols and chooses random empty cells
- Click/tap on empty cells to make moves
- Win by getting three in a row (horizontal, vertical, or diagonal)
- Game shows popups for win/loss/draw outcomes

## Technical Architecture

The project follows clean web development principles:

- **index.html**: Main HTML structure
- **style.css**: Modern CSS with responsive design and animations
- **script.js**: Game logic and user interaction handling
- **package.json**: Vite configuration for development

## Requirements

- Node.js 16 or higher
- Modern web browser

## How to Run

### Development Server

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── index.html          # Main HTML file
├── style.css           # Styles and animations
├── script.js           # Game logic and interactions
├── package.json        # Project configuration
└── README.md          # This file
```

## Features Highlights

- **Visual Feedback**: Hover effects and color-coded moves (green for human, red for AI)
- **Game State Management**: Proper handling of all game states and transitions
- **Error Prevention**: Prevents invalid moves and handles edge cases
- **User Experience**: Smooth animations and clear visual feedback
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Touch Optimized**: Special touch interactions for mobile devices

## Customization

The game can be easily customized:

- **AI Strategy**: Modify the `makeAIMove()` function for different AI behaviors
- **UI Theme**: Update colors and styles in `style.css`
- **Board Size**: Extend to larger boards by modifying the grid structure
- **Animations**: Adjust transition timings and effects in CSS

This implementation provides a solid foundation for learning web development and can be extended with additional features like difficulty levels, multiplayer modes, or enhanced AI strategies.
