import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CheckboxFilter, MainFilter } from './interfaces';



const initialState: MainFilter = {
    price: { from: '', to: '' },
    controlManufacturer: [],
    controlBrand: [],
    manufacturerFilter: [],
    brandFilter: [],
    typeCare: '',
    sortBy: '',
    status: 0
}


export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {

        changeCheckedStatus(state, action: PayloadAction<{ filterName: string, name: string }>) {
            const field = action.payload.filterName === 'Производитель'
                ? 'manufacturerFilter'
                : 'brandFilter';

            const checkedItem = state[field].find(elem => elem.name === action.payload.name);
            if (checkedItem) {
                checkedItem.checked = !checkedItem.checked
            }

        },

        addTypeCareFilter(state, action: PayloadAction<{ value: string }>) {
            state.typeCare = action.payload.value
        },

        addTypeSort(state, action: PayloadAction<{ value: string }>) {
            state.sortBy = action.payload.value
        },

        changePriceFrom(state, action: PayloadAction<{ value: string }>) {
            state.price.from = action.payload.value
        },

        changePriceTo(state, action: PayloadAction<{ value: string }>) {
            state.price.to = action.payload.value
        },

        toggleFilterStatus(state) {
            state.status = state.status + 1

        },

        setManufacturerList(state, action: PayloadAction<CheckboxFilter[]>) {
            state.manufacturerFilter = action.payload;

        },
        setBrandList(state, action: PayloadAction<CheckboxFilter[]>) {

            state.brandFilter = action.payload;

        },
        setControlManufacturer(state, action: PayloadAction<CheckboxFilter[]>) {
            state.controlManufacturer = action.payload;
        },
        setControlBrand(state, action: PayloadAction<CheckboxFilter[]>) {
            state.controlBrand = action.payload;
        },

        resetFilterStatus(state) {
            state.status = 0;
            state.price.from = '';
            state.price.to = '';
            state.brandFilter = state.controlBrand;
            state.manufacturerFilter = state.controlManufacturer;
        },


    },

})

export const { changeCheckedStatus,
    changePriceFrom,
    changePriceTo,
    toggleFilterStatus,
    resetFilterStatus,
    addTypeCareFilter,
    addTypeSort,
    setManufacturerList,
    setBrandList,
    setControlManufacturer,
    setControlBrand


} = filterSlice.actions


export default filterSlice.reducer
