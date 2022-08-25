import React from "react";
import CardNotification from "../../component/CardNotification";
import { useSelector} from 'react-redux';
import storeState from "../../common/storeState";
import { observer } from "mobx-react"
import "../../style/index.scss";
import { selectShop } from "../../common/common";

const ListCardNotification = () => {
  let state = useSelector(selectShop)
  return (
    <div
      style={{ display: storeState.statusDisplay ? "block" : "none" }}
      className="list-notification"
    ><section>
      {state.dataUser.map((item, index) => (
          <CardNotification
            key={index}
            dataItem={item }
          />
        ))}

    </section>

      <div className="preview-total">
        <p>Total : $ {state.totalBill()} </p>
        <button>Payment</button>
      </div>
    </div>
  );
};

export default observer(ListCardNotification);
