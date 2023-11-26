import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
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

    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)


  }
 render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Items items={this.state.items} onAdd={this.addToOrder}/>
      <Footer />
    </div>
  )
 }

 deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
 }

 addToOrder(item) {
  let isInArray = false
  this.state.orders.forEach(el => {
    if(el.id === item.id)
    isInArray = true
  })
  if(!isInArray)
    this.setState({orders: [...this.state.orders, item] })
 }

 } 

 export default App