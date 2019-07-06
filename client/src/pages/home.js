import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return (
      <div id='Home'>
        <section>
          <Link to='/registration'>
            <button>
                let's get started
            </button>
          </Link>
        </section>
      </div>
    )
  }
}

export default Home
