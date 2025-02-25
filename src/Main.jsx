import { useState } from 'react';
import './index.css';

const Main = () => {
  const [userName, setUserName] = useState('');
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [currentLevel, setCurrentLevel] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [unlockedLevels, setUnlockedLevels] = useState([1]);

  const levels = [
    {
      id: 1,
      title: 'Level 1',
      description: 'This is level 1',
      question: 'What is 2 + 2?',
      options: ['3', '4', '5'],
      correctAnswer: '4',
      winnerMessage: 'Correct! You passed Level 1.',
      loserMessage: 'Incorrect! Try again.',
      image: 'level1.jpg',
    },
    // Add more levels here
  ];

  const handleRegistration = () => {
    if (userName.trim()) {
      setCurrentScreen('levels');
    }
  };

  const startLevel = (levelId) => {
    if (unlockedLevels.includes(levelId)) {
      setCurrentLevel(levelId);
      setUserAnswer('');
      setCurrentScreen('quiz');
    }
  };

  const handleAnswerSelect = (selectedOption) => {
    setUserAnswer(selectedOption);
  };

  const finishQuiz = () => {
    setCurrentScreen('results');
  };

  const completeLevel = () => {
    const currentLevelData = levels.find(level => level.id === currentLevel);
    const isCorrect = userAnswer === currentLevelData.correctAnswer;

    if (isCorrect && currentLevel < 20) {
      if (!unlockedLevels.includes(currentLevel + 1)) {
        setUnlockedLevels([...unlockedLevels, currentLevel + 1]);
      }
    }

    setCurrentScreen('levels');
  };

  const renderWelcomeScreen = () => (
    <div className="welcome-screen">
      <h1>بەخێربێیت بۆ تاقیکردنەوەی گوناح</h1>
      <p>ئەتوانی گوناح بوونی خۆت تاقی بکەیتەوە بە پێی ئەو لێڤڵانەی دانراوە</p>
      <div className="form-container">
        <h2>ناوی خۆت بنووسە</h2>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="ناوەکەت بنووسە"
        />
        <button onClick={handleRegistration}>دەست بکە بە گوناح بوون</button>
      </div>
    </div>
  );

  const renderLevelsScreen = () => (
    <div className="levels-screen">
      <div className="header">
        <h1>ئاستەکانی گوناح بوون</h1>
        <div className="username">بەخێربێیت {userName}</div>
      </div>
      <div className="levels-grid">
        {levels.map((level) => (
          <div
            key={level.id}
            className={`level-card ${unlockedLevels.includes(level.id) ? '' : 'locked'}`}
            onClick={() => unlockedLevels.includes(level.id) && startLevel(level.id)}
          >
            <div className="image-container">
              <img src={level.image} alt={`Level ${level.id}`} />
              {!unlockedLevels.includes(level.id) && (
                <div className="lock-overlay">
                  <svg className="lock-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <div className="content">
              <h3>{level.title}</h3>
              <p>{level.description}</p>
              <div className="status">
                <span className={unlockedLevels.includes(level.id) ? 'unlocked' : 'locked'}>
                  {unlockedLevels.includes(level.id) ? 'کراوەتەوە' : 'داخراوە'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderQuizScreen = () => {
    const currentLevelData = levels.find(level => level.id === currentLevel);

    return (
      <div className="quiz-screen">
        <div className="container">
          <div className="quiz-card">
            <h2>{currentLevelData.title}</h2>
            <h3>{currentLevelData.question}</h3>
            <div className="options">
              {currentLevelData.options.map((option, index) => (
                <div
                  key={index}
                  className={`option ${userAnswer === option ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(option)}
                >
                  <div className={`checkmark ${userAnswer === option ? 'selected' : 'unselected'}`}>
                    {userAnswer === option && (
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              ))}
            </div>
            <button
              className="finish-button"
              onClick={finishQuiz}
              disabled={!userAnswer}
            >
              تەواوکردن
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderResultsScreen = () => {
    const currentLevelData = levels.find(level => level.id === currentLevel);
    const isCorrect = userAnswer === currentLevelData.correctAnswer;

    return (
      <div className="results-screen">
        <div className="results-card">
          <h2>{currentLevelData.title} - ئەنجامەکان</h2>
          <div className="result-icon">
            {isCorrect ? (
              <svg className="correct-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="incorrect-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <h3>{isCorrect ? currentLevelData.winnerMessage : currentLevelData.loserMessage}</h3>
          {isCorrect && currentLevel < 20 && !unlockedLevels.includes(currentLevel + 1) && (
            <div className="success-message">
              <p>وەڵامەکەت ڕاستە</p>
            </div>
          )}
          <div className="actions">
            <button onClick={() => startLevel(currentLevel)}>دووبارە هەوڵبدەوە</button>
            <button onClick={completeLevel}>گەڕانەوە بۆ ئاستەکان</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      {currentScreen === 'welcome' && renderWelcomeScreen()}
      {currentScreen === 'levels' && renderLevelsScreen()}
      {currentScreen === 'quiz' && renderQuizScreen()}
      {currentScreen === 'results' && renderResultsScreen()}
      <footer>
        <p>یاری گوناح بوون</p>
      </footer>
    </div>
  );
};

export default Main;