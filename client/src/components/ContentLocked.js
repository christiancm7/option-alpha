import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ContentLocked extends Component {
    render() {
        return (
            <div>
                Page One
      <Link to='/pagetwo'>Link</Link>
            </div>
        )
    }
}
