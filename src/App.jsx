import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>Employee Portal</h1>

        <h3>Welcome to Employee Portal</h3>

        <p>
          This application is developed for learning DevOps CI/CD using
          Harness.
        </p>

        <button>Login</button>
      </div>

      <Footer />
    </>
  );
}

export default App;