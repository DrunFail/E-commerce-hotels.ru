import { RootState } from "../../../redux/store/store";

export const selectFilter = (state: RootState) => {
    const filteredManufact: string[] = []
    state.filter.manufacturerFilter.map(elem => {
        if (elem.checked) filteredManufact.push(elem.name);
    });
    const filteredBrand: string[] = []

    state.filter.brandFilter.map(elem => {
        if (elem.checked) filteredBrand.push(elem.name);
    });
    const priceFilter = state.filter.price;

    return {
        price: priceFilter,
        manufacturerFilter: filteredManufact,
        brandFilter: filteredBrand,
        status: state.filter.status,
        typeCare: state.filter.typeCare,
        sortBy: state.filter.sortBy
    }

};

export const selectManufactFilter = (state: RootState) => state.filter.manufacturerFilter;

export const selectBrandFilter = (state: RootState) => state.filter.brandFilter;

export const selectPriceFilter = (state: RootState) => state.filter.price;