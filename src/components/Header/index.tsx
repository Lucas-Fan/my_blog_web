import React from 'react';
// import Button from '@material-ui/core/Button';
import './index.scss';
import { NavLink } from 'react-router-dom';

interface Props {
  name?: string;
}

interface State {
  name?: string;
}

class Header extends React.Component<Props, State> {
  navList = [
    { l: '首页', v: 'home' },
    { l: '博客', v: 'blog' },
    { l: '关于', v: 'about' },
    { l: '友链', v: 'friend' },
  ];

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handleClick = (anchor: string) => () => {
    console.info(anchor);
  };

  render() {
    return (
      <nav className='header com-flex-between'>
        <div className='com-p'>logo</div>
        <ul>
          {this.navList.map((item) => (
            <li key={item.v} onClick={this.handleClick(item.l)}>
              <NavLink
                to={`/${item.v}`}
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red',
                }}
              >
                <span>{item.l}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Header;
