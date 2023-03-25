import RoutesApp from './router';

import AuthProvider from './context/Auth';

function App() {

  return (
    <div className="App">
      <AuthProvider>
       <RoutesApp/>
      </AuthProvider>
    </div>
  )
}

export default App
