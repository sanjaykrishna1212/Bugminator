import { Link,Outlet } from "react-router-dom"

const Products = () => {
  return (
    <div>
          <h1>This page is Product</h1>

          <input type="text" id="search"  placeholder='Search Product' />
          <nav>
            <Link to={"history"}>History</Link>
            <Link to={"new"}>New</Link>
          </nav>
          <Outlet/>
    </div>
  )
}

export default Products
