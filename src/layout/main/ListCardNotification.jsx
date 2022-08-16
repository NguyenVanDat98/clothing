import React from "react";
import CardNotification from "../../component/CardNotification";
import "./styleCard/listCadNof.scss";
import { observer } from "mobx-react"
import storeState from "../../common/storeState";

const ListCardNotification = ({ data, status }) => {
  return (
    <div
      style={{ display: status ? "block" : "none" }}
      className="list-notification"
    ><section>
      {data &&
        data.map(({ name, price, id, coust, imgg }, index) => (
          <CardNotification
            key={index}
            name={name}
            price={price}
            imgg={imgg}
            id={id}
            coust={coust}
          />
        ))}

    </section>

      <div className="preview-total">
        <p>Total : $ {storeState.total} </p>
        <button>Payment</button>
      </div>
    </div>
  );
};

export default ListCardNotification;
