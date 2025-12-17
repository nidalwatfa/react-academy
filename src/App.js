 HEAD

import React, { useState, useEffect } from 'react';

function App() {
  const [lesson, setLesson] = useState('jsx');

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '30px' }}>
      <h1>🎓 أكاديمية React</h1>
      <p>اختر الدرس:</p>
      <div style={{ margin: '20px' }}>
        <button onClick={() => setLesson('jsx')}>JSX</button>
        <button onClick={() => setLesson('components')}>Components</button>
        <button onClick={() => setLesson('props')}>Props</button>
        <button onClick={() => setLesson('state')}>State</button>
        <button onClick={() => setLesson('hooks')}>Hooks</button>
        <button onClick={() => setLesson('conditional')}>Conditional Rendering</button>
      </div>

      {lesson  'jsx' && (
        <div>
          <h2>📘 الدرس 1: JSX</h2>
          <p>JSX هو صيغة تشبه HTML داخل JavaScript لتسهيل بناء واجهات React.</p>
        </div>
      )}

      {lesson 'components' && (
        <div>
          <h2>📘 الدرس 2: المكونات</h2>
          <p>المكون هو وحدة مستقلة من الواجهة يمكن إعادة استخدامها.</p>
        </div>
      )}

      {lesson  'props' && (
        <div>
          <h2>📘 الدرس 3: Props</h2>
          <p>Props تسمح بتمرير البيانات من مكون أب إلى مكون فرعي.</p>
        </div>
      )}

      {lesson 'state' && (
        <div>
          <h2>📘 الدرس 4: State</h2>
          <Counter />
        </div>
      )}

      {lesson  'hooks' && (
        <div>
          <h2>📘 الدرس 5: Hooks</h2>
          <Timer />
        </div>
      )}

      {lesson  'conditional' && (
        <div>
          <h2>📘 الدرس 6: Conditional Rendering</h2>
          <LoginStatus isLoggedIn={true} />
          <LoginStatus isLoggedIn={false} />
        </div>
      )}
    </div>
  );
}

// مكون Counter لتوضيح State
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>القيمة: {count}</p>
      <button onClick={() => setCount(count + 1)}>زيادة</button>
      <button onClick={() => setCount(0)}>إعادة</button>
    </div>
  );
}

// مكون Timer لتوضيح useEffect
function Timer() {
  const [ticks, setTicks] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setTicks(t => t + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  return (
    <div>
      <p>الثواني: {ticks}</p>
      <button onClick={() => setRunning(true)}>ابدأ</button>
      <button onClick={() => setRunning(false)}>أوقف</button>
      <button onClick={() => { setRunning(false); setTicks(0); }}>إعادة</button>
    </div>
  );
}

// مكون LoginStatus لتوضيح العرض الشرطي
function LoginStatus({ isLoggedIn }) {
  return (
    <p>
      {isLoggedIn ? '✅ أنت مسجل الدخول' : '🔒 الرجاء تسجيل الدخول'}
    </p>
  );
}

export default App> 32b270c (تحديث شامل لملف App.js)
