import React from 'react'
import Alltime from './Alltime'
import Current from './Current'


class AllBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true //True stand for all the time
    };
    this.setCurrent = this.setCurrent.bind(this);
    this.setAll = this.setAll.bind(this);
  }
  setCurrent(){
    console.log("Current");
     this.setState({toggle:false});
  }
  setAll (){
    console.log("all");
    this.setState({toggle:true});
  }
  render() {
    return (<table className="table table-hover ">
       <thead className="thead-default"><tr><td className="rank">#Rank</td><td className="name">Name</td><td className="current"><a href="javascript:void(0)" onClick={this.setCurrent}>Points in 30 Days</a></td><td className="alltime"><a href="javascript:void(0)" onClick={this.setAll}>Points All the Time</a></td>
       </tr></thead>
        { this.state.toggle ? <Alltime />:<Current /> }
       </table>);
  }
}

module.exports = AllBoard
