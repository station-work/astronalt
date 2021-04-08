import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #fafafa;
  margin: 20px;
`

const RecipientInfo = ({ bank, accountName, bsb, accountNumber, reference }) => {
    return (
        <Container>
            <div>
                <h3>Bank</h3>
                <p>{bank}</p>
            </div>
            <div>
                <h3>Account name</h3>
                <p>{accountName}</p>
            </div>
            <div>
                <h3>BSB</h3>
                <p>{bsb}</p>
            </div>
            <div>
                <h3>Account number</h3>
                <p>{accountNumber}</p>
            </div>
            <div>
                <h3>Comment / Reference</h3>
                <p>{reference}</p>
            </div>
        </Container>
    )
}

export default RecipientInfo