import './App.css';
import AppRouting from './AppRouting';
import { Suspense } from 'react';


function App() {
  
  return (
    <Suspense  fallback={<div>Loading...</div>}>
    <div>
      <AppRouting/>
    </div>
    </Suspense>
  );
}

export default App;
