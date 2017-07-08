import * as React from 'react';
import * as css from './Header.less';

import * as uc from 'components/General';

export interface Props {
}

export interface Dispatch {
}

export interface State {
}

export class Header extends React.Component<Props & Dispatch, State>{

  render(){

    return(<uc.Row>
          <header id={css.header} >
            <uc.Row>
              <h1>Managment Routes</h1>
            </uc.Row>
          </header> 
      </uc.Row>);
  }
};