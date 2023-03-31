import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getListFilter} from '../../../fakeData/helpers';
import { RootState } from '../../../redux/store/store';
import { MainFilter } from './interfaces';



const initialState: MainFilter = {
    price: { from: '', to: '' },
    manufacturerFilter: getListFilter('manufacturer'),
    brandFilter: getListFilter('brand'),
    typeCare: '',
    sortBy:'',
    status: 0
}


export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {

        changeCheckedStatus(state, action: PayloadAction<{ filterName:string, name: string }>) {
            const field = action.payload.filterName === 'Производитель'
                ? 'manufacturerFilter'
                : 'brandFilter';
            
            const checkedItem = state[field].find(elem => elem.name === action.payload.name);
                if (checkedItem) {
                    checkedItem.checked = !checkedItem.checked
                }
               
        },

        addTypeCareFilter(state, action: PayloadAction<{ value:string }>) {
            state.typeCare = action.payload.value
        },

        addTypeSort(state, action: PayloadAction<{ value: string }>) {
            state.sortBy = action.payload.value
        },

        changePriceFrom(state, action: PayloadAction<{value: string}>) {
            state.price.from = action.payload.value
        },

        changePriceTo(state, action: PayloadAction<{ value: string }>) {
            state.price.to = action.payload.value
        },

        toggleFilterStatus(state) {
            state.status = state.status + 1
            
        },

        resetFilterStatus(state) {
            state.status = 0;
            state.price.from = '';
            state.price.to = '';
            state.brandFilter.map(elem => elem.checked = false);
            state.manufacturerFilter.map(elem => elem.checked = false);
        },

       
    },

})

export const { changeCheckedStatus,
    changePriceFrom,
    changePriceTo,
    toggleFilterStatus,
    resetFilterStatus,
    addTypeCareFilter,
    addTypeSort
    
    
} = filterSlice.actions


export default filterSlice.reducer
