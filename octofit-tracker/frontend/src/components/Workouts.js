import React from 'react';
import { Table, Card } from 'react-bootstrap';

const Workouts = ({ workouts }) => (
  <Card className="mb-4">
    <Card.Header as="h5">Workouts</Card.Header>
    <Card.Body>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Duration (min)</th>
          </tr>
        </thead>
        <tbody>
          {workouts && workouts.length > 0 ? (
            workouts.map((workout, idx) => (
              <tr key={workout.id || idx}>
                <td>{idx + 1}</td>
                <td>{workout.name}</td>
                <td>{workout.type}</td>
                <td>{workout.duration}</td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="4" className="text-center">No workouts found.</td></tr>
          )}
        </tbody>
      </Table>
    </Card.Body>
  </Card>
);

export default Workouts;
