import React, { Component } from 'react';
import Axios from 'axios';
import Header from '../components/Header';
import Router from '../components/Router';
import Produto from '../components/Produto';
import Footer from '../components/Footer';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      produto: [],
      counter: 0
    };
  }

  handleChildClick(name){
    console.log(name);
    this.setState({
      counter: this.state.counter + 1
    })
  }

  componentDidMount(){
    Axios.get('http://localhost:4000/produto')
    .then(response => {
      const {data} = response;
      data.map((item, k) => {
        this.setState({
          produto: item
        })
      })
    })
  }

  render() {
    return (
      <div>
        <Header badges={this.state.counter} />
        <Router />
        <Produto handleClick={this.handleChildClick.bind(this)} produto={this.state.produto}/>
        <Footer />
      </div>
    );
  }
}

export default Home;
