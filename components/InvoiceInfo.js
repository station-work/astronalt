import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #d9d9d9;
  margin: 20px;
`

const InvoiceInfo = ({ description, hours, rate }) => {
    return (
        <Container>
            <div>
                <h3>Descriptions</h3>
                <p>{description}</p>
            </div>
            <div>
                <h3>Hours</h3>
                <p>{hours}</p>
            </div>
            <div>
                <h3>Rate</h3>
                <p>{`A$ ${rate.toFixed(2)}`}</p>
            </div>
            <div>
                <h3>Sub Total</h3>
                <p>{}</p>
                <p>{`A$ ${(rate*hours).toFixed(2)}`}</p>
            </div>
        </Container>
    )
}

export default InvoiceInfo