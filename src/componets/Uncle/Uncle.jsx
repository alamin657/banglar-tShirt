import React, { useContext } from 'react';
import Cousine from '../Cousine/Cousine';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Uncle</h2>
            <p><small>Grandpa money:{money}</small></p>
            <button style={{ color: 'red' }} onClick={() => setMoney(money + 1000)}>Send 1000tk</button>
            <section className="flex">
                <Cousine>Nabil</Cousine>
                <Cousine>Nabila</Cousine>
            </section>
        </div>
    );
};

export default Uncle;