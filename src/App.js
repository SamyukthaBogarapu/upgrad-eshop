import './App.css';
import './Footer';
import Footer from './Footer';
import Home from './components/home/Home'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "sign-up",
                element: <SignUpPage />
            }
        ]
    },
]);
function App() {
  return (
    <div className="App">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
