import { useEffect, useState } from "react";
import { getListFilter } from "../../../fakeData/helpers";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { ProductItem } from "../../catalog/interfaces/interfaces";
import { setBrandList, setControlBrand, setControlManufacturer, setManufacturerList } from "../redux/filterSlice";
import { selectBrandFilter, selectFilter, selectManufactFilter } from "../redux/selectors";

export default function useFilter(productList:ProductItem[]) {
    const filter = useAppSelector(selectFilter);
    const brandList = useAppSelector(selectBrandFilter);
    const manufactList = useAppSelector(selectManufactFilter);
    const [check, setCheck] = useState(0);
    const [renderedData, setRenderedData] = useState<ProductItem[]>([]);
    const dispatch = useAppDispatch();


    //вычисление и установка фильтров для brand и manufacturer
    useEffect(() => {
        const filtersManufact = getListFilter(productList, 'manufacturer','brand');
        const filterBrand = getListFilter(productList, 'brand', 'manufacturer');
        
        dispatch(setManufacturerList(filtersManufact));
        dispatch(setControlManufacturer(filtersManufact));

        dispatch(setBrandList(filterBrand));
        dispatch(setControlBrand(filterBrand));
        
    }, [])



    const filterPrice = (arr: ProductItem[]) => {
        let result: ProductItem[] = [];


        if (filter.price.from || filter.price.to) {
            if (filter.price.from) {
                result = arr.filter(item => item.price >= +filter.price.from && item.price <= +filter.price.to)
            }
            if (filter.price.from && filter.price.to) {
                result = result.filter(item => item.price <= +filter.price.to)
            }
            if (!filter.price.from && filter.price.to) {
                result = arr.filter(item => item.price <= +filter.price.to)
            }
            return result;

        } else {
            return arr;
        }

    }

    const filterBrand = (arr: ProductItem[]) => {
        let result: ProductItem[] = [];
        if (filter.brandFilter.length > 0) {
            result = arr.filter(elem => filter.brandFilter.includes(elem.brand));
            let newFilter = manufactList.filter(elem => {
                let x = elem.filters.filter(item => filter.brandFilter.includes(item))
                if (x.length) return 1;
                return 0;
               

            })
            dispatch(setManufacturerList(newFilter));
            return result;
        } else {
            return arr;
        }
    }

    const filterManufact = (arr: ProductItem[]) => {
        let result: ProductItem[] = [];
        if (filter.manufacturerFilter.length > 0) {
            result = arr.filter(elem => filter.manufacturerFilter.includes(elem.manufacturer))
            let newFilter = brandList.filter(elem => {
                let x = elem.filters.filter(item => filter.manufacturerFilter.includes(item))
                if (x.length) return 1;
                return 0;
                

            })
            dispatch(setBrandList(newFilter))
            return result
        } else {
            return arr;
        }
    }

    const filterTypeCare = (arr: ProductItem[]) => {
        let result: ProductItem[] = [];
        if (filter.typeCare) {
            result = arr.filter(elem => elem.typeCare.includes(filter.typeCare))
            return result;
        }
        else {
            return arr;
        }
    }

    const sortBy = (productList: ProductItem[]) => {
        let arr = [...productList]
        switch (filter.sortBy) {
            case 'nameAsc':
                return arr.sort((a, b) => a.brand > b.brand ? 1 : -1);

            case 'nameDesc':
                return arr.sort((a, b) => a.brand < b.brand ? 1 : -1);
            case 'priceAsc':
                return arr.sort((a, b) => a.price > b.price ? 1 : -1);
            case 'priceDesc':
                return arr.sort((a, b) => a.price < b.price ? 1 : -1);
            default: { return productList }
        }
    }






    //проверка фильтра
    const checkRender = (arr: ProductItem[]) => {
        let result: ProductItem[] = [];

        //когда запущен новый поиск без сброса
        if (filter.status > check) {
            result = filterManufact(filterBrand(filterPrice(arr)));
            setRenderedData(result);
            setCheck(filter.status);
            
            return result;
        }

        //был сброс параметров фильтра
        if (check > filter.status && !filter.status) {
            
            setCheck(filter.status);
            
            return arr;
        }

        //начальное состояние
        if (!check && !filter.status) {
           
            return arr;
        }
        else {
           
            return renderedData;
        }

    }


    return sortBy(filterTypeCare(checkRender(productList)));
}