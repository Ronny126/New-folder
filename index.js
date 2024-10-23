import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    const [playerHealth, setPlayerHealth] = React.useState(100);
    const [enemyHealth, setEnemyHealth] = React.useState(100);

    const attack = () => {
        const playerDamage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20
        const enemyDamage = Math.floor(Math.random() * 20) + 1;

        setEnemyHealth((prev) => Math.max(prev - playerDamage, 0));
        setPlayerHealth((prev) => Math.max(prev - enemyDamage, 0));
    };

    return (
        <div id="game">
            <h1>Combat Game</h1>
            <p>Player Health: {playerHealth}</p>
            <p>Enemy Health: {enemyHealth}</p>
            <button onClick={attack} disabled={playerHealth <= 0 || enemyHealth <= 0}>
                Attack
            </button>
            {playerHealth <= 0 && <h2>You Lost!</h2>}
            {enemyHealth <= 0 && <h2>You Won!</h2>}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);