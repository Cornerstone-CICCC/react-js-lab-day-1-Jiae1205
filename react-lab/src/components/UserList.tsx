import  type{ User } from '../types/User';

type Props = {
  users: User[]
  onView: (user: User) => void
  onEdit: (user: User) => void
  onDelete: (id: number) => void
}

const UserList = ({ users, onView, onEdit, onDelete }: Props) => (
  <table>
    <tbody>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.fullname}</td>
          <td>{user.id}</td>
          <td>
            <button onClick={() => onView(user)}>View</button>
            <button onClick={() => onEdit(user)}>Edit</button>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default UserList