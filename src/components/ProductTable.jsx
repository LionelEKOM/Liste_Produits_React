import React from 'react'
import ProductCategoryRow from './products/ProductCategoryRow'
import ProductRow from './products/ProductRow'

export default function ProductTable({products}) {

    const row = []
    let lastCategory = null

    for(let product of products)  {
        if(product.category !== lastCategory) {
            row.push(<ProductCategoryRow key={product.category} name={product.category} />)
        }
        lastCategory = product.category
        row.push(<ProductRow key={product.name} product={product} />)
    }

  return (
    <table className='table'>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            {row}
        </tbody>
    </table>
  )
}
