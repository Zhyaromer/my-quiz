import { useState, useEffect } from 'react';
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
      wrongAnswerMessages: {
        "ماندێڵا پێشەوا": "نا نا ماندێلا نەبوو، ئەو زیاتر خەباتی دژی ڕەگەزپەرستی کرد",
        "کاسترۆ پێشەوا": "کاسترۆ زیاتر شۆڕشگێڕ بوو نەک ئاشتیخواز",
        "گیڤارا پێشەوا": "گیڤارا پێشەوا شۆڕشگێڕێکی گەورە بوو بەڵام ئەمە قسەی ئەو نەبوو"
      }
    },
    {
      id: 2,
      title: "ئاست 2",
      image: "peshawa.webp",
      question: "مامۆستایەکی کیمیا بچێتە بەر باران چی لێ یەت؟",
      options: ["چەتری پێە هیچی لێنایەت", "کیمیا باران ئەبێت", "دەبێتە هەڵم", "تەڕەبێت"],
      correctAnswer: "کیمیا باران ئەبێت",
      winnerMessage: "نانا زیرەکی واڵتەر وایتی کورد!",
      wrongAnswerMessages: {
        "چەتری پێە هیچی لێنایەت": "خێرا دوبارەی بکەوە با واڵتەر وایت  پێو نەزانێت",
        "دەبێتە هەڵم": "هەڵم؟ ئەوە بۆ ئاوە نەک مامۆستای کیمیا",
        "تەڕەبێت": " خێرا دوبارەی بکەوە با واڵتەر وایت  پێو نەزانێت"
      }
    },
    {
      id: 3,
      title: "ئاست 3",
      image: "peshawa.webp",
      question: "کابرایەکی کورد بولبولێک ئەکرێت بەڵام بولبولەکە ناخوێنێت بۆ؟",
      options: ["خوێنەواری نیە", "تاقەتی نیە", "نەخۆشە", "کوردی نازانێت"],
      correctAnswer: "تاقەتی نیە",
      winnerMessage: "بەخوا زیرەکی تۆ چیت خەزەب",
      wrongAnswerMessages: {
        "خوێنەواری نیە": "بولبول پێویستی بە خوێندەواری نیە بۆ گۆرانی وتن!",
        "نەخۆشە": "گوناححححححححححححححح",
        "کوردی نازانێت": "بولبول زمان نازانێت"
      }
    },
    {
      id: 4,
      title: "ئاست 4",
      image: "peshawa.webp",
      question: "کابرایەک کە خەوت بەرگرێکی خستە ژێر سەری بۆ؟",
      options: ["بۆ ئەوەی کەس نەی خوات بۆی", "بۆی تێر خەو بێت", "چونکە سەلاجەیان نیە"],
      correctAnswer: "بۆی تێر خەو بێت",
      winnerMessage: "تاقی بکەرەوە تۆش ئەگەر خەوت لێ نەکەوت",
      wrongAnswerMessages: {
        "بۆ ئەوەی کەس نەی خوات بۆی": "بەخوا گوناحی",
        "چونکە سەلاجەیان نیە": "بەخوا گوناحی"
      }
    },
    {
      id: 5,
      title: "ئاست 5",
      image: "peshawa.webp",
      question: "سەیارەیەک بۆ ئیش ناکات؟",
      options: ["چونکە سەیارەکە هەڵنەکراوە", "چونکە مەکینەکەی تەواو نیە", "لەبەر ئەوەی مەکتەب تەواو بکات", "بانزینی تیا نیە"],
      correctAnswer: "بانزینی تیا نیە",
      winnerMessage: "سەیارەکەی تۆ بەنزینی تیایە؟",
      wrongAnswerMessages: {
        "چونکە سەیارەکە هەڵنەکراوە": "کورە ئەوە چیە ئەو زیرەکیە تۆ چیت غەزەب یابان نەو فڕێنێت",
        "چونکە مەکینەکەی تەواو نیە": "کورە ئەوە چیە ئەو زیرەکیە تۆ چیت غەزەب یابان نەو فڕێنێت",
        "لەبەر ئەوەی مەکتەب تەواو بکات": "کورە ئەوە چیە ئەو زیرەکیە تۆ چیت غەزەب یابان نەو فڕێنێت",
      }
    },
    {
      id: 6,
      title: "ئاست 6",
      image: "peshawa.webp",
      question: "کابرایەک چاوەرێ پاس ئەکات بۆ؟",
      options: ["پارەی تەکسی پێ نیە", "بۆ ئەوەی گۆڵ بکات", "ئەچێتە بازار", "تەکسیەکەی شکاوە"],
      correctAnswer: "ئەچێتە بازار",
      winnerMessage: "یانی قابیلە بۆچی چاوەڕێ بکات؟🐸",
      wrongAnswerMessages: {
        "پارەی تەکسی پێ نیە": "نداخۆ گوناح گیان",
        "بۆ ئەوەی گۆڵ بکات": "نداخۆ گوناح گیان",
        "تەکسیەکەی شکاوە": "نداخۆ گوناح گیان"
      }
    },
    {
      id: 7,
      title: "ئاست 7",
      image: "peshawa.webp",
      question: "کابرایەک لایتی سەیارەکەی کز ئەبێت چی ئەکات؟",
      options: ["پیای ئەکێشێ بۆ ئەوەی چاک بێت", "سەوتی ئەیات", "عەینەکی بۆ ئەنوسێت", "ئەی گۆرێت"],
      correctAnswer: "عەینەکی بۆ ئەنوسێت",
      winnerMessage: "سەیارەکەی تۆ عەینەکی هەیە؟🤓",
      wrongAnswerMessages: {
        "پیای ئەکێشێ بۆ ئەوەی چاک بێت": "جوانتر بیرکەوە گوناح",
        "سەوتی ئەیات": "جوانتر بیرکەوە گوناح",
        "ئەی گۆرێت": "جوانتر بیرکەوە گوناح"
      }
    },
    {
      id: 8,
      title: "ئاست 8",
      image: "peshawa.webp",
      question: "سێ نەفەر ئەڕؤن بۆ سەفرە دوان یەتەوە بۆچی؟",
      options: ["نەفەرێکیان کەبابە", "یەکێکیان ئەوەنە حەزی بە سروشتەکە بوو بریاری یا لەوێ بژی", "دانەیەک جێ ئەهێڵن بۆ یادگاری ", "دانەیەکیان ون ئەبێت"],
      correctAnswer: "نەفەرێکیان کەبابە",
      winnerMessage: "ئەو دوو کەسە کەباب خۆری چاک بوون🍴",
      wrongAnswerMessages: {
        "یەکێکیان ئەوەنە حەزی بە سرەشتەکە بوو بریاری یا لەوێ بژی": "ئەمڕؤ هەر گوناح ئەبیت گوناح",
        "دانەیەک جێ ئەهێڵن بۆ یادگاری ": "ئەمڕؤ هەر گوناح ئەبیت گوناح",
        "دانەیەکیان ون ئەبێت": "ئەمڕؤ هەر گوناح ئەبیت گوناح"
      }
    },
    {
      id: 9,
      title: "ئاست 9",
      image: "peshawa.webp",
      question: "کابرایەک سویچێک ئەکات بە گوێیا بۆچی؟",
      options: ["کلیلەکان ئەشارێتەوە", "ملی قفڵ ئەکات", "مێشکی ئیش پێ ئەکات", "گویێ پێ ئەخورێنێت"],
      correctAnswer: "ملی قفڵ ئەکات",
      winnerMessage: "ئی هوار چن گاریگرە",
      wrongAnswerMessages: {
        "کلیلەکان ئەشارێتەوە": "جوان بیرکەوە چی لە سویچ ئەکەی گوناح",
        "مێشکی ئیش پێ ئەکات": "جوان بیرکەوە چی لە سویچ ئەکەی گوناح",
        "گویێ پێ ئەخورێنێت": "جوان بیرکەوە چی لە سویچ ئەکەی گوناح"
      }
    },
    {
      id: 10,
      title: "ئاست 10",
      image: "peshawa.webp",
      question: "پیاوێک بە قەد عەمودێکەوە هەڵواسراوە بۆچی؟",
      options: ["کاندیدە", "لە لایەن پۆلیسەوە داواکراوە", "هار بوە", "وەستای کارەبایە"],
      correctAnswer: "کاندیدە",
      winnerMessage: "ئی هوار ل زیرکی تو",
      wrongAnswerMessages: {
        "مەیمنونە": "گرنگ بەشداری کردن هەی گوناح",
        "هار بوە": "گرنگ بەشداری کردن هەی گوناح",
        "وەستای کارەبایە": "گرنگ بەشداری کردن هەی گوناح"
      }
    },
    {
      id: 11,
      title: "ئاست 11",
      image: "peshawa.webp",
      question: "بۆچی قیتار دوو هێلی بەژێردا هاتوە؟",
      options: ["پارەیان پێ نەبوو بیکەنە چوار هێڵ", "چونکە زۆر زۆر گرنگە", "بۆ ئەوەی وەر نەگەرێت", "جونکە دوو تایەی هەیە"],
      correctAnswer: "چونکە زۆر زۆر گرنگە",
      winnerMessage: "بەخوا زیرەکیەکەی تۆ لەوەش گرنگ ترە",
      wrongAnswerMessages: {
        "پارەیان پێ نەبوو بیکەنە چوار هێڵ": "پیرؤزە ئەوە گوناح بووی",
        "بۆ ئەوەی وەر نەگەرێت": "پیرؤزە ئەوە گوناح بووی",
        "جونکە دوو تایەی هەیە": "پیرؤزە ئەوە گوناح بووی"
      }
    },
    {
      id: 12,
      title: "ئاست 12",
      image: "peshawa.webp",
      question: "بۆچێ دوو ماسی تەوقە لەگەڵ یەکا ناکەن؟",
      options: ["چونکە پولەکەین", "بۆ ئەوەی دەستنوێژیان نەشکێت", "چونکە دەستیان تەڕە", "چونکە دەستیان نیە"],
      correctAnswer: "چونکە دەستیان تەڕە",
      winnerMessage: "ئافەرم هەی ئەلبێرت ئاینیشتاینی کوردی",
      wrongAnswerMessages: {
        "چونکە پولەکەین": "زیرەکیت شەرمەزار کردوە",
        "بۆ ئەوەی دەستنوێژیان نەشکێت": "زیرەکیت شەرمەزار کردوە",
        "چونکە دەستیان نیە": "زیرەکیت شەرمەزار کردوە"
      }
    },
    {
      id: 13,
      title: "ئاست 13",
      image: "peshawa.webp",
      question: "کابرایەک بەردێک ئەگرێتە پەنجەرەیەک بۆ ناشکێت؟",
      options: ["چونکە پەنجەرەکە کراوەتەوە", "پەنجەرەکە شوشەی پێوە نیە", "بەردەکە بچوکە", "بەری ناکەوێت"],
      correctAnswer: "چونکە پەنجەرەکە کراوەتەوە",
      winnerMessage: "بە منالی فعلی وات کردوە بۆیە ئەیزانی دیارە؟🐸",
      wrongAnswerMessages: {
        "پەنجەرەکە شوشەی پێوە نیە": "ئەوە تۆ  یەکەمی هەرێم نەبووی لە زیرەکی؟",
        "بەردەکە بچوکە": "ئەوە تۆ  یەکەمی هەرێم نەبووی لە زیرەکی؟",
        "بەری ناکەوێت": "ئەوە تۆ  یەکەمی هەرێم نەبووی لە زیرەکی؟"
      }
    },
    {
      id: 14,
      title: "ئاست 14",
      image: "peshawa.webp",
      question: "مارێک لانەکەی جێ ئەهێلێت بۆ خوا حافیزی ناکات؟",
      options: ["چونکە ئەگەرێتەوە یەکسەر", "چونکە دەستی نیە", "چونکە کوردی نازانێت"],
      correctAnswer: "چونکە ئەگەرێتەوە یەکسەر",
      winnerMessage: "وەڵا برا زیرەکی ئەوە چیەواااااا",
      wrongAnswerMessages: {
        "چونکە دەستی نیە": "گوناح گوناح گوناح",
        "چونکە کوردی نازانێت": "گوناح گوناح گوناح"
      }
    },
    {
      id: 15,
      title: "ئاست 15",
      image: "peshawa.webp",
      question: "پیاویێک ئەیەوێت بچێتە سەربان بەڵام نە پەیژە نە قادرمەی لێ نیە بە چی ئەچێت؟ ",
      options: ["بە فڕین", "بە دالغە ", "بە مەسعەد", "ناچێت"],
      correctAnswer: "بە فڕین",
      winnerMessage: "ئێ ئەو کەسە سوپەرمانە ئیتر ئەفرێ🐸",
      wrongAnswerMessages: {
        "بە دالغە ": "پیرۆزە دەبارە گوناح بویتەوە",
        "بە مەسعەد": "پیرۆزە دەبارە گوناح بویتەوە",
        "ناچێت": "پیرۆزە دەبارە گوناح بویتەوە"
      }
    },
    {
      id: 16,
      title: "ئاست 16",
      image: "peshawa1.jpg",
      quizimg: "peshawaquiz1.jpg",
      question: "چۆن فێری زمانی ئینگلیزی بین؟",
      options: ["نازانم", "بە فەنی GTA", "بە کولیچەی خورما", "بە ٢٥ هەزار"],
      correctAnswer: "بە کولیچەی خورما",
      winnerMessage: "لەگەل کولیچەی خورما ئینگلیزیەکەت باشتر بکە🥳",
      wrongAnswerMessages: {
        "بە ٢٥ هەزار": "کورە برا گرانە",
        "بە فەنی GTA": "فەنەکە چیە؟",
        "نازانم": "ئەی بۆ ڤیدیۆ دا ئەنێیت و وا ئەڵێت؟"
      }
    },
    {
      id: 17,
      title: "ئاست 17",
      image: "peshawa2.png",
      quizimg: "peshawaquiz2.jpg",
      question: "ئەم شتە ناوی چیە؟",
      options: ["مشێر", "شمشار", "مشار", "A+B بەیەکەوە🐸"],
      correctAnswer: "A+B بەیەکەوە🐸",
      winnerMessage: "دەست خۆش بۆ زانیاریەکەو زاناکان شۆک بوون لە گرنگی ئەو ناوە تازانە",
      wrongAnswerMessages: {
        "مشار": "ئەگەر دیقەت بەن ئەوە گوناح بووی",
        "مشێر": "باشە یانی مشارەکە شێرە؟",
        "شمشار": "باشە شمشار ئیشی چیە؟",
      }
    },
    {
      id: 18,
      title: "ئاست 18",
      image: "peshawa3.png",
      quizimg: "https://th.bing.com/th/id/OIP.uI6YS-gu6d4mOC5RG1LqKQHaE8?rs=1&pid=ImgDetMain",
      question: "حەمە قتو بە چی مرد؟",
      options: ["قوپا", "کون بوو", "ئێکسپایەر بوو", "هەلیان چری"],
      correctAnswer: "هەلیان چری",
      winnerMessage: "قتویەکی پیاو بوو😭😢",
      wrongAnswerMessages: {
        "ئێکسپایەر بوو": "ئەگەر ئێکسپایەر بێت بۆ هەلی ئەپچرن؟🐸",
        "کون بوو": "بڕاستی نداخۆ",
        "قوپا": "گوناح گیان"
      }
    },
    {
      id: 19,
      title: "ئاست 19",
      image: "peshawa4.png",
      quizimg: "https://www.bus-planet.com/bus/pictures/Bahrein/CK-Bahrein-0114.jpg",
      question: "پاسێکی ٢١ نەفەری لە سلێمانیەوە بەڕێکەوت بۆ کەرکووک چەند نەفەری تیایە؟",
      options: ["21", "20", "22", "1"],
      correctAnswer: "1",
      winnerMessage: "بەس سایەقەکەی تیایە کێ وتی پڕە🐸",
      wrongAnswerMessages: {
        "21": "٢١ جار گوناح بووی",
        "22": "دلم کانگای خمانە",
        "20": "گرنگ بەشداری کردنە"
      }
    },
    {
      id: 20,
      title: "ئاست 20",
      image: "peshawa5.webp",
      quizimg: "https://th.bing.com/th/id/R.8dafa255dacb74bb597e405ce92d35a2?rik=Gr%2fzetEq3BCGDw&pid=ImgRaw&r=0",
      question: "کابرایەک سەلەجەیەک ئەکرێت بۆ ئیش ناکا؟",
      options: ["جارێ لە پاکەتایە", "پلاکەکەی کوژاوەتەوە", "نازانم", "هەڵ نەکراوە"],
      correctAnswer: "نازانم",
      winnerMessage: "خۆ من وەستای سەلاجە نیم چوزانم🐸",
      wrongAnswerMessages: {
        "هەڵ نەکراوە": "هەی گوناح گیان",
        "جارێ لە پاکەتایە": "تۆش لە پاکەتا گوناح بووی",
        "پلاکەکەی کوژاوەتەوە": "ئێ هەلیکە گوناح"
      }
    },
    {
      id: 21,
      title: "ئاست 21",
      image: "peshawa6.webp",
      quizimg: "https://th.bing.com/th/id/R.3a82af2943ee3a9a8e248bba160aaf8c?rik=oQ8dGrf%2bx7N5iw&riu=http%3a%2f%2fwww.botswana.co.za%2fimages%2felephant-jeremy-jowell-1280x881.jpg&ehk=RFcq9%2f%2bFIjuGDXgtvl%2brX6EdtA34ZUwziP%2fkejZI4gI%3d&risl=&pid=ImgRaw&r=0",
      question: "فیلێک بچێتە دارێک  چی ئەبێت؟",
      options: ["عاسی ئەبێ", "دارەکە ئەشکێ", "سەیر ئەبێ", "فیلێک لەسەر زەوی کەم ئەبێتەوە"],
      correctAnswer: "سەیر ئەبێ",
      winnerMessage: "ئێ سەیرە فیل لەسەر دار؟",
      wrongAnswerMessages: {
        "فیلێک لەسەر زەوی کەم ئەبێتەوە": "ئەی ئەگەر سوتفە لەو کاتە فیلێکی تریش لەسەر دار بوو چی؟🐸",
        "دارەکە ئەشکێ": "نداخۆ بۆ تۆو دارەکەش",
        "عاسی ئەبێ": "یارمەتی نایەی؟💔"
      }
    },
    {
      id: 22,
      title: "ئاست 22",
      image: "peshawa8.jpg",
      quizimg: "https://neurosciencenews.com/files/2023/10/mouse-genetics-parenting-neuroscience.jpg",
      question: "مشک دوای سێ سال ئەبێتە چی؟",
      options: ["جرج", "مشکیلە", "چوار ساڵ", "Micah Bell"],
      correctAnswer: "چوار ساڵ",
      winnerMessage: "تەمەنی درێژ بێت😊",
      wrongAnswerMessages: {
        "Micah Bell": "کورە خۆ ئەمە ڕێد دێد نیە نرا",
        "مشکیلە": "نانا مشکەکە زۆر ئاقڵە",
        "جرج": "ئاخر مشک ئەبێ بە جرج"
      }
    },
    {
      id: 23,
      title: "ئاست 23",
      image: "peshawa.webp",
      quizimg: "quizbald.jpg",
      question: "پیاوێکی کەچەڵ ئەچێتە سەرتاشخانە بۆچی؟",
      options: ["هاتوە بۆ لای هاوڕێکەی", "مناڵەکەی ئەبات بۆلای سەرتاش", "ڕیشو سمێلی ئەتاشێت", "خاوەن دوکانە"],
      correctAnswer: "مناڵەکەی ئەبات بۆلای سەرتاش",
      winnerMessage: "مناڵەکەی کەچەڵ نیە وەک خۆی🐸",
      wrongAnswerMessages: {
        "خاوەن دوکانە": "نەخێر هەڵەی نرام نداخۆ گوناح بووی🐸",
        "ڕیشو سمێلی ئەتاشێت": "دلم کانگای خمانە",
        "هاتوە بۆ لای هاوڕێکەی": "کولیچەی خورما ئەخۆن🐸"
      }
    },
    {
      id: 24,
      title: "ئاست 24",
      image: "peshawa1.jpg",
      video: "yt1z.net - Green Screen Spinning Cat Meme OIIAIOIIIAI Meme (1080p).mp4",
      isVideo: true,
      question: "ئو ئی ئو ئا ئو ئو ئی ئو ئی ئو ئا ئو ئو ئی ئو ئی ئو ئا ئو ئو ئی؟",
      options: ["ئو ئی ئو ئا ئو ئو ئی", "ئو ئی ئو ئا ئو ئو ئی ئو ئی ئو ئا ئو ئو ئی", "ئو ئی ئو ئا ئو ئو ئی ئو ئی ئو ئا ئو ئو ئی ئو ئی ئو ئا ئو ئو ئی", "ئو ئی ئو ئا ئو ئو ئی ئو ئی ئو ئا ئو ئو ئی ئو ئی ئو ئا ئو ئو ئی ئو ئی ئو ئا ئو ئو ئی"],
      correctAnswer: "ئو ئی ئو ئا ئو ئو ئی ئو ئی ئو ئا ئو ئو ئی ئو ئی ئو ئا ئو ئو ئی",
      winnerMessage: "ئو ئی ئو ئا ئو ئو ئی",
      wrongAnswerMessages: {
        "ئو ئی ئو ئا ئو ئو ئی ئو ئی ئو ئا ئو ئو ئی": "ئو ئی ئو ئا ئو ئو ئی",
        "ئو ئی ئو ئا ئو ئو ئی": "ئو ئی ئو ئا ئو ئو ئی",
        "ئو ئی ئو ئا ئو ئو ئی ئو ئی ئو ئا ئو ئو ئی ئو ئی ئو ئا ئو ئو ئی ئو ئی ئو ئا ئو ئو ئی": "ئو ئی ئو ئا ئو ئو ئی"
      }
    },
    {
      id: 25,
      title: "ئاست 25",
      image: "peshawa2.png",
      question: "کابرایەک بە پاس ئەچێتە بازار بە چی یەتەوە؟",
      options: ["بە تەکسی", "بە پاس", "بە پێ", "بە ئیسراحەت"],
      correctAnswer: "بە تەکسی",
      winnerMessage: "پاس نەمابوو🐸",
      wrongAnswerMessages: {
        "بە پاس": "پاشای گەناح بوون خۆتی",
        "بە ئیسراحەت": "سەرخەوێکیش بشکێنە ئینجا وەرەوە🐸",
        "بە پێ": "زەمیرت بێ کابرا هیلاکە"
      }
    },
    {
      id: 26,
      title: "ئاست 26",
      image: "peshawa5.webp",
      quizimg: "https://th.bing.com/th/id/OIP.dlmU0lfT5j0kz2IQZC0idwHaEM?rs=1&pid=ImgDetMain",
      question: "خورما لە کوێ زۆرە؟",
      options: ["بازار", "دار خورما", "کولیچە", "بەغداد"],
      correctAnswer: "کولیچە",
      winnerMessage: "کولیچە خۆری چاکی وەڵا",
      wrongAnswerMessages: {
        "دار خورما": "نەخێر هەڵەی نرام پیرؤزە ئەوە گوناح بووی",
        "بەغداد": "کیلۆی بە چەنە؟",
        "بازار": "توخوا بە ڕاست؟🐸"
      }
    },
    {
      id: 27,
      title: "ئاست 27",
      image: "peshawa.webp",
      quizimg: "https://i.ytimg.com/vi/ah_VpRDvLAw/maxresdefault.jpg",
      question: "کابرایەک ئەچێتە مەتعەم بۆ داوای جبس ئەکات؟",
      options: ["بۆ منالەکەی ئەکریت", "پێی ئەکرێت", "ڕەسمی کەبابی لەسەرە", "حەزی لێە"],
      correctAnswer: "ڕەسمی کەبابی لەسەرە",
      winnerMessage: "پارەی کەبابی پێ نیە نداخۆ🐸",
      wrongAnswerMessages: {
        "حەزی لێە": "نەبابە🐸",
        "پێی ئەکرێت": "نەبابە🐸",
        "بۆ منالەکەی ئەکریت": "جبس بۆ مناڵ خراپە🐸"
      }
    },
    {
      id: 28,
      title: "ئاست 28",
      image: "peshawa1.jpg",
      quizimg: "https://thumbs.dreamstime.com/z/stack-money-isolated-currency-money-stack-cash-banknotes-dollars-finance-111553616.jpg",
      question: "کابرایەک پارەی پێ نیە بۆ؟",
      options: ["جزدانی پێ نیە", "گیرفانی دڕاوە", "فەقیرە"],
      correctAnswer: "گیرفانی دڕاوە",
      winnerMessage: "هەموو پارەکانی لێ کەوتوو هەژار بوو",
      wrongAnswerMessages: {
        "جزدانی پێ نیە": "کە گوناحە توخوا",
        "فەقیرە": "تۆش لەو کەسە فەقیر ترو گوناح تری"
      }
    },
    {
      id: 29,
      title: "ئاست 29",
      image: "peshawa8.jpg",
      quizimg: "https://thumbs.dreamstime.com/b/ants-16283656.jpg",
      question: "مەجموعە مێلورەیەک ئەڕۆن بە ڕێگایە لە پر دانایەکیان ئەگەڕێتەوە بۆچی؟",
      options: ["کلیلەکانی بیرچوە", "تاقەتی نەما بروا لەگەڵیانا", "سەعاتەکەی  بیر چوە", "بیری چوە قژی دابێنێت"],
      correctAnswer: "",
      winnerMessage: "",
      wrongAnswerMessages: {
        "بیری چوە قژی دابێنێت": "نەخێر سەعاتەکەی  بیر چوە",
        "سەعاتەکەی  بیر چوە": "نەخێر بیری چوە قژی دابێنێت",
        "تاقەتی نەما بروا لەگەڵیانا": "نەخیر کلیلەکانی بیرچوە",
        "کلیلەکانی بیرچوە": "نەخیر تاقەتی نەما بروا لەگەڵیانا"
      }
    },
  ];

  return baseLevels;
};

const generateTextQuestions = () => {
  return [
    {
      id: 1,
      title: "ئاست 1",
      image: "peshawa.webp",
      question: "ئەمە چیە سەوزە لەسەر سەوزە سەوزی بەدەستەوەیە؟",
      answer: "بۆقێکە لەسەر گەلایەک و دە هەزاری بەدەستەوەیە",
      hint: "🍃بۆق"
    },
    {
      id: 2,
      title: "ئاست 2",
      image: "peshawa1.jpg",
      question: "دەریای مردوو بە چی مردوە؟",
      answer: "خنکاوە🐸",
      hint: "مەلەوانی نازانێت"
    },
    {
      id: 3,
      title: "ئاست 3",
      image: "peshawa2.png",
      question: "پیاوێک دوکانەکەی ئەسوتێت چی ئەکات؟",
      answer: "زەرەر ئەکات",
      hint: "༼ つ ◕_◕ ༽つ"
    },
    {
      id: 4,
      title: "ئاست 4",
      image: "peshawa3.png",
      question: "مار چی ئەخوات؟",
      answer: "پێچ",
      hint: "نازانم"
    },
    {
      id: 5,
      title: "ئاست 5",
      image: "peshawa4.png",
      question: "پیرێژنێک دوای سیسرک کەوتوە بۆ؟",
      answer: "وا ئەزانێت خورمایە",
      hint: "چاوی کزە بە شتێکی تر تێگەشتوە"
    },
    {
      id: 6,
      title: "ئاست 6",
      image: "peshawa5.webp",
      question: "پیاوێکی چینی ئەچێتە سەر دارێک چی لێ یەت؟",
      answer: "ئەبێتە دارچینی",
      hint: "ئەکرێتە چاوە"
    },
    {
      id: 7,
      title: "ئاست 7",
      image: "peshawa6.webp",
      question: "بزن و مارێک مناڵیان بێت ناوی ئەنێن چی؟",
      answer: "بزمار",
      hint: "نازانم"
    },
    {
      id: 8,
      title: "ئاست 8",
      image: "peshawa8.jpg",
      question: "بەتریقەکان بۆ ناچن بۆ مەکتەب؟",
      answer: "چونکە هەموو ڕۆژێک بەفرە",
      hint: "بەفر"
    },
    {
      id: 9,
      title: "ئاست 9",
      image: "peshawa.webp",
      question: "ئەگەر مەیمونێک حەزی بە مۆز بێت چی ئەیەینێ؟",
      answer: "مەیمونێکی تر🐒",
      hint: "نازانم لە پەیامنێرەکە پرسە🐸"
    },
  ];
};

const quizLevels = generateLevels();
const textQuestions = generateTextQuestions();

const QuizApp = () => {
  const [userName, setUserName] = useState('');
  const [currentScreen, setCurrentScreen] = useState('about');
  const [currentLevel, setCurrentLevel] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [unlockedLevels, setUnlockedLevels] = useState([1]);
  const [showJumpScare, setShowJumpScare] = useState(false);
  const [quizMode, setQuizMode] = useState(null);
  const [currentTextQuestion, setCurrentTextQuestion] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [keys, setKeys] = useState(1);
  const [textQuizResult, setTextQuizResult] = useState(null);
  const [stats, setStats] = useState({
    totalAttempts: 0,
    failedAttempts: 0,
    failedQuestions: {}
  });
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const levels = quizLevels;

  useEffect(() => {
    const savedData = localStorage.getItem('quizData');
    if (savedData) {
      const { userName, unlockedLevels, stats, completedQuestions, keys } = JSON.parse(savedData);
      setUserName(userName || '');
      setUnlockedLevels(unlockedLevels || [1]);
      setStats(stats || {
        totalAttempts: 0,
        failedAttempts: 0,
        failedQuestions: {}
      });
      setCompletedQuestions(completedQuestions || []);
      setKeys(keys || 1);
    }
  }, []);

  useEffect(() => {
    if (userName || unlockedLevels.length > 1 || stats.totalAttempts > 0) {
      localStorage.setItem('quizData', JSON.stringify({
        userName,
        unlockedLevels,
        stats,
        completedQuestions,
        keys
      }));
    }
  }, [userName, unlockedLevels, stats, completedQuestions, keys]);

  const handleRegistration = () => {
    if (userName.trim()) {
      setCurrentScreen('mode-select');
    }
  };

  const selectMode = (mode) => {
    setQuizMode(mode);
    if (mode === 'multiple') {
      setCurrentScreen('levels');
    } else if (mode === 'text') {
      setCurrentScreen('text-levels');
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
    const currentLevelData = levels.find(level => level.id === currentLevel);
    const isCorrect = userAnswer === currentLevelData.correctAnswer;

    if (currentLevel === 25) {
      setTimeout(() => {
        setShowJumpScare(true);
        const audio = new Audio('fuzzy-jumpscare-80560.mp3');
        audio.volume = 0.1;
        audio.play();
        setTimeout(() => {
          setShowJumpScare(false);
        }, 2000);
      }, 500);
    }

    setStats(prevStats => ({
      ...prevStats,
      totalAttempts: prevStats.totalAttempts + 1,
      failedAttempts: isCorrect ? prevStats.failedAttempts : prevStats.failedAttempts + 1,
      failedQuestions: {
        ...prevStats.failedQuestions,
        [currentLevel]: isCorrect
          ? prevStats.failedQuestions[currentLevel] || 0
          : (prevStats.failedQuestions[currentLevel] || 0) + 1
      }
    }));
  };

  const completeLevel = () => {
    const currentLevelData = levels.find(level => level.id === currentLevel);
    const isCorrect = userAnswer === currentLevelData.correctAnswer;

    if (isCorrect && currentLevel < 45) {
      if (!unlockedLevels.includes(currentLevel + 1)) {
        setUnlockedLevels([...unlockedLevels, currentLevel + 1]);
      }
    }

    setCurrentScreen('levels');
  };

  const handleTextAnswer = () => {
    if (!completedQuestions.includes(currentTextQuestion)) {
      setKeys(prevKeys => prevKeys + 0.5);
      setCompletedQuestions(prev => [...prev, currentTextQuestion]);
    }
    const nextLevelId = currentTextQuestion + 2;
    if (currentTextQuestion < textQuestions.length - 1 && !unlockedLevels.includes(nextLevelId)) {
      setUnlockedLevels(prev => [...prev, nextLevelId]);
    }

    setCurrentScreen('text-results');
  };

  const useHint = () => {
    if (keys > 0) {
      setKeys(prevKeys => prevKeys - 1);
      setShowHint(true);
    }
  };

  const continueTextQuiz = () => {
    setShowHint(false);

    if (textQuizResult?.isCorrect && currentTextQuestion < textQuestions.length - 1) {
      const nextLevelId = currentTextQuestion + 2;
      if (unlockedLevels.includes(nextLevelId)) {
        startTextLevel(nextLevelId);
      } else {
        setCurrentScreen('text-levels');
      }
    } else {
      setCurrentScreen('text-levels');
    }
  };

  const resetProgress = () => {
    if (window.confirm('ئایا دڵنیایت دەتەوێت هەموو داتاکانت بسڕیتەوە؟')) {
      setUserName('');
      setCurrentScreen('welcome');
      setCurrentLevel(null);
      setUserAnswer('');
      setUnlockedLevels([1]);
      setShowJumpScare(false);
      setQuizMode(null);
      setCurrentTextQuestion(0);
      setShowHint(false);
      setKeys(1);
      setTextQuizResult(null);
      setStats({
        totalAttempts: 0,
        failedAttempts: 0,
        failedQuestions: {}
      });
      setCompletedQuestions([]);

      localStorage.removeItem('quizData');
    }
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

  const renderModeSelect = () => (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center" dir="rtl">
      <h1 className="text-4xl font-bold mb-6 text-white">بەخێربێیت {userName}</h1>
      <p className="text-xl mb-8 text-white">تکایە جۆری یاریەکە هەڵبژێرە</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <div
          onClick={() => selectMode('multiple')}
          className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg cursor-pointer hover:transform hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-semibold mb-4">هەڵبژاردنی وەڵام</h2>
          <p className="text-gray-600">پرسیارەکان لەگەڵ چەند وەڵامێک دێن و دەبێت دروستەکەی هەڵبژێریت</p>
        </div>
        <div
          onClick={() => selectMode('text')}
          className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg cursor-pointer hover:transform hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-semibold mb-4">بینینی وەلام</h2>
          <p className="text-gray-600">دەبێت پرسیارەکان لە مێشکی خۆت لێکبەیتەوە تا دەگەیتە وەڵام</p>
        </div>
      </div>
    </div>
  );

  const renderLevelsScreen = () => (
    <div
      className="container mx-auto px-4 py-8 min-h-screen"
      dir="rtl"
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 mb-8">
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row-reverse justify-between items-center">
          <h1 className="text-3xl font-bold">ئاستەکانی گوناح بوون</h1>
          <div className="text-lg font-medium">بەخێربێیت {userName}</div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>کۆی هەوڵەکان: {stats.totalAttempts}</p>
          <p>کۆی وەلامە هەڵەکان: {stats.failedAttempts}</p>
          <p>ڕێژەی وەلامی ڕاست: {stats.totalAttempts > 0 ? Math.round(((stats.totalAttempts - stats.failedAttempts) / stats.totalAttempts) * 100) : 0}%</p>
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
                {stats.failedQuestions[level.id] > 0 && (
                  <span className="px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800">
                    هەڵەکان: {stats.failedQuestions[level.id]}
                  </span>
                )}
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

            {
              currentLevelData?.quizimg && (
                <div className="w-[80%] h-52 flex items-center justify-center mx-auto mb-6">
                  <img
                    src={currentLevelData.quizimg}
                    alt={currentLevelData.title}
                    className="w-full h-full"
                  />
                </div>
              )
            }

            {
              currentLevelData?.isVideo && (
                <div className="w-[80%] h-52 flex items-center justify-center mx-auto mb-6">
                  <video
                    src={currentLevelData.video}
                    autoPlay
                    loop
                    className="w-full h-full"
                  />
                </div>
              )
            }

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
              {isCorrect
                ? currentLevelData.winnerMessage
                : currentLevelData.wrongAnswerMessages[userAnswer] || "هەوڵ بدەوە دووبارە"}
            </h3>
          </div>

          {isCorrect && !unlockedLevels.includes(currentLevel + 1) && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
              <p className="font-medium">وەڵامەکەت ڕاستە</p>
            </div>
          )}

          <div className="space-x-4 flex justify-center items-center flex-col md:flex-row gap-2 md:gap-0">
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

  const renderTextLevels = () => (
    <div className="container mx-auto px-4 py-8 min-h-screen" dir="rtl">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 mb-8">
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row-reverse justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">ئاستەکانی تاقیکردنەوەی گوناح بوون</h1>
          <div className="text-lg font-medium">بەخێربێیت {userName}</div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>کۆی هەوڵەکان: {stats.totalAttempts}</p>
          <p>هەڵە کراوەکان: {stats.failedAttempts}</p>
          <p>کلیلەکان: {keys}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {textQuestions.map((question) => (
          <div
            key={question.id}
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 ${unlockedLevels.includes(question.id) ? 'cursor-pointer' : 'opacity-60'
              }`}
            onClick={() => unlockedLevels.includes(question.id) && startTextLevel(question.id)}
          >
            <div className="h-32 bg-gray-200 relative">
              <img
                src={question.image}
                alt={`Level ${question.id}`}
                className="w-full h-full object-fill"
              />
              {!unlockedLevels.includes(question.id) && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
              <div className="mt-4 flex justify-between items-center">
                <span className={`px-2 py-1 rounded text-xs font-medium ${unlockedLevels.includes(question.id) ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                  {unlockedLevels.includes(question.id) ? 'کراوەتەوە' : 'داخراوە'}
                </span>
                {stats.failedQuestions[`text-${question.id}`] > 0 && (
                  <span className="px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800">
                    هەڵەکان: {stats.failedQuestions[`text-${question.id}`]}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const startTextLevel = (levelId) => {
    setCurrentLevel(levelId);
    setCurrentTextQuestion(levelId - 1);
    setShowHint(false);
    setCurrentScreen('text-quiz');
  };

  const renderTextQuiz = () => {
    const currentQuestion = textQuestions[currentTextQuestion];

    return (
      <div className="container mx-auto px-4 py-8 min-h-screen" dir="rtl">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">پرسیاری {currentTextQuestion + 1}</h2>
              <div className="text-lg">
                <span className="mr-2">کلیلەکان:</span>
                <span className="font-bold text-blue-600">{keys}</span>
              </div>
            </div>
            <p className="text-xl mb-6">{currentQuestion.question}</p>
            <div className="space-y-4">
              <div className="flex justify-between">
                <button
                  onClick={useHint}
                  disabled={keys === 0 || showHint}
                  className={`px-4 py-2 ${keys === 0 || showHint
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-blue-600 hover:text-blue-700'
                    }`}
                >
                  یارمەتی (1 کلیل)
                </button>
                <button
                  onClick={handleTextAnswer}
                  className="px-6 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700"
                >
                  بینینی وەڵام
                </button>
              </div>
              {showHint && (
                <div className="mt-4 p-4 bg-blue-50 text-blue-700 rounded-lg">
                  {currentQuestion.hint}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTextResults = () => {
    const currentQuestion = textQuestions[currentTextQuestion];

    return (
      <div className="container mx-auto px-4 py-8 min-h-screen" dir="rtl">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              وەڵام: {currentQuestion.answer}
            </h2>
          </div>
          <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-center space-x-4">
            <button
              onClick={() => { continueTextQuiz(); setCurrentScreen(quizMode === 'multiple' ? 'levels' : 'text-levels'); }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 ml-4"
            >
              بەردەوام بە
            </button>
          </div>
        </div>
      </div>
    );
  };

  const AboutPage = () => {
    return (
      <div className="min-h-screen bg-indigo-95000 flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-90 h-2"></div>

            <div className="w-full h-56 flex items-center justify-center bg-black/30 overflow-hidden">
              <img
                src="https://yt3.googleusercontent.com/xwI57NLTjR3TdmPm8POLoLKIQr_km80SjJTgVdmchxUVYGwvbQtRkt7nj_SG3OeP6nlzhX1k=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                alt="Peshawa Barznji"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-10">
              <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 tracking-wider">دەربارەی یارییەکە</h1>
              <div dir='rtl' className="space-y-6 text-base">
                <p className="text-white/90">
                  پێشەکی ئەم یاریە تەنها بۆ خۆشیەو پێشکەشە بە برای خۆشەویستی خۆم کاک پێشەوا
                </p>
                <p className="text-white/90">
                  یاریەکە پێک دێت لە دوو جۆری یاری کە هەر یەکەیان تایبەت مەندی خۆی هەیە
                </p>
                <p className="text-white/90">
                  هیوادارم بە دڵتان بێتو لە هەر هەڵەو کەموو کورتیوو بەگێکم ببورن
                </p>
              </div>

              <div className="mt-10 flex flex-col items-center justify-between gap-4">
                <button onClick={() => setCurrentScreen('welcome')} className="bg-orange-400 text-white text-base font-bold py-3 px-4 rounded-full shadow-lg transform transition hover:scale-[1.02] hover:shadow-xl">
                  <div className='flex items-center gap-2'>
                    <div>
                      🎮
                    </div>
                    <div>
                      دەست بکە بە یاری
                    </div>
                  </div>
                </button>
                <a
                  href="https://www.youtube.com/@peshawabarznjii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-red-600 hover:bg-red-700 text-sm text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-[1.02]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  <span>سەبسکرایبی کاک پێشەوا بکەن</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderNavigation = () => (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 text-white z-20 py-4" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-semibold">یاری گوناح بوون</div>

          {/* Hamburger menu button - only visible on small screens */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>

          {/* Desktop navigation - hidden on small screens */}
          <div className="hidden lg:flex gap-4 items-center">
            <button
              onClick={() => setCurrentScreen('welcome')}
              className="hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            >
              سەرەتا
            </button>
            <button
              onClick={() => setCurrentScreen('mode-select')}
              className="hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            >
              جۆری یاری
            </button>
            {quizMode === 'multiple' && (
              <button
                onClick={() => setCurrentScreen('levels')}
                className="hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
              >
                ئاستەکان
              </button>
            )}
            {quizMode === 'text' && (
              <button
                onClick={() => setCurrentScreen('text-levels')}
                className="hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
              >
                ئاستەکان
              </button>
            )}
            <button
              onClick={resetProgress}
              className="bg-red-500 hover:bg-red-600 transition-colors px-4 py-2 rounded-lg text-white mr-4"
            >
              دەستپێکردنەوە لە سەرەتاوە
            </button>
          </div>

          {/* Social icons - hidden on small screens */}
          <div className="hidden lg:flex justify-center gap-6">
            <a href="https://www.facebook.com/zhyaromer999/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="https://github.com/Zhyaromer" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
              <i className="fab fa-github text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Mobile menu - only visible when menu is open */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 flex flex-col gap-2">
            <button
              onClick={() => {
                setCurrentScreen('welcome');
                setIsMenuOpen(false);
              }}
              className="hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 text-right"
            >
              سەرەتا
            </button>
            <button
              onClick={() => {
                setCurrentScreen('mode-select');
                setIsMenuOpen(false);
              }}
              className="hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 text-right"
            >
              جۆری یاری
            </button>
            {quizMode === 'multiple' && (
              <button
                onClick={() => {
                  setCurrentScreen('levels');
                  setIsMenuOpen(false);
                }}
                className="hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 text-right"
              >
                ئاستەکان
              </button>
            )}
            {quizMode === 'text' && (
              <button
                onClick={() => {
                  setCurrentScreen('text-levels');
                  setIsMenuOpen(false);
                }}
                className="hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 text-right"
              >
                ئاستەکان
              </button>
            )}
            <button
              onClick={() => {
                resetProgress();
                setIsMenuOpen(false);
              }}
              className="bg-red-500 hover:bg-red-600 transition-colors px-4 py-2 rounded-lg text-white text-right"
            >
              دەستپێکردنەوە لە سەرەتاوە
            </button>

            {/* Social icons in mobile menu */}
            <div className="flex gap-6 mt-4 pr-4">
              <a href="https://www.facebook.com/zhyaromer999/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="https://github.com/Zhyaromer" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#282e30] relative">
      {renderNavigation()}
      <div className="flex-1 relative z-10 mt-16">
        {currentScreen === 'welcome' && renderWelcomeScreen()}
        {currentScreen === 'mode-select' && renderModeSelect()}
        {currentScreen === 'levels' && renderLevelsScreen()}
        {currentScreen === 'quiz' && renderQuizScreen()}
        {currentScreen === 'results' && renderResultsScreen()}
        {currentScreen === 'text-levels' && renderTextLevels()}
        {currentScreen === 'text-quiz' && renderTextQuiz()}
        {currentScreen === 'text-results' && renderTextResults()}
        {currentScreen === 'about' && AboutPage()}
      </div>

      {showJumpScare && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center animate-jump-in">
          <img
            src="icegif-1680.gif"
            alt="Jump Scare"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default QuizApp;