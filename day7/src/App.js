import logo from './logo.svg';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import './App.css';
import TryCatch from './components/TryCatch';
import ComponentLifeCycle from './components/ComponentLifeCycle';
import LifecycleFunctional from './components/LifeCycleFunctional';
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
      <TryCatch fruit="Onion" />
      <ComponentLifeCycle />
      <LifecycleFunctional />
    </div>
  );
}

export default App;
