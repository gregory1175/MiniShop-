import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { About } from "./pages/AboutPage";
import { Navigation } from "./components/Navigation/Navigation";
function App() {
 return (
  <>
  <Navigation></Navigation>
<Routes>
  <Route path="/" element={ <ProductsPage /> }/>
  <Route path="/about" element={ <About /> }/>
</Routes>
</>
 )
}
export default App;
