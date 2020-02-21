import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../../assets/colors";

import LimitedTimeProduct from "./LimitedTimeProduct";
import ProductScreen from "../ProductScreen/ProductScreen";
import ViewAllCategories from "../HomeScreen/ViewAllCategories";
import Brochure from "../ProductScreen/Brochure";
import BrochureType from "../ProductScreen/BrochureType";
import BrochureCart from "../../screens/CartScreen/BrochureCart";
import BrandCheckupSchedule from "../ProductScreen/BrandCheckupSchedule";
import BrandCheckupCart from "../CartScreen/BrandCheckupCart";
import CheckoutScreen from "../CheckoutScreen/CheckoutScreen";
import StepTwo from "../CheckoutScreen/StepTwo";
import StepThree from "../CheckoutScreen/StepThree";
import MainWalkthrough from "../WalkthroughScreen/MainWalkthrough";
import FirstScreen from "../WalkthroughScreen/FirstScreen";
import SecondScreen from "../WalkthroughScreen/SecondScreen";
import ThirdScreen from "../WalkthroughScreen/ThirdScreen";
import FourthScreen from "../WalkthroughScreen/FourthScreen";
import EmailSent from "../LoginScreens/EmailSent";
import PasswordReset from "../LoginScreens/PasswordReset";
import ForgotPassword from "../LoginScreens/ForgotPassword";
import Password from "../LoginScreens/Password";
import SignUp from "../SignUpScreen/SignUp";
import MobileInput from "../../components/MobileInput";
import VerifyNumber from "../SignUpScreen/VerifyNumber";
import Login from "../LoginScreens/Login";
import ConfirmationCode from "../SignUpScreen/SignUpComponents/ConfirmationCode";

class MoreScreen extends Component {
  render() {
    return (
      // <Splash />
      // <LimitedTimeProduct />
      // <ProductScreen></ProductScreen>
      // <ViewAllCategories></ViewAllCategories>
      // <Brochure></Brochure>
      // <BrochureType />
      // <BrochureCart></BrochureCart>
      // <BrandCheckupSchedule />
      // <BrandCheckupCart></BrandCheckupCart>
      <CheckoutScreen></CheckoutScreen>
      // <StepTwo></StepTwo>
      // <StepThree></StepThree>
      // <VerifyNumber></VerifyNumber>
      // <ConfirmationCode />
      // <MainWalkthrough> </MainWalkthrough>
      // <FirstScreen></FirstScreen>
      // <SecondScreen></SecondScreen>
      // <ThirdScreen></ThirdScreen>
      // <FourthScreen></FourthScreen>
      // <EmailSent></EmailSent>
      // <PasswordReset></PasswordReset>
      // <ForgotPassword></ForgotPassword>
      // <SignUp></SignUp>
      // <Login></Login>
      // <View style={styles.container}>
      //   <Text>More Screen</Text>
      // </View>
    );
  }
}
export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.whitetext
  }
});
