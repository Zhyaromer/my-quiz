import { useState } from 'react';
import './index.css'

const generateLevels = () => {
  const baseLevels = [
    {
      id: 1,
      title: "ئاست 1",
      image: "peshawa.webp",
      question: "ئەم قسەیە هی کێە؟ \"لە دنیایا حەزم لە ئاشتیە!\"",
      options: ["ماندێڵا پێشەوا", "کاسترۆ پێشەوا", "گیڤارا پێشەوا", "مەهاتما پێشەوا"],
      correctAnswer: "مەهاتما پێشەوا",
      winnerMessage: "بەڕاستی زۆری حەز لە ئاشتی بوو💔",
      loserMessage: "پیرؤزە تۆ گوناح بووی"
    },
    
    {
      id: 2,
      title: "ئاست 2",
      image: "peshawa.webp",
      question: "مامۆستایەکی کیمیا بچێتە بەر باران چی لێ یەت؟",
      options: ["چەتری پێە هیچی لێنایەت", "کیمیا باران ئەبێت", "دەبێتە هەڵم", "تەڕەبێت"],
      correctAnswer: "کیمیا باران ئەبێت",
      winnerMessage: "نانا زیرەکی واڵتەر وایتی کورد!",
      loserMessage: "خێرا دوبارەی بکەوە با واڵتەر وایت  پێو نەزانێت"
    },
    {
      id: 3,
      title: "ئاست 3",
      image: "peshawa.webp",
      question: "کابرایەکی کورد بولبولێک ئەکرێت بەڵام بولبولەکە ناخوێنێت بۆ؟",
      options: ["خوێنەواری نیە", "تاقەتی نیە", "نەخۆشە", "کوردی نازانێت"],
      correctAnswer: "تاقەتی نیە",
      winnerMessage: "بەخوا زیرەکی تۆ چیت خەزەب",
      loserMessage: "گوناححححححححححححححح"
    },
    {
      id: 4,
      title: "ئاست 4",
      image: "peshawa.webp",
      question: "کابرایەک کە خەوت بەرگرێکی خستە ژێر سەری بۆ؟",
      options: [ "بۆ ئەوەی کەس نەی خوات بۆی", "بۆی تێر خەو بێت", "چونکە سەلاجەیان نیە"],
      correctAnswer: "بۆی تێر خەو بێت",
      winnerMessage: "تاقی بکەرەوە تۆش ئەگەر خەوت لێ نەکەوت",
      loserMessage: "بەخوا گوناحی"
    },
    {
      id: 5,
      title: "ئاست 5",
      image: "peshawa.webp",
      question: "سەیارەیەک بۆ ئیش ناکات؟",
      options: ["چونکە سەیارەکە هەڵنەکراوە", "چونکە مەکینەکەی تەواو نیە", "لەبەر ئەوەی مەکتەب تەواو بکات", "بانزینی تیا نیە"],
      correctAnswer: "بانزینی تیا نیە",
      winnerMessage: "سەیارەکەی تۆ بەنزینی تیایە؟",
      loserMessage: "کورە ئەوە چیە ئەو زیرەکیە تۆ چیت غەزەب یابان نەو فڕێنێت"
    },
    {
      id: 6,
      title: "ئاست 6",
      image: "peshawa.webp",
      question: "کابرایەک چاوەرێ پاس ئەکات بۆ؟",
      options: ["پارەی تەکسی پێ نیە", "بۆ ئەوەی گۆڵ بکات", "ئەچێتە بازار", "تەکسیەکەی شکاوە"],
      correctAnswer: "ئەچێتە بازار",
      winnerMessage: "یانی قابیلە بۆچی چاوەڕێی پاس بکات؟🐸",
      loserMessage: "نداخۆ گوناح گیان"
    },
    {
      id: 7,
      title: "ئاست 7",
      image: "peshawa.webp",
      question: "کابرایەک لایتی سەیارەکەی کز ئەبێت چی ئەکات؟",
      options: ["پیای ئەکێشێ بۆ ئەوەی چاک بێت", "سەوتی ئەیات", "عەینەکی بۆ ئەنوسێت", "ئەی گۆرێت"],
      correctAnswer: "عەینەکی بۆ ئەنوسێت",
      winnerMessage: "سەیارەکەی تۆ عەینەکی هەیە؟🤓",
      loserMessage: "جوانتر بیرکەوە گوناح"
    },
    {
      id: 8,
      title: "ئاست 8",
      image: "peshawa.webp",
      question: "سێ نەفەر ئەڕؤن بۆ سەفرە دوان یەتەوە بۆچی؟",
      options: ["نەفەرێکیان کەبابە", "یەکێکیان ئەوەنە حەزی بە سرەشتەکە بوو بریاری یا لەوێ بژی", "دانەیەک جێ ئەهێڵن بۆ یادگاری ", "دانەیەکیان ون ئەبێت"],
      correctAnswer: "نەفەرێکیان کەبابە",
      winnerMessage: "ئەو دوو کەسە کەباب خۆری چاک بوون🍴",
      loserMessage: "ئەمڕؤ هەر گوناح ئەبیت گوناح"
    },
    {
      id: 9,
      title: "ئاست 9",
      image: "peshawa.webp",
      question: "کابرایەک سویجێک ئەکات بە گوێیا بۆچی؟",
      options: ["کلیلەکان ئەشارێتەوە", "ملی قفڵ ئەکات", "مێشکی ئیش پێ ئەکات", "گویێ پێ ئەخورێنێت"],
      correctAnswer: "ملی قفڵ ئەکات",
      winnerMessage: "ئی هوار چن گاریگرە",
      loserMessage: "جوان بیرکەوە چی لە سویچ ئەکەی گوناح"
    },
    {
      id: 10,
      title: "ئاست 10",
      image: "peshawa.webp",
      question: "پیاوێک بە قەد عەمودێکەوە هەڵواسراوە بۆچی؟",
      options: ["کاندیدە", "مەیمنونە", "هار بوە", "وەستای کارەبایە"],
      correctAnswer: "کاندیدە",
      winnerMessage: "ئی هوار ل زیرکی تو",
      loserMessage: "گرنگ بەشداری کردن هەی گوناح"
    },
    {
      id: 11,
      title: "ئاست 11",
      image: "peshawa.webp",
      question: "بۆچی قیتار دوو هێلی بەژێردا هاتوە؟",
      options: ["پارەیان پێ نەبوو بیکەنە چوار هێڵ", "چونکە زۆر زۆر گرنگە", "بۆ ئەوەی وەر نەگەرێت", "جونکە دوو تایەی هەیە"],
      correctAnswer: "چونکە زۆر زۆر گرنگە",
      winnerMessage: "بەخوا زیرەکیەکەی تۆ لەوەش گرنگ ترە",
      loserMessage: "پیرؤزە ئەوە گوناح بووی"
    },
    {
      id: 12,
      title: "ئاست 12",
      image: "peshawa.webp",
      question: "بۆچێ دوو ماسی تەوقە لەگەڵ یەکا ناکەن؟",
      options: ["چونکە پولەکەین", "بۆ ئەوەی دەستنوێژیان نەشکێت", "چونکە دەستیان تەڕە", "چونکە دەستیان نیە"],
      correctAnswer: "چونکە دەستیان تەڕە",
      winnerMessage: "ئافەرم هەی ئەلبێرت ئاینیشتاینی کوردی",
      loserMessage: "زیرەکیت شەرمەزار کردوە"
    },
    {
      id: 13,
      title: "ئاست 13",
      image: "peshawa.webp",
      question: "کابرایەک بەردێک ئەگرێتە پەنجەرەیەک بۆ ناشکێت؟",
      options: ["چونکە پەنجەرەکە کراوەتەوە", "پەنجەرەکە شوشەی پێوە نیە", "بەردەکە بچوکە", "بەری ناکەوێت"],
      correctAnswer: "چونکە پەنجەرەکە کراوەتەوە",
      winnerMessage: "بە منالی فعلی وات کردوە بۆیە ئەیزانی دیارە؟🐸",
      loserMessage: "ئەوە تۆ  یەکەمی هەرێم نەبووی لە زیرەکی؟"
    },
    {
      id: 14,
      title: "ئاست 14",
      image: "peshawa.webp",
      question: "مارێک لانەکەی جێ ئەهێلێت بۆ خوا حافیزی ناکات؟",
      options: ["چونکە ئەگەرێتەوە یەکسەر", "چونکە دەستی نیە", "چونکە کوردی نازانێت"],
      correctAnswer: "چونکە ئەگەرێتەوە یەکسەر",
      winnerMessage: "وەڵا برا زیرەکی ئەوە چیەواااااا",
      loserMessage: "گوناح گوناح گوناح" 
    },
    {
      id: 15,
      title: "ئاست 15",
      image: "peshawa.webp",
      question: "پیاویێک ئەیەوێت بچێتە سەربان بەڵام نە پەیژە نە قادرمەی لێ نیە بە چی ئەچێت؟ ",
      options: ["بە فڕین","بە دالغە ", "بە مەسعەد", "ناچێت"],
      correctAnswer: "بە فڕین",
      winnerMessage: "ئێ ئەو کەسە سوپەرمانە ئیتر ئەفرێ🐸",
      loserMessage: "پیرۆزە دەبارە گوناح بویتەوە"
    },

  ];

  return baseLevels;
};

const quizLevels = generateLevels();

const QuizApp = () => {
  const [userName, setUserName] = useState('');
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [currentLevel, setCurrentLevel] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [unlockedLevels, setUnlockedLevels] = useState([1]);

  const levels = quizLevels;

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
    <div className="flex flex-col items-center justify-center h-full p-8 text-center" dir="rtl">
      <h1 className="text-4xl font-bold mb-6 text-white">بەخێربێیت بۆ تاقیکردنەوەی گوناح </h1>
      <p className="text-xl mb-8 text-white">ئەتوانی گوناح بوونی خۆت تاقی بکەیتەوە بە پێی ئەو لێڤڵانەی دانراوە</p>
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">ناوی خۆت بنووسە</h2>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="ناوەکەت بنووسە"
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          dir="rtl"
        />
        <button
          onClick={handleRegistration}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          دەست بکە بە گوناح بوون
        </button>
      </div>
    </div>
  );

  const renderLevelsScreen = () => (
    <div
      className="container mx-auto px-4 py-8 min-h-screen"
      dir="rtl"
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 mb-8">
        <div className="flex flex-row-reverse justify-between items-center">
          <h1 className="text-3xl font-bold">ئاستەکانی گوناح بوون</h1>
          <div className="text-lg font-medium">بەخێربێیت {userName}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {levels.map((level) => (
          <div
            key={level.id}
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 ${unlockedLevels.includes(level.id) ? 'cursor-pointer' : 'opacity-60'
              }`}
            onClick={() => unlockedLevels.includes(level.id) && startLevel(level.id)}
          >
            <div className="h-32 bg-gray-200 relative">
              <img
                src={level.image}
                alt={`Level ${level.id}`}
                className="w-full h-full object-fill"
              />
              {!unlockedLevels.includes(level.id) && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{level.title}</h3>
              <p className="text-gray-600 text-sm">{level.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className={`px-2 py-1 rounded text-xs font-medium ${unlockedLevels.includes(level.id) ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
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
      <div
        className="min-h-screen bg-fill bg-center"
        style={{ backgroundImage: `url('peshawa.webp')` }}
      >
        <div
          className="container mx-auto px-4 py-8 max-w-3xl"
          dir="rtl"
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{currentLevelData.title}</h2>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4">{currentLevelData.question}</h3>
              <div className="space-y-3">
                {currentLevelData.options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`p-4 border rounded-lg cursor-pointer transition ${userAnswer === option
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-300 hover:bg-gray-50'
                      }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 flex items-center justify-center rounded-full ml-3 ${userAnswer === option
                          ? 'bg-blue-500 text-white'
                          : 'border border-gray-400'
                        }`}>
                        {userAnswer === option && (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-start">
              <button
                onClick={finishQuiz}
                disabled={!userAnswer}
                className={`px-4 py-2 rounded-lg font-medium ${!userAnswer
                    ? 'bg-green-300 text-white cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
              >
                تەواوکردن
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderResultsScreen = () => {
    const currentLevelData = levels.find(level => level.id === currentLevel);
    const isCorrect = userAnswer === currentLevelData.correctAnswer;

    return (
      <div
        className="container mx-auto px-4 py-8 max-w-2xl"
        dir="rtl"
      >
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{currentLevelData.title} - ئەنجامەکان</h2>

          <div className="mb-6">
            <div className="inline-flex items-center justify-center p-4 bg-gray-100 rounded-full mb-2">
              {isCorrect ? (
                <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              {isCorrect ? currentLevelData.winnerMessage : currentLevelData.loserMessage}
            </h3>
          </div>

          {isCorrect && currentLevel < 20 && !unlockedLevels.includes(currentLevel + 1) && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
              <p className="font-medium">وەڵامەکەت ڕاستە</p>
            </div>
          )}

          <div className="space-x-4">
            <button
              onClick={() => startLevel(currentLevel)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 ml-4"
            >
              دووبارە هەوڵبدەوە
            </button>
            <button
              onClick={completeLevel}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300"
            >
              گەڕانەوە بۆ ئاستەکان
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#282e30] relative">
      <div className="flex-1 relative z-10">
        {currentScreen === 'welcome' && renderWelcomeScreen()}
        {currentScreen === 'levels' && renderLevelsScreen()}
        {currentScreen === 'quiz' && renderQuizScreen()}
        {currentScreen === 'results' && renderResultsScreen()}
      </div>

      <footer className="py-4 text-center text-white text-sm relative z-10 bg-black bg-opacity-30" dir="rtl">
        <p>یاری گوناح بوون</p>
      </footer>
    </div>
  );
};

export default QuizApp;