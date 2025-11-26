import React from 'react';
import { Table, Card } from 'react-bootstrap';

const Activities = ({ activities }) => (
  <Card className="mb-4">
    <Card.Header as="h5">Activities</Card.Header>
    <Card.Body>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Date</th>
            <th>Duration (min)</th>
          </tr>
        </thead>
        <tbody>
          {activities && activities.length > 0 ? (
            activities.map((activity, idx) => (
              <tr key={activity.id || idx}>
                <td>{idx + 1}</td>
                <td>{activity.name}</td>
                <td>{activity.type}</td>
                <td>{activity.date}</td>
                <td>{activity.duration}</td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="5" className="text-center">No activities found.</td></tr>
          )}
        </tbody>
      </Table>
    </Card.Body>
  </Card>
);

export default Activities;
