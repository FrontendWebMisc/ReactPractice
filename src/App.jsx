import { College } from './components/College';
import { SubjectContext } from './context/ContextData';
import { useState } from 'react';

function App() {
  const [subject, setSubject] = useState('English');
  return (
    <div style={{ backgroundColor: 'yellow', padding: '10px' }}>
      {/* Using value=English to directly sending data (English) from App to
      Subject Component.  */}
      <SubjectContext.Provider value={subject}>
        {/* <select>
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select> */}

        {/* <select onChange={(event) => setSubject(event.target.value)}>
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select> */}

        {/* <select
          defaultValue={subject}
          onChange={(event) => setSubject(event.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select> */}

        <select
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select>
        <button onClick={() => setSubject('')}>Clear Subject</button>
        <College />
      </SubjectContext.Provider>
    </div>
  );
}

export default App;
