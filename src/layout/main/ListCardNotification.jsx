import React from "react";
import CardNotification from "../../component/CardNotification";
import "../../style/index.scss";
import { useSelector} from 'react-redux';
import storeState from "../../common/storeState";
import { observer } from "mobx-react"


const ListCardNotification = () => {
  let change = useSelector(ee=>ee)

  return (
    <div
      style={{ display: storeState.statusDisplay ? "block" : "none" }}
      className="list-notification"
    ><section>
      {change.todosList.dataUser &&
        change.todosList.dataUser.map(({ name, price, id, count, imgg }, index) => (
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
        <p>Total : $ {change.state.totalBill} </p>
        <button>Payment</button>
      </div>
    </div>
  );
};

export default observer(ListCardNotification);
