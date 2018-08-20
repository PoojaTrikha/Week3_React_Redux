import React, { PureComponent } from 'react'

export default class User extends PureComponent {
  state = { active: true }

  toggle = () => {
    this.setState({
      active: !this.state.active 
    })
  }

  

  render() {
   

    return (<div>
      <p>{ this.props.names } is <b>{ this.state.active ? '' : 'not' }</b>Present</p>
      <button onClick={this.toggle}>Toggle</button>
    </div>)
  }
}