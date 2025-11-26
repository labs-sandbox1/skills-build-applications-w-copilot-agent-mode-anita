
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  // Demo/mock data for UI preview
  const [view, setView] = useState('activities');
  const activities = [
    { name: 'Morning Run', type: 'Cardio', date: '2025-11-25', duration: 30 },
    { name: 'Yoga', type: 'Flexibility', date: '2025-11-24', duration: 45 },
  ];
  const leaderboard = [
    { user: 'alice', points: 120 },
    { user: 'bob', points: 110 },
  ];
  const teams = [
    { name: 'Team Alpha', members: ['alice', 'bob'] },
    { name: 'Team Beta', members: ['carol'] },
  ];
  const users = [
    { username: 'alice', email: 'alice@example.com', team: 'Team Alpha' },
    { username: 'bob', email: 'bob@example.com', team: 'Team Alpha' },
    { username: 'carol', email: 'carol@example.com', team: 'Team Beta' },
  ];
  const workouts = [
    { name: 'Push Ups', type: 'Strength', duration: 10 },
    { name: 'Cycling', type: 'Cardio', duration: 60 },
  ];

  return (
    <div className="App bg-light min-vh-100">
      <Navbar bg="white" expand="lg" className="mb-4 shadow-sm">
        <Container>
          <Navbar.Brand href="#" className="fw-bold text-gradient">OctoFit Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setView('activities')}>Activities</Nav.Link>
              <Nav.Link onClick={() => setView('leaderboard')}>Leaderboard</Nav.Link>
              <Nav.Link onClick={() => setView('teams')}>Teams</Nav.Link>
              <Nav.Link onClick={() => setView('users')}>Users</Nav.Link>
              <Nav.Link onClick={() => setView('workouts')}>Workouts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <h1 className="mb-4 display-5 fw-bold text-gradient">{view.charAt(0).toUpperCase() + view.slice(1)}</h1>
        {view === 'activities' && <Activities activities={activities} />}
        {view === 'leaderboard' && <Leaderboard leaderboard={leaderboard} />}
        {view === 'teams' && <Teams teams={teams} />}
        {view === 'users' && <Users users={users} />}
        {view === 'workouts' && <Workouts workouts={workouts} />}
      </Container>
    </div>
  );
}

export default App;
