import { Navbar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Hello World"/>
    </>
  )
}
export default App;