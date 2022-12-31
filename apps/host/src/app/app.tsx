import { loadRemoteModule } from '@reachens/load-remote-module';
import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';


const Dashboard = React.lazy(() => loadRemoteModule('dashboard', './Module'));
const Admin = React.lazy(() => loadRemoteModule("admin", './Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/admin">Admin</Link>
        </li>

      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/admin" element={<Admin />} />

      </Routes>
    </React.Suspense>
  );
}

export default App;
