import React, { Component } from 'react'
import { HotNav } from './HotStyled'
export default class extends Component {
    render() {
        return (
            <HotNav>               
                <div className="hotopct">
                    <div className="u-hmsprt hoticon"></div>
                    <div className="hottime">更新日期：04月04日</div>
                </div>               
            </HotNav>
        )
    }
}
