import * as React from 'react';

import * as css from './InputNumber.less';

interface Props{
  maxLength?: number;
  value: number;
  onChange?: (value: number, auto?: boolean) => void;
};

interface State{
  title: string;
};

export default class InputNumber extends React.Component<Props, State> {

  protected handleInputChange = (event) => {
    const target = event.target;    
    this.props.onChange(target.value);
  }

  render(){
    
    const {
      value,
      onChange
    } = this.props;

  return (
    <input
      className={css.customInput}
      type="number"
      value={value}
      onChange={this.handleInputChange} />
  );

  };
};