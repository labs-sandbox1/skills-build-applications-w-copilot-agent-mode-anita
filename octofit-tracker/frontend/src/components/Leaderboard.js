import React from 'react';
import { Table, Card } from 'react-bootstrap';

const Leaderboard = ({ leaderboard }) => (
  <Card className="mb-4">
    <Card.Header as="h5">Leaderboard</Card.Header>
    <Card.Body>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard && leaderboard.length > 0 ? (
            leaderboard.map((entry, idx) => (
              <tr key={entry.id || idx}>
                <td>{idx + 1}</td>
                <td>{entry.user}</td>
                <td>{entry.points}</td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="3" className="text-center">No leaderboard data.</td></tr>
          )}
        </tbody>
      </Table>
    </Card.Body>
  </Card>
);

export default Leaderboard;
