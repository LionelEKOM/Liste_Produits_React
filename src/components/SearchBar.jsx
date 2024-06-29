import React from 'react'
import Checkbox from './forms/Checkbox'
import Input from './forms/Input'

export default function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {
  return (
    <div>
      <div className="mb-3">
        <Input 
            value={search}
            onChange={onSearchChange}
            placeholder='Rechercher...'
        />
        <Checkbox id={'stocked'} checked={showStockedOnly} onChange={onStockedOnlyChange} label={"N'afficher que les produits en stock"} />
      </div>
    </div>
  )
}
