import React, { Component } from 'react'

import {
  Header,
  BorderedNav
} from './SelectStyle'

export default class SelectHander extends Component {
  constructor(props) {
    super(props)
    this.handleSwich = this.handleSwich.bind(this)
    this.state = {
      dir: 'left',
      delayDir: 'left'
    }
  }
  render() {
    return (
      <Header>
        <BorderedNav dir={this.state.dir} delayDir={this.state.delayDir}>
          <div onClick={() => this.handleSwich('left')}>推荐音乐</div>
          <div onClick={() => this.handleSwich('middle')}>热歌</div>
          <div onClick={() => this.handleSwich('right')}>搜索</div>
        </BorderedNav>
      </Header>
    )
  }

    handleSwich(dir) {
    this.setState({
      dir
    })
    setTimeout(() => {
      this.setState({
        delayDir: dir
      })
    }, 200)

    this.props.onSwitch(dir)
  }
}
