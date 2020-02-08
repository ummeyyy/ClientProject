<KeyboardAvoidingView
  style={styles.container}
  behavior="padding"
  enabled
  keyboardVerticalOffset={Platform.OS === "ios" ? scale(200) : 0}
>
  {/* <ScrollView
  showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
> */}
  <View style={styles.container}>
    {/* BACK ARROW START*/}
    <TouchableOpacity
      style={{
        height: verticalScale(35),
        width: moderateScale(35),
        position: "absolute",
        top: verticalScale(15),
        left: moderateScale(5)
      }}
    >
      <Image
        source={require("../../assets/arrow.png")}
        style={{
          width: moderateScale(30),
          height: verticalScale(32)
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>

    {/* BACK ARROW END*/}

    {/* LOGO START*/}
    <View
      style={{
        marginTop: verticalScale(50)
      }}
    >
      <Image
        source={require("../../assets/reset-pass.png")}
        style={{
          width: moderateScale(100),
          height: verticalScale(102)
        }}
        resizeMode="contain"
      />
    </View>
    {/* LOGO END*/}

    {/* SCREEN TEXT START*/}
    <View
      style={{
        marginTop: verticalScale(10)
      }}
    >
      <Text style={styles.largetext}>{"RESET PASSWORD"}</Text>
      <View
        style={{
          marginTop: verticalScale(15),
          marginHorizontal: moderateScale(20)
        }}
      >
        <Text style={styles.smalltext}>
          {
            "Looks like you're trying to reset the password.\nPlease enter a new password that you\ndont use anywhere else."
          }
        </Text>
      </View>
    </View>
    {/* SCREEN TEXT END*/}

    {/* PASSWORD RESET START */}
    <View
      style={{
        marginTop: verticalScale(20)
      }}
    >
      {/* Email reset */}
      <View
        style={[styles.methodContainer, { marginVertical: verticalScale(10) }]}
      >
        <View style={{ flex: 0.25 }}>
          <Image
            source={require("../../assets/emailicon.png")}
            style={{
              width: moderateScale(25),
              height: verticalScale(25),
              tintColor: colors.greytext
            }}
            resizeMode="contain"
          />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            style={{
              marginLeft: moderateScale(-10),
              color: colors.greytext,
              fontSize: scale(14),
              fontWeight: "400"
            }}
            value={this.state.email}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ email: text })}
            placeholder={"ENTER EMAIL ADDRESS"}
            returnKeyType="done"
          />
        </View>
      </View>
      {/* password reset */}
      <View style={styles.methodContainer}>
        <View style={{ flex: 0.25 }}>
          <Image
            source={require("../../assets/pwd.png")}
            style={{
              width: moderateScale(25),
              height: verticalScale(25),
              tintColor: colors.greytext
            }}
            resizeMode="contain"
          />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            style={{
              marginLeft: moderateScale(-10),
              color: colors.greytext,
              fontSize: scale(14),
              fontWeight: "400"
            }}
            value={this.state.password}
            secureTextEntry={this.state.password}
            onChangeText={text => onChange({ password: text })}
            underlineColorAndroid="transparent"
            //   onChangeText={text => this.setState({ password: text })}
            placeholder={"ENTER PASSWORD"}
            returnKeyType="done"
          />
        </View>
        {/* HIDE PASSWORD OR NOT START */}
        <View style={{ position: "absolute", right: moderateScale(20) }}>
          <TouchableOpacity onPress={this._makeYourEffectHere}>
            {/* {!this.state.isHidden ? ( */}
            <Image
              source={require(this.state.image)}
              //   source={require("../../assets/eye-close.png")}
              style={{
                width: moderateScale(25),
                height: verticalScale(25)
              }}
              resizeMode="contain"
            />
            {/* ) : ( */}
            {/* <Image
              source={require("../../assets/eye-open.png")}
              style={{
                width: moderateScale(25),
                height: verticalScale(25)
              }}
              resizeMode="contain"
            />
          )} */}
          </TouchableOpacity>{" "}
          */}
        </View>
        {/* HIDE PASSWORD OR NOT END */}
      </View>
    </View>
    {/* PASSWORD RESET END */}

    {/* BACK TO LOGIN PAGE BUTTON START*/}
    <View
      style={{
        marginTop: verticalScale(30),
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <CategoryButton style={styles.resetpasswordbutton}>
        <Text style={styles.resetpasswordbuttontext}>RESET PASSWORD</Text>
      </CategoryButton>
    </View>
    {/* BACK TO LOGIN PAGE BUTTON END*/}
  </View>
  {/* </ScrollView> */}
</KeyboardAvoidingView>;
