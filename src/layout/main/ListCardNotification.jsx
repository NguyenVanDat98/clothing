import React from "react";
import CardNotification from "../../component/CardNotification";
import "../../style/index.scss";
import { useSelector} from 'react-redux';
import storeState from "../../common/storeState";
import { observer } from "mobx-react"


const ListCardNotification = ({ data }) => {
  let change = useSelector(ee=>ee.state)

  return (
    <div
      style={{ display: storeState.statusDisplay ? "block" : "none" }}
      className="list-notification"
    ><section>
      {data &&
        data.map(({ name, price, id, count, imgg }, index) => (
          <CardNotification
            key={index}
            name={name}
            price={price}
            imgg={imgg}
            id={id}
            count={count}
          />
        ))}

    </section>

      <div className="preview-total">
        <p>Total : $ {change.totalBill} </p>
        <button>Payment</button>
      </div>
    </div>
  );
};

export default observer(ListCardNotification);
