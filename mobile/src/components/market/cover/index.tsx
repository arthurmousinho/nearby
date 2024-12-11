import { ImageBackground, View } from "react-native";
import { s } from "./styles";
import { Button } from "@/components/button";
import { router } from "expo-router";
import { IconArrowLeft } from "@tabler/icons-react-native";

type Props = {
    uri: string;
}

export function Cover(props: Props) {
    return (
        <ImageBackground 
            src={props.uri}
            style={s.container}
        >
            <View style={s.header}>
                <Button style={{width: 40, height: 40}} onPress={() => router.back()}>
                    <Button.Icon icon={IconArrowLeft} />
                </Button>
            </View>
        </ImageBackground>
    )   
}