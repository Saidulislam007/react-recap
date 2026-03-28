import './App.css'
import BannerImage from './Component/BannerImage'
import Footer from './Component/Footer'
import Models from './Component/Models'
import Navbar from './Component/Navbar'

const models = async () => {
  const res = await fetch("/public/models.json");
  return res.json();
};

const modelsPromise = models();


function App() {
  

  return (
    <>
      <Navbar />

      <BannerImage />

      <Models modelsPromise={modelsPromise} />

      <Footer />
    </>
  )
}

export default App
