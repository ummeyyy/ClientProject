import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from "react-native-confirmation-code-field";

import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

const CELL_COUNT = 6;

const confirmationCode = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  });

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default confirmationCode;

const styles = StyleSheet.create({
  root: { flex: 1, paddingHorizontal: moderateScale(5) },
  codeFiledRoot: { marginTop: verticalScale(1) },
  cell: {
    width: moderateScale(40),
    height: verticalScale(40),
    backgroundColor: colors.inactivegreybutton,
    lineHeight: scale(30),
    color: colors.greytext,
    fontWeight: "800",
    fontSize: scale(22),
    textAlign: "center"
  },
  focusCell: {
    borderColor: colors.inactivegreybutton
  }
});
