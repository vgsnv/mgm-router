import * as React from 'react';
import * as css from './SelectItem.less';

interface Props{
  selectStatus: boolean;
  onClick: () => void;
};

interface State{

};

export default class SelectItem extends React.Component<Props, State> {

  render(){

    const {
      selectStatus,
      onClick
    } = this.props;

    return (<div
              onClick = { onClick }
              className = { [css.item, selectStatus ? css.itemSelect : css.itemNonselect ].join(' ')}>
            </div>);

  };
};