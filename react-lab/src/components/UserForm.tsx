type Props = {
  formData: any
  setFormData: Function
  onSubmit: () => void
  onClear: () => void
}

const skillOptions = ["TypeScript", "React", "Node", "NoSQL"]

const UserForm = ({ formData, setFormData, onSubmit, onClear }: Props) => {
  const handleSkillChange = (skill: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.includes(skill) ? formData.skills.filter((s: string) => s !== skill) : [...formData.skills, skill]
    })
  }

  return (
    <div>
      <input value={formData.fullname} onChange={e => setFormData({ ...formData, fullname: e.target.value })} placeholder="Full Name" />
      <input type="number" value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} />
      <select
        value={formData.education}
        onChange={e => setFormData({ ...formData, education: e.target.value })}
      >
        <option value="">Select</option>
        <option>Grade school</option>
        <option>High school</option>
        <option>College</option>
      </select>

      {["Male", "Female", "Other"].map(g => (
        <label key={g}>
          <input type="radio" checked={formData.gender === g} onChange={() => setFormData({ ...formData, gender: g })} />
          {g}
        </label>
      ))}

      {skillOptions.map(skill => (
        <label key={skill}>
          <input type="checkbox" checked={formData.skills.includes(skill)} onChange={() => handleSkillChange(skill)} />
          {skill}
        </label>
      ))}

      <textarea value={formData} onChange={e => setFormData({ ...formData, bio: e.target.value })}></textarea>

      <button onClick={onSubmit}>Add / Save</button>
      <button onClick={onClear}>Clear</button>
    </div>
  )
}

export default UserForm