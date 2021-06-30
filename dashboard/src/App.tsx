import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router';
import { DashboardLayout } from './presentation/views/DashboardLayout';

export function App() {
  return (
    <Switch>
          <Route exact path="/" component={DashboardLayout} />
          <Route exact path="/dashboard" component={DashboardLayout} />
          <Route exact path="/search" component={DashboardLayout} />
    </Switch>
  );
}

export default App;
