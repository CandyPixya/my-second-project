import Info from "../Info/Info"
import About from "../About/About"
import Interests from "../Interests/Interests"
import Footer from "../Footer/Footer"
function App() {
  // Component should return JSX there is no return clause!!!
  // This does not mean anything 
  return (
    <div>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App