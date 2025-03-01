import axios from 'axios';



const App = () => {
    axios.get('https://api.quotable.io/random')
    .then(res =>  {
      console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  
  export default App;