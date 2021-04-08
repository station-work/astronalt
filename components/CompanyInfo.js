import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #fafafa;
  margin: 20px;
`

const CompanyInfo = ({ name, cnpj, abn, address, city, phone, email }) => {
    return (
        <Container>
            <div>
                <h3>{name}</h3>
                <p>{cnpj ? `CNPJ: ${cnpj}` : `ABN: ${abn}`}</p>
            </div>
            <div>
                <p>{address}</p>
                <p>{city}</p>
            </div>
            <div>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </Container>
    )
}

export default CompanyInfo