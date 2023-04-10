import { ProductItem } from "../../catalog/interfaces/interfaces";
import { CheckboxFilter } from "../redux/interfaces";


//вычисляет список производителей/брендов и возвращает результат
export const getListFilter = (arr: ProductItem[], field: 'manufacturer' | 'brand', secField: 'manufacturer' | 'brand'): CheckboxFilter[] => {

    const list: CheckboxFilter[] = []

    Next:
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < list.length; j++) {
            if (list[j].name.toLowerCase() == arr[i][field].toLowerCase()) {
                list[j].count++
                list[j].filters.push(arr[i][secField])
                continue Next;
            }
        }
        list.push({ name: arr[i][field], count: 1, filters: [arr[i][secField]], checked: false });
    }

    return list
}