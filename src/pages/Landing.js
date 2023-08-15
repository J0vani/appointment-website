/*import Form from "../components/form/Form";
import Card from "../components/cardUsers/CardUsers";*/
import CardWrapper from "../components/cardWrapper/CardWrapper";

import '../assets/Styles/generalStyles.css';

const titleCardUser = "Escoje al profesional";

export default function Landing (){
    return( 
        <div>
          {/* <Form></Form> 
            <Card /> */}
            <CardWrapper title={titleCardUser}></CardWrapper>
        </div>
    )
}