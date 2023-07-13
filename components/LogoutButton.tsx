import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
  } from "react-native";
  import React, { ReactNode } from "react";
  import Font from "../constants/Font";
  import FontSize from "../constants/FontSize";
  import Spacing from "../constants/spacing";
  import Colors from "../constants/Colors";
  
  interface Props {
    style?: StyleProp<ViewStyle>;
    children: ReactNode;
    textStyle?: StyleProp<TextStyle>;
    onPress?: () => void;
  }
  
  const LogoutButton: React.FC<Props> = ({ style, children, textStyle, onPress }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            backgroundColor: Colors.accent,
            paddingHorizontal: Spacing.padding.xs,
            paddingVertical: Spacing.padding.xs,
            borderRadius: Spacing.borderRadius.base,
            alignItems: "center",
          },
          style,
        ]}
      >
        <Text
          style={[
            {
              fontSize: FontSize.xs,
              fontFamily: Font["poppins-regular"],
            },
            textStyle,
          ]}
        >
          {children}
        </Text>
      </TouchableOpacity>
    );
  };
  
  export default LogoutButton;
  
  const styles = StyleSheet.create({});
  