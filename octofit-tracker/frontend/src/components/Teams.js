import React from 'react';
import { Table, Card } from 'react-bootstrap';

const Teams = ({ teams }) => (
  <Card className="mb-4">
    <Card.Header as="h5">Teams</Card.Header>
    <Card.Body>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams && teams.length > 0 ? (
            teams.map((team, idx) => (
              <tr key={team.id || idx}>
                <td>{idx + 1}</td>
                <td>{team.name}</td>
                <td>{team.members ? team.members.join(', ') : ''}</td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="3" className="text-center">No teams found.</td></tr>
          )}
        </tbody>
      </Table>
    </Card.Body>
  </Card>
);

export default Teams;
