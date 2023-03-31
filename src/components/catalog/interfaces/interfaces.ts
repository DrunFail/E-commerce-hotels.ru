export interface ProductItem {
    url: string,
    title: string,
    volume: string,
    size: number,
    sizeUnit: string,
    code: number,
    manufacturer: string,
    brand: string,
    description: string,
    price: number,
    typeCare: string[]
}

export enum SizeUnit {
    bottle = 'мл',
    box = 'г'
}

export enum VolumeType {
    bottle = 'Объем',
    box = 'Вес'
}