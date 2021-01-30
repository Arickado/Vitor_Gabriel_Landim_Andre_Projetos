import React from "react";
import { connect } from "react-redux";

const CarShop = ({roupa}) => {
  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <ul>
        {roupa.map(item => (
          <li key={item.id}>{item.cor} | {item.tamanho} | {item.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect((state) => ({
    roupa: state.roupas.roupa
}))(CarShop);
