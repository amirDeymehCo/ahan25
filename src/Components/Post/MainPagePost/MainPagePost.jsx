
import {  LikeRight } from './../../Icons/Icons';
import { SectionMain } from './MainPagePostStyles';

const MainPagePost = ({name,content}) => {
    return ( 
        <SectionMain>
            <h1>{name}</h1>
            <p
                dangerouslySetInnerHTML={{ __html: content }}
            ></p>
            <div>
                <span>آیا این مطلب برای شما مفید بوده است؟</span>
                <button>
                    <LikeRight size={"20"} color='#535C79'/>
                </button>
            </div>
        </SectionMain>
     );
}
 
export default MainPagePost;