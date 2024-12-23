import { Item } from "@/lib/types/item";
import { ItemGroup } from "@/lib/types/item-group";

const items: { [key: string]: Item } = {
    pizzaCalabresa: {
        id: 'pizza',
        name: 'Pizza calabresa',
        description: 'Queso, salsa, masa madre y calabresa',
        price: 12500
    },
    pizzaRellena: {
        id: 'pizzaRellena',
        name: 'Pizza rellena',
        description: 'Queso, salsa, masa madre y relleno',
        price: 17800
    },
    coke: {
        id: 'coke',
        name: 'Coca Cola',
        description: 'Lata de 355ml',
        price: 3500
    },
}

export const itemGroups: ItemGroup[] = [
    {
        label: "Pizzas",
        items: [
            items.pizzaCalabresa,
            items.pizzaRellena
        ]
    },
    {
        label: "Drinks",
        items: [
            items.coke
        ]
    },
    {
        label: "Desserts",
    },
];