import SignUpForm from "../../components/sign-up-form/sign-up-form.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.jsx";
import { AuthComponent, SignContainer } from "./auth.styles.jsx";
import sidePicture from '../../images/extras/extra2.jpg';
const SignIn = () => {
    return ( 
        <AuthComponent>
            <img id="leftSideImg" src={sidePicture} alt="fashion" />
            <SignContainer>
            <SignUpForm />
            <SignInForm />
            </SignContainer>
        </AuthComponent>
     );
}
 
export default SignIn;