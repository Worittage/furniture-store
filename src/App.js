import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: '',
          desc: 'Tudeli',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: '',
          desc: 'Tudeli',
          category: 'tables',
          price: '149.00'
        },
        {
        id: 3,
        title: 'Стол',
        img: '',
        desc: 'Tudeli',
        category: 'tables',
        price: '549.99'
      },
      {
        id: 4,
        title: 'Стол',
        img: '',
        desc: 'Tudeli',
        category: 'tables',
        price: '25.00'
      },
      {
        id: 5,
        title: 'Стол',
        img: '',
        desc: 'Tudeli',
        category: 'tables',
        price: '149.00'
      }
      ]
    }
  }
 render() {
  return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items} />
      <Footer />
    </div>
  )
 }
 } 

 export default App