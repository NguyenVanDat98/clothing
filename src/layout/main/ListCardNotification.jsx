import React from "react";
import CardNotification from "../../component/CardNotification";
import { useSelector} from 'react-redux';
import storeState from "../../common/storeState";
import { observer } from "mobx-react"
import "../../style/index.scss";


const ListCardNotification = () => {
  let change = useSelector(state=>state.state)
  let changeS = useSelector(state=>state.todosList)
  return (
    <div
      style={{ display: storeState.statusDisplay ? "block" : "none" }}
      className="list-notification"
    ><section>
      {changeS.dataUser.map(({ id }, index) => (
          <CardNotification
            key={index}
            id={id}
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
