import { TouchableOpacityComponent } from "react-native";
import {styles} from './styles'
export interface IBSlider {
    onPressI: () => void
}
export function ButtonSlider({onPressI}: IBSlider) {
    return (
        <TouchableOpacityComponent style={styles.ball} onPress={onPressI} />
    )
}