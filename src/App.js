import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes/index.js';
import DefaultLayout from './components/layouts/DefaultLayout';
import 'react-markdown-editor-lite/lib/index.css';
import store from './redux/store.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import System from 'system/System.js';
import { ClipLoader } from 'react-spinners';
import './App.css'
import ScrollToTop from 'components/ScrollToTop.js';
import { ParallaxProvider } from 'react-scroll-parallax';
function App(props) {


  return (


    <Router >
      <ScrollToTop>

        <Provider store={store}>
          <div className="App">
            <ToastContainer />
            <Routes>
              {publicRoutes.map((route, index) => {
                const Layout = route.layout === null ? 'div' : DefaultLayout;
                const Page = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
              <Route
                path='/system/*'
                element={
                  <System />
                }
              />
            </Routes>
          </div>
        </Provider>
      </ScrollToTop>
    </Router>
  )

}


export default App;
