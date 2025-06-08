import Arena from "./components/Arena"
import Characters from "./components/Characters"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"


export default function App () {
  return (
    <div>
      <Header/>
      <Hero/>
      <Characters/>
      <Arena/>
      <Footer/>
    </div>
  )
}