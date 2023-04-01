import { ProductItem } from '../components/catalog/interfaces/interfaces';
import data from './data.json';

export const getListFilter = (arr: ProductItem[], field: 'manufacturer' | 'brand', secField: 'manufacturer' | 'brand' ) => {

    const x: { name: string, count: number, filters:string[] , checked: boolean }[] = []

    Next:
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < x.length; j++) {
            if (x[j].name.toLowerCase() == arr[i][field].toLowerCase()) {
                x[j].count++
                x[j].filters.push(arr[i][secField])
                continue Next;
            }
        }
        x.push({ name: arr[i][field] , count: 1, filters: [arr[i][secField]], checked: false });
    }
    
    return x
}






const getListBrand = () => {

    const x: { name: string, count: number, checked: boolean }[] = []

    Next:
    for (let i = 0; i < data.length; i++) {

        for (let j = 0; j < x.length; j++) {
            if (x[j].name.toLowerCase() == data[i].brand.toLowerCase()) {
                x[j].count++
                continue Next;
            }
        }
        x.push({ name: data[i].brand, count: 1, checked: false });
    }
    return x
}





