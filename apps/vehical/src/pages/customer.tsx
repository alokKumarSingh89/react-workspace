import React, { FC, useState } from 'react';
import Fleet from '../components/customers/Fleet';
import Commercial from '../components/customers/Commercial';
import Purchase, { CustomerType } from '../components/customers/Purchase';
import Layout from '../components/Layout';


const Customer = () => {
  const [step, setStep] = useState<number>(0);
  const [custmerType, setCustomerType] = useState(CustomerType.Commercial)
  return (
    <Layout>
      
      {step === 1 && custmerType === CustomerType.Fleet && <Fleet />}
      {step === 1 && custmerType === CustomerType.Commercial &&<Commercial />}
      {step === 0 && <Purchase custmerType={custmerType}/>}
    </Layout>
  );
};

export default Customer;
