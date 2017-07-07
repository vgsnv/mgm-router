import * as React from 'react';

import * as css from './InputText.less';

interface Props{
  maxLength?: number;
  value: string;
  onChange?: (value: string, auto?: boolean) => void;
};

interface State{
  title: string;
};

export default class InputText extends React.Component<Props, State> {

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
      type="text"
      value={value}
      onChange={this.handleInputChange} />
  );

  };
};