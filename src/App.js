
import { Route, Switch } from 'wouter';
import './App.css';
import { InfoPage } from './components/InfoPage';
import { SearchContentGrid } from './components/SearchContentGrid'
import { Home } from './components/Home';

import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Trends } from './components/Trends';

function App() {

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <section className="App-contenedor">
          <Switch>
            <Route 
              component={SearchContentGrid}
              path="/search/:keyword" />
            <Route
              component={Home}
              path="/" />
            <Route
              component={InfoPage}
              path="/:type/:id" />
            <Route
              component={Trends}
              path="/sort/popular/:kind" />
          </Switch>  
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
