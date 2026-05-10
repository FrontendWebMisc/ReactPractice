import { useContext } from 'react';
import { SubjectContext } from '../context/ContextData';

export function Subject() {
  const subject = useContext(SubjectContext);
  return (
    <div style={{ backgroundColor: 'red', padding: '10px' }}>
      <h1>Subject is: {subject}</h1>
    </div>
  );
}
