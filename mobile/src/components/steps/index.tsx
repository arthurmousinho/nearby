import { View, Text } from "react-native";
import { s } from "./styles";
import { Step } from "../step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

const STEPS = [
    {
        title: 'Encontre um estabelecimento',
        description: 'Veja locais perto de você que são parceiros Nearby',
        icon: IconMapPin
    },
    {
        title: 'Ative o cupom com QR Code',
        description: 'Escaneie o código no estabelecimento para usar o benefício',
        icon: IconQrcode
    },
    {
        title: ' Garanta vantagens perto de você',
        description: 'Ative cupons onde estiver, em diferentes tipos de estabelecimento',
        icon: IconTicket
    }
]

export function Steps() {
    return (
        <View style={s.container}>
            <Text style={s.title}>
                Veja como esta funciona
            </Text>
            {STEPS.map((step, index) => (
                <Step
                    key={index}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                />
            ))}
        </View>
    )
}