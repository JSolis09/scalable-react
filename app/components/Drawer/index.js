import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import * as styles from './styles.css';

function Drawer({ items, selectItem, itemLabelAttr, itemKeyAttr, isDrawerOpen }) {
  const itemNodes = items.map(item => {
    const url = `/topics/${item[itemKeyAttr]}`;
    return (
      <Link
        role="none"
        className="item"
        key={item[itemKeyAttr]}
        onClick={() => selectItem(item)}
        to={url}>
          {item[itemLabelAttr]}
      </Link>
    )
  });
  return (
    <div className={classNames('drawer', { 'drawerOpen': isDrawerOpen })}>
      {itemNodes}
    </div>
  );
}

Drawer.propTypes = {
  items: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired,
  itemLabelAttr: PropTypes.string.isRequired,
  itemKeyAttr: PropTypes.string.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};

export default Drawer;
