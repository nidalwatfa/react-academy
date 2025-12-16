import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>مرحباً بك في أكاديمية React 🎓</h1>
      <p>تعلم البرمجة بلغات متعددة: عربي، كردي، إنجليزي، فرنسي 🚀</p>
    </div>
  );
}

export default App;
import React, { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('ar');

  const content = {
    ar: {
      title: 'أكاديمية React Native',
      welcome: 'مرحباً بك في الأكاديمية التعليمية الأولى من هاتف محمول 📱',
      button: 'ابدأ التعلم',
    },
    en: {
      title: 'React Native Academy',
      welcome: 'Welcome to the first mobile-powered learning academy 📱',
      button: 'Start Learning',
    },
    ku: {
      title: 'React Native Akademiya',
      welcome: 'Bi xêr hatî akademiya fêrkirina mobîlê 📱',
      button: 'Dest pê bike',
    },
    fr: {
      title: 'Académie React Native',
      welcome: 'Bienvenue dans la première académie mobile 📱',
      button: 'Commencer à apprendre',
    },
  };

  const { title, welcome, button } = content[language];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>{title}</h1>
      <p>{welcome}</p>
      <div style={{ margin: '20px' }}>
        <button onClick={() => setLanguage('ar')}>عربي</button>
        <button onClick={() => setLanguage('en')}>English</button>
        <button onClick={() => setLanguage('ku')}>Kurdî</button>
        <button onClick={() => setLanguage('fr')}>Français</button>
      </div>
      <button style={{ padding: '10px 20px', fontSize: '16px' }}>{button}</button>
    </div>
  );
}

export default App;
import React, { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('ar');

  const lessons = {
    ar: ['مقدمة في React', 'المكونات (Components)', 'الحالة (State)', 'الخصائص (Props)'],
    en: ['Introduction to React', 'Components', 'State', 'Props'],
    ku: ['Destpêkê li React', 'Komponentên', 'State', 'Props'],
    fr: ['Introduction à React', 'Composants', 'État', 'Props'],
  };

  const titles = {
    ar: 'أكاديمية React',
    en: 'React Academy',
    ku: 'Akademiya React',
    fr: 'Académie React',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'sans-serif' }}>
      <h1>{titles[language]}</h1>
      <p>اختر اللغة / Choose language:</p>
      <div style={{ margin: '20px' }}>
        <button onClick={() => setLanguage('ar')}>عربي</button>
        <button onClick={() => setLanguage('en')}>English</button>
        <button onClick={() => setLanguage('ku')}>Kurdî</button>
        <button onClick={() => setLanguage('fr')}>Français</button>
      </div>
      <h2>📚 الدروس / Lessons</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {lessons[language].map((lesson, index) => (
          <li key={index} style={{ margin: '10px', fontSize: '18px' }}>
            {lesson}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import Lesson from './Lesson';

function App() {
  const [language, setLanguage] = useState('ar');
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = {
    ar: [
      { title: 'مقدمة في React', content: 'React هي مكتبة لبناء واجهات المستخدم بطريقة مكونية.' },
      { title: 'المكونات', content: 'المكون هو جزء من واجهة المستخدم يمكن إعادة استخدامه.' },
    ],
    en: [
      { title: 'Introduction to React', content: 'React is a library for building user interfaces using components.' },
      { title: 'Components', content: 'A component is a reusable piece of UI.' },
    ],
    ku: [
      { title: 'Destpêkê li React', content: 'React pirtûkek e bo çêkirina UI bi komponentan.' },
      { title: 'Komponentên', content: 'Komponent yek beş e ku dikare were bikaranîn.' },
    ],
    fr: [
      { title: 'Introduction à React', content: 'React est une bibliothèque pour créer des interfaces utilisateur.' },
      { title: 'Composants', content: 'Un composant est une partie réutilisable de l’interface.' },
    ],
  };

  const titles = {
    ar: 'أكاديمية React',
    en: 'React Academy',
    ku: 'Akademiya React',
    fr: 'Académie React',
  };

  const currentLessons = lessons[language];

  return (
    <div style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'sans-serif' }}>
      <h1>{titles[language]}</h1>
      <div style={{ margin: '20px' }}>
        <button onClick={() => setLanguage('ar')}>عربي</button>
        <button onClick={() => setLanguage('en')}>English</button>
        <button onClick={() => setLanguage('ku')}>Kurdî</button>
        <button onClick={() => setLanguage('fr')}>Français</button>
      </div>

      {selectedLesson ? (
        <Lesson title={selectedLesson.title} content={selectedLesson.content} />
      ) : (
        <>
          <h2>📚 الدروس / Lessons</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {currentLessons.map((lesson, index) => (
              <li key={index} style={{ margin: '10px', fontSize: '18px', cursor: 'pointer' }} onClick={() => setSelectedLesson(lesson)}>
                {lesson.title}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
