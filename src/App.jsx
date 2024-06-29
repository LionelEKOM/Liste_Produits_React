import { useState } from "react"
import PRODUCT from "./components/Element"
import ProductTable from "./components/ProductTable"
import SearchBar from "./components/SearchBar"

function App() {

  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch] = useState("")
  const visibleProducts = PRODUCT.filter(
    product => {
      if (showStockedOnly && !product.stocked) {
        return false
      }

      if (search && !product.name.includes(search)) {
        return false
      }
      return true
    }
  )

  return (
    <div className="container my-4">
      <SearchBar 
        showStockedOnly = {showStockedOnly} 
        onStockedOnlyChange = {setShowStockedOnly} 
        search = {search}
        onSearchChange = {setSearch}
      />
      <ProductTable products={visibleProducts} />
    </div>
  )
}

export default App
