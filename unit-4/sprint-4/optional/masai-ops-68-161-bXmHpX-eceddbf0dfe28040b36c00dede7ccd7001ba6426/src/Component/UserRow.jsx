import React from "react";

const UserRow = ({ name, gender, role, maritalStatus, id }) => {
  return <>
     <table border="1px solid black">
        <thead>
          <tr>
            <th>S.no</th>
            <th>User</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Martial Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{role}</td>
            <td>{maritalStatus}</td>
          </tr>
        </tbody>
     </table>
  </>;
};
export { UserRow };
