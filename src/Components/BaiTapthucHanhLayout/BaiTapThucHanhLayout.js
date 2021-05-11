import React, { Component } from 'react'
import BTContent from './BTContent/BTContent'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <BTContent />
                <BTFooter />
            </div>
        )
    }
}
