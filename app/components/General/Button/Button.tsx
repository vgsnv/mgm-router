import * as React from 'react';
import * as css from './Button.less';

interface Props{
  title: string;
  onClick: () => void;
  type: ButtonType;
};

interface State{

};

export enum ButtonType {
  ENABLED,
  DISABLED,
};

export default class Button extends React.Component<Props, State> {

  private getTypeClassName(){

    const type = this.props.type;

    switch(type){
      case ButtonType.ENABLED:
        return css.btnEnabled
      case ButtonType.DISABLED:
        return css.btnDisabled
      default:
        return css.btnEnabled
    }
    
  }

  render(){
    
    const {
      title,
      onClick,
    } = this.props;

    const getTypeClassName = this.getTypeClassName();

    return(
      <button onClick = { onClick } className={ getTypeClassName }>{ title }</button>
    );

  };
};