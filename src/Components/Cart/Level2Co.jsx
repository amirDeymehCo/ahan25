import { useState } from "react";
import { Level1Section } from "./CartStyles";
import ResultCart from "./ResultCart/ResultCart";
import FormOwner from "./FormOwner/FormOwner";
import OrderServices from "../../Services/order";
import { useDispatch } from "react-redux";
import { deleteAll } from "../../redux/slices/cartSlice";

const Level2Co = ({ orderId, setUpdateDataCart }) => {
  // data text value inputs form owner
  const [name, setName] = useState("");
  const [nameAccount, setNameAccount] = useState("");
  const [numberAccount, setNumberAccount] = useState("");
  const [numberShaba, setNumberShaba] = useState("");
  const [address, setAddress] = useState("");
  const [checkType, setCheckType] = useState(1);
  const dispatch = useDispatch();
  const handelSendOwner = (event) => {
    event.preventDefault();
    const data = {
      orderId,
      owner: {
        type: checkType,
        addressString: address,
        receiver: name,
        bankAccountShaba: numberShaba,
        bankAccountNumber: numberAccount,
        bankAccountOwner: nameAccount,
      },
    };
    OrderServices.owner(data, (res) => {
      if (res.code === 200) {
        dispatch(deleteAll());
      }
      alert(res.msg);
    });
  };

  return (
    <form onSubmit={handelSendOwner} action="#">
      <Level1Section>
        <FormOwner
          setNameAccount={setNameAccount}
          name={name}
          setName={setName}
          nameAccount={nameAccount}
          numberAccount={numberAccount}
          setNumberAccount={setNumberAccount}
          numberShaba={numberShaba}
          setNumberShaba={setNumberShaba}
          checkType={checkType}
          setCheckType={setCheckType}
          address={address}
          setAddress={setAddress}
        />
        <ResultCart
          allPrice={"120000"}
          pricePost={"0"}
          Profit="0"
          Discount="0"
          priceUnit="1.968"
          btnText="استعلام"
          link={false}
          btnColor="#117C64"
        />
      </Level1Section>
    </form>
  );
};

export default Level2Co;
