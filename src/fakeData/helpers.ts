import data from './data.json';

//manufacturers list
const getManufact = () => {
    const result = new Set<string>();
    data.forEach(elem => result.add(elem.manufacturer))
    return result;
}
const manufactList = Array.from(getManufact());


//brands list
const getBrand = () => {
    const result = new Set<string>();
    data.forEach(elem => result.add(elem.brand))
    return result;
}
const brandList = Array.from(getBrand());



export { manufactList, brandList };