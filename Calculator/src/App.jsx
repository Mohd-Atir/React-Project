import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components'


function App() {
  return (
    <>
          <div className="d-flex bg-secondary justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="card bg-black">
              <div className="card-body">
                <Header/>
              </div>
            </div>
          </div>
    </>
  )
}

export default App
