import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider4({ setPageI }: IPage) {
    const slide1Texts = [
        { id: '1', text: 'Receba seu pedido dentro do prazo).'},
        { id: '2', text: 'Seu pedido sempre será entregue inteiro e nunca gelado ou trocado.'},
    ]
    return (
        <View style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Segurança e pontualidade' />
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
                <ComponentButtonSlider onPressI={() => setPageI(3)} cor={false} />
                <ComponentButtonSlider onPressI={() => setPageI(4)} cor={true} />
            </View>
        </View>
    );

}