import Header from "./components/header"
import Pfp from "./components/pfp"
import Cards from "./components/card"

function App() {
  return (
    <>
      <div className="body">
        <div className="header">
          <Header/>
        </div>
        <main className="main">
          <Pfp/>
          <Cards/>
        </main>
      </div>

    </>
  )
}

export default App
