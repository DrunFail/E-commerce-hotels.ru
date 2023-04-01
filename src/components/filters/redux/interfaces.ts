export interface PriceFilter {
    from: string,
    to: string
}

export interface CheckboxFilter{
    name: string,
    count: number,
    checked: boolean,
    filters: string[]
    
}


export interface MainFilter {
    price: PriceFilter,
    manufacturerFilter: CheckboxFilter[],
    controlManufacturer: CheckboxFilter[],
    controlBrand: CheckboxFilter[],
    brandFilter: CheckboxFilter[],
    typeCare: string,
    sortBy: string,
    status: number
}