import React from "react";
import CardNotification from "../../component/CardNotification";
import "../../style/index.scss";
import { storeState, observer } from '../../common';

const ListCardNotification = ({ data }) => {
  return (
    <div
      style={{ display: storeState.statusDisplay ? "block" : "none" }}
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

export default observer(ListCardNotification);
