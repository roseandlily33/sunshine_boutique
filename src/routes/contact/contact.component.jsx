import { ContactContainer, ContactInfo, HoursAndAddress } from "./contact.styles";
import contactImage from '../../images/products/product2.jpg';
import { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
const Contact = () => {
    const defaultFormFields = {
        email: '',
        name: '',
        question: ''
    };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, name, question} = formFields;
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
    };
    return ( 
        <ContactContainer>
        <img id="leftSideImg" src={contactImage} alt="contact" />
        <ContactInfo>
      
        <form onSubmit={handleSubmit}>
        <h2>Ask us a question</h2>
        <FormInput label=""
             type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required/>
              <FormInput label=""
             type="name" name="name" value={name} onChange={handleChange} placeholder="Name" required/>
              <FormInput label=""
             type="textbox" name="question" value={question} onChange={handleChange} placeholder="Question" required/>
             
        <button type="submit">Send</button>
        </form>
        <HoursAndAddress> 
        Hours: <br />
        Monday - Friday: 9 - 6 <br />
        Saturday: 8 - 6 <br />

        <address>
            590 Wellington Ave <br />
            Morgan, Arizona P9851
        </address>
        </HoursAndAddress>
       
        </ContactInfo>
        </ContactContainer>
     );
}
 
export default Contact;