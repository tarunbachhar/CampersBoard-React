import React from 'react'
import ReactDOM from 'react-dom'
import AllBoard from './components/AllBoard'
import Style from './style.css'

class App extends React.Component{
  render(){
    return(
      <div className="seven" style={Style}>
      <div className="oot" style={Style}>
       <AllBoard/>
       </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))
