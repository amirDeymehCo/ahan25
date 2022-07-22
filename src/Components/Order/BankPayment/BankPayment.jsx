import TitleSection from "../../common/TitleSection/TitleSection";
import {
  Container,
  FormBank,
  SectionBank,
  Upload,
  ImageBg,
} from "./BankPaymentStyles";
import InputGroup from "../../common/InputGroup/InputGroup";
import TextareaGroup from "../../common/InputGroup/Textarea";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import OrderServices from "../../../Services/order";
import { useSelector } from "react-redux";

const styleGroup = `
width:100%;
textarea{
    min-width:100%;
    max-width:100%;
    min-height:110px;
    border:2px solid #E97B53;
    background-color:transparent;
}
`;
const BankPayment = () => {
  const inputFill = useRef();
  const [uploadFile, setUploadFile] = useState(false);
  const [textHeader, setTextHeader] = useState("بارگزاری فایل");
  const [srcImage, setSrcImage] = useState("");

  const [trackingNumber, setTrackingNumber] = useState("");
  const [originAccount, setOriginAccount] = useState("");
  const [amountPaid, setAmountPaid] = useState("");

  const orderUser = useSelector((state) => state.orderUser);
  const orderId = orderUser.data[0]._id;

  let file;
  const handelUpload = function () {
    setUploadFile(true);
    file = inputFill.current.files[0];
    showImage();

    const formData = new FormData();
    formData.append("image", file);
    let imageData = formData.getAll("image");
    if (typeof imageData !== "undefined") {
      OrderServices.uploadImageBank(orderId, imageData, (res) => {
        console.log(res);
      });
    }
  };

  const handelDrag = (event) => {
    event.preventDefault();
    setUploadFile(true);
    setTextHeader("انتشار برای بارگذاری پرونده");
  };

  const handelDragLeave = () => {
    setUploadFile(false);
    setTextHeader("برای بارگذاری بکش و رها کن");
  };

  const handelDrop = (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    showImage();
  };

  const showImage = () => {
    try {
      let fileType = file.type;
      let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
      if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
          let fileURL = fileReader.result;
          setSrcImage(fileURL);
        };

        fileReader.readAsDataURL(file);
      } else {
        toast.error("فایلی که انتخاب رکده اید عکس نیست!", {
          position: "top-left",
        });
        setUploadFile(false);
      }
    } catch (err) {
      alert("مشکلی پیش آمده است");
    }
  };

  const handelBankPayment = () => {
    const date = new Date();
    const data = {
      orderId,
      data: {
        trackingNumber,
        originAccount,
        date,
        amountPaid,
      },
    };

    OrderServices.bankPayment(data, (res) => {
      console.log(res);
    });
  };

  return (
    <SectionBank id="bank-payment">
      <ToastContainer />
      <TitleSection title="پرداخت بانکی" />
      <Container>
        <FormBank onSubmit={handelBankPayment}>
          <InputGroup
            onChange={(e) => setAmountPaid(e.target.value)}
            idInput={"numberPayment"}
            label="مقدار پرداخت شده :"
          />
          <InputGroup
            onChange={(e) => setOriginAccount(e.target.value)}
            idInput={"bankCard"}
            label="حساب مبدا :"
          />
          <InputGroup
            onChange={(e) => setTrackingNumber(e.target.value)}
            styleCustom={"width:100%;"}
            idInput={"codePayment"}
            label="شماره رهگیری :"
          />
          <TextareaGroup
            styleCustom={styleGroup}
            idInput={"messageError"}
            label="پیغام در صورت عدم تایید فاکتور"
          />
        </FormBank>

        <Upload
          onDrop={handelDrop}
          onDragOver={handelDrag}
          onDragLeave={handelDragLeave}
          upload={uploadFile}
          onClick={() => inputFill.current.click()}
        >
          {uploadFile && <ImageBg src={srcImage} />}
          <input
            accept="image/png, image/jpeg"
            onChange={handelUpload}
            hidden
            ref={inputFill}
            type="file"
          />
          <div>
            <h5>{textHeader}</h5>
            <p>عکس را داخل کادر رها کرده یا انتخاب کنید </p>
          </div>
        </Upload>
      </Container>
    </SectionBank>
  );
};

export default BankPayment;
