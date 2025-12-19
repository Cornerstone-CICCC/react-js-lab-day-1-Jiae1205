import { useState } from 'react'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import UserProfile from './components/UserProfile'
import type { User } from './types/User'

const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [formData, setFormData] = useState<Omit<User, 'id'>>({
    fullname: "",
    age: 0,
    education: "",
    gender: "",
    skills: [],
    bio: ""
  })

  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [editingUserId, setEditingUserId] = useState<number | null>(null)

  const handleSubmit = () => {
    if (editingUserId === null) {
      setUsers([...users, { id: Date.now(), ...formData }])
    } else {
      setUsers(users.map(u =>
        u.id === editingUserId ? { id: editingUserId, ...formData } : u
      ))
      setEditingUserId(null)
    }
    handleClear()
  }

  const handleClear = () => {
    setFormData({
      fullname: "",
      age: 0,
      education: "",
      gender: "",
      skills: [],
      bio: ""
    })
  }

  return (
    <>
      <UserForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        onClear={handleClear}
      />

      <UserList
        users={users}
        onView={setSelectedUser}
        onEdit={(user) => {
          setFormData(user)
          setEditingUserId(user.id)
        }}
        onDelete={(id) =>
          setUsers(users.filter(user => user.id !== id))
        }
      />

      <UserProfile user={selectedUser} />
    </>
  )
}

export default App
