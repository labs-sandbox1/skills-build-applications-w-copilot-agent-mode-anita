import React from 'react';
import { Table, Card } from 'react-bootstrap';

const Users = ({ users }) => (
  <Card className="mb-4">
    <Card.Header as="h5">Users</Card.Header>
    <Card.Body>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user, idx) => (
              <tr key={user.id || idx}>
                <td>{idx + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.team}</td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="4" className="text-center">No users found.</td></tr>
          )}
        </tbody>
      </Table>
    </Card.Body>
  </Card>
);

export default Users;
