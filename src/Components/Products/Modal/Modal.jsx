import { ModalSection,HeaderModal ,ContainerModal} from './ModalStyles';
import Cart from './Chart'
const Modal = ({show,setShow}) => {

    return ( 
        <ModalSection onClick={()=>setShow(false)} show={show}>
            <ContainerModal onClick={event=>event.stopPropagation()} show={show}>
            <HeaderModal>
                <h3>
                    نمودار تغیر قیمت
                </h3>
            </HeaderModal>
            <div>
                <Cart  key={Math.random()*10}/>
            </div>
                </ContainerModal>
        </ModalSection>
     );
}
 
export default Modal;