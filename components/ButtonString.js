import { Text, Pressable } from "react-native";

import { appStyles } from '../styles/appStyles';

function ButtonString({children, onPress}) {
    return (
    <Pressable
        style={appStyles.buttonString}
        onPress={onPress}
        pressRetentionOffset={{ bottom: 15, left: 10, right: 10, top: 10 }}
    >
        <Text style={appStyles.buttonStringText}>{children}</Text>
    </Pressable>
    )
}

export default ButtonString;
