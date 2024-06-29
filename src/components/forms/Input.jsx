import React from 'react'
/**
 * 
 * @param {*} param0 
 * @returns 
 */
export default function Input({value, placeholder, onChange}) {
  return (
    <div>
      <input 
        type="text" 
        name="" 
        id="" 
        placeholder={placeholder}
        value={value}
        className="form-control"
        onChange={(e) => onChange(e.target.value)}
        />
    </div>
  )
}
