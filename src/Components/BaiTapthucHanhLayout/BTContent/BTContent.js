import React, { Component } from 'react'
import BTCarousel from './BTCarousel'
import BTProductList from './BTProductList'

export default class BTContent extends Component {
    render() {
        return (
            <div className="container">
                <BTCarousel />
                <BTProductList />
            </div>
        )
    }
}
