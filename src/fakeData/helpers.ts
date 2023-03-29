import data from './data.json';

export const getListFilter = (field: 'manufacturer' | 'brand') => {

    const x: { name: string, count: number, checked: boolean }[] = []

    Next:
    for (let i = 0; i < data.length; i++) {

        for (let j = 0; j < x.length; j++) {
            if (x[j].name.toLowerCase() == data[i][field].toLowerCase()) {
                x[j].count++
                continue Next;
            }
        }
        x.push({ name: data[i][field], count: 1, checked: false });
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

const brandList = getListBrand();
const manufactList = getListFilter('manufacturer');



export { manufactList, brandList};