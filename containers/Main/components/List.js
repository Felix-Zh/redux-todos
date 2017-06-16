import React from 'react';
import cn from 'classnames';
import styles from '../main.scss';


export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;

    return (
      <div>
        <ul>
          {
            props.todos.map(
              (todo, idx) => <Item key={idx} {...todo} onClick={() => props.onToggleTodo(idx)} />
            )
          }
        </ul>
      </div>
    );
  }
}


// sub components
const Item = ({ text, completed, onClick }) => (
  <li onClick={onClick}>
    <span className={cn({ [styles['item-completed']]: completed })}>{text}</span>
  </li>
);
