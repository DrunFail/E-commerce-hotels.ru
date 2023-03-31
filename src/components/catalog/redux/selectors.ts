import { RootState } from "../../../redux/store/store";


export const selectProduct = (state: RootState) => state.product;


export const selectProductById = (state: RootState, id: number) => {
    const findItem = state.product.find(elem => elem.code === id);
    if (findItem) return findItem;
};

export const selectProductTitleById = (state: RootState, id: number) => {
    const findItem = state.product.find(elem => elem.code === id)?.title;
    if (findItem) return findItem;
};