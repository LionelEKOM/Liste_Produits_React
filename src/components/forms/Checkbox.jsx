import React from 'react'

export default function Checkbox({checked, onChange, label, id}) {
  return (
    <div className='form-check my-2'>
      <input 
        type="checkbox" 
        name="" 
        id={id}
        checked={checked}
        className="form-check-input" 
        onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id} className="form-check-label">
            {label}
        </label>
    </div>
  )
}
