import React from 'react';

import Header from '../components/Header'
import InvoiceInfo from '../components/InvoiceInfo'
import CompanyInfo from '../components/CompanyInfo'
import RecipientInfo from '../components/RecipientInfo'


const MyInvoicePDF = () => {
    return (
        <div>
            <CompanyInfo
                name={"Company"}
                cnpj={"0000000000"}
                address={"00000000"}
                city={"000000"}
                phone={"+55 0000000000"}
                email={"contact@sample.com"}
            />
            <CompanyInfo
                name={"Contact"}
                abn={"00000000000"}
                address={"000000000000000 00000000"}
                city={"00000"}
                phone={"+61 00 00000000000"}
                email={"contact@sample.com"}
            />
            <InvoiceInfo
                description="Description"
                hours={10}
                rate={20}
            />
            <RecipientInfo
                bank={"BANK"}
                accountName={"account name"}
                bsb={"000 0000"}
                accountNumber={"000000000"}
                reference={"Name"}
            />
        </div>
    )
}

export default function PagePrint() {

    return (
        <>
            <Header />
            <MyInvoicePDF/>
        </>
    )
}