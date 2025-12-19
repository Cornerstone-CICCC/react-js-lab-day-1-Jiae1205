import type { User } from '../types/User';

const UserProfile = ({ user }: { user: User | null }) => {
  if (!user) return <p>No user selected!</p>

  return (
    <div>
      <h3>{user.fullname}</h3>
      <p>Age: {user.age}</p>
      <p>Education: {user.education}</p>
      <p>Gender: {user.gender}</p>
      <p>Skills: {user.skills.join(', ')}</p>
      <p>{user.bio}</p>
    </div>
  )
}

export default UserProfile