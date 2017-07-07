import * as React from 'react';
import * as css from './Row.less'

const Row = (props) => {
  return (
    <div className={css.row}>
      {props.children}
    </div>
  );
};

export default Row;