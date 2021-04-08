import React from 'react';
import styled from 'styled-components';
import {Puff} from 'svg-loaders-react';

import {colors} from '../styles/theme';

const Button = styled.button`
  padding: 10px;
  background-color: ${colors.dark};
  color: ${colors.light};
  border-radius: 4px;
  border: solid ${colors.dark} 1px;
  margin: 10px;
  cursor: pointer;
`;

const ContainerLoading = styled.div`
  display: flex;
  align-self: center;
  width: 50px;
`;

const ContainerButton = props => {
  const {isLoading, isDark} = props;
  const colorSelected = isDark ? colors.light : colors.success;
  if (isLoading) {
    return (
      <ContainerLoading>
        <Puff
          width={30}
          height={50}
          fill={colorSelected}
          stroke={colorSelected}
        />
      </ContainerLoading>
    );
  }

  return (
    <div>
      <Button {...props} />
    </div>
  );
};

export default ContainerButton;
