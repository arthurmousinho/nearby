import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place/place";
import { Places } from "@/components/places";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { View, Alert } from "react-native";

type MarketsProps = PlaceProps;

export default function Home() {

    const [categories, setCategories] = useState<CategoriesProps>([]);
    const [category, setCategory] = useState("");
    const [markets, setMarkets] = useState<MarketsProps[]>([]);

    async function fetchCategories() {
        try {
            const { data } = await api.get('/categories');
            setCategories(data);
            setCategory(data[0].id);
        } catch (error) {
            console.log(error);
            Alert.alert('Categorias', 'Não foi possível carregar as categorias.');
        }
    }

    async function fetchMarkets() {
        try {
            if (!category) return;
            const { data } = await api.get(`/markets/category/${category}`);
            setMarkets(data);
        } catch (error) {
            console.log(error);
            Alert.alert('Locais', 'Não foi possível carregar os locais.');
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        fetchMarkets();
    }, [category]);

    return (
        <View style={{ flex: 1, backgroundColor: '#cecece' }}>
            <Categories
                data={categories}
                selected={category}
                onSelect={setCategory}
            />
            <Places
                data={markets}
            />
        </View>
    )
}