import React, { Component } from 'react';
import './index.scss';

interface Props {
  name?: string;
}

class Layout extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return <div className='home-layout'>{children}</div>;
  }
}

export default Layout;
