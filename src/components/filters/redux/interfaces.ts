export interface PriceFilter {
    from: string,
    to: string
}

export interface CheckboxFilter{
    name: string,
    count: number,
    checked: boolean
}


export interface MainFilter {
    price: PriceFilter,
    manufacturerFilter: CheckboxFilter[],
    brandFilter: CheckboxFilter[],
    typeCare: string,
    sortBy: string,
    status: number
}