import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider3({ setPageI }: IPage) {
    const slide1Texts = [
        { id: '1', text: 'Receba o pedido do restaurante mais próximo de sua localização.'},
        { id: '2', text: 'Peça quantas vezes quiser.'},
    ]
    return (
        <View style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Operação eficiente' />
                <FlatList
                    data={slide1Texts}
                    renderItem={({ item }) =>
                        <ComponentListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} cor={false} />
                <ComponentButtonSlider onPressI={() => setPageI(2)} cor={false} />
                <ComponentButtonSlider onPressI={() => setPageI(3)} cor={true} />
                <ComponentButtonSlider onPressI={() => setPageI(4)} cor={false} />
            </View>
        </View>
    );

}