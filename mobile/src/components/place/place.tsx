import { TouchableOpacity, TouchableOpacityProps, Image, View, Text } from "react-native";
import { s } from "./styles";
import { IconTicket } from "@tabler/icons-react-native";
import { colors } from "@/styles/theme";

export type PlaceProps = {
    id: string;
    name: string;
    description: string;
    coupons: number;
    cover: string;
    address: string;
}

type Props = TouchableOpacityProps & {
    data: PlaceProps;
}

export function Place(props: Props) {
    return (
        <TouchableOpacity style={s.container} {...props}>
            <Image style={s.image} source={{ uri: props.data.cover }} />
            <View style={s.content}>
                <Text style={s.name}>
                    {props.data.name}
                </Text>
                <Text style={s.description} numberOfLines={3}>
                    {props.data.description}
                </Text>
                <View style={s.footer}>
                    <IconTicket size={16} color={colors.red.base} />
                    <Text style={s.tickets}>
                        {props.data.coupons} cupons disponíveis
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}