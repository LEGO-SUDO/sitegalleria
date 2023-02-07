import Footer from './components/Footer'
import Legends from './components/Legends'
//import Legends from './components/Legends'
import Navbar from './components/Navbar'
//import Profile from './components/Profile'
import Options from './components/Options'
import Profile from './components/Profile'
import Question from './components/Question'
import QuestionPallette from './components/QuestionPallette'
//import QuestionPallette from './components/QuestionPallette'
import Sections from './components/Sections'
function App() {
  return (
    <div className='h-screen '>
      <Navbar />
      <div className='flex flex-row w-full' style={{ height: '90%' }}>
        <div className='flex flex-col w-5/6 '>
          <Sections />

          <Question />
          <Options />
        </div>
        <div className='m-1 w-1/6'>
          <Profile />
          <QuestionPallette />
          <Legends />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
