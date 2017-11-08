import React from 'react'
import $ from 'jquery'

class Alltime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: ''
    };
  }
  componentDidMount() {
    var self = this;
    $.getJSON("https://fcctop100.herokuapp.com/api/fccusers/top/alltime", function(data) {
      self.setState({
        all: data
      });
    });
  }
  render() {
    var combine;
    if (this.state.all) {
      combine = this.state.all.map(function(a, b) {
        return (
          <tr><td>{b+1}</td><td>{a.username}</td><td>{a.recent}</td>
      <td>{a.alltime}</td></tr>
        );
      });
    } else {
      combine = this.state.all;
    }
    return (
      <tbody>{ combine }</tbody>
    );
  }
}

module.exports = Alltime
