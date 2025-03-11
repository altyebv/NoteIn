import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
    <Router>
    <Navbar />
    <div className="body flex md:flex-row h-screen"> 
      <Sidebar />
      <Content />
    </div>
      <Footer />
    </Router>
    </Provider>
  )
}

export default App
