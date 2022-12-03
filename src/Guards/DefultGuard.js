import React from "react";
import { isUndefined } from "lodash";
import { useNavigation } from "@react-navigation/native";

function DefaultGuard(props) {

    const userPermission = "anyallow"
    const navigation = useNavigation();
    const urlPermission = isUndefined(props.permit)

    const handleGuard = () => {

        if (urlPermission) {
            return navigation.navigate("home")
        }

        var authhorized = false;
        var requiredPermissions = props.permit.split(',');

        requiredPermissions.forEach(requiredPermit => {
            if (userPermission === requiredPermit)
                authhorized = true;
        });

        if (authhorized) {
            return false
        }
        else {
            if (props.url !== null && !isUndefined(props.url))
                return navigation.navigate("home")
            return null
        }
    }
    return (<>
        {handleGuard()}
    </>)

}
export default DefaultGuard
