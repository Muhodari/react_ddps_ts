import React from 'react';

// Styles
import { Wrapper, Content } from './Grid.styles';
import { type } from 'os';

type Props = {
  header:string;

}

const Grid:React.FC<Props> = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);


export default Grid;
