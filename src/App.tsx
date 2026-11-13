import Jokes from './components/Jokes';
import jokesData from './components/jokesData';
import './App.css'

function App() {
  const jokeElement = jokesData.map((joke) => {
    return <Jokes
           setup={joke.setup}
           punchline={joke.punchline}
          />
  })
  return (
      <main>
        {jokeElement}
      </main>
  )
}
 

export default App
