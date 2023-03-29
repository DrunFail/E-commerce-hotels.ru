import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { ProductItem } from "../../catalog/interfaces/interfaces";
import { selectFilter } from "../redux/filterSlice";

export default function useFilter(productList:ProductItem[]) {
    const filter = useAppSelector(selectFilter);
    const [check, setCheck] = useState(0);
    const [renderedData, setRenderedData] = useState<ProductItem[]>([]);

    const filterPrice = (arr: ProductItem[]) => {
        let result: ProductItem[] = [];
        if (filter.price.from || filter.price.to) {
            if (filter.price.from) {
                result = arr.filter(item => item.price >= +filter.price.from)
            }
            if (filter.price.to) {
                result = result.filter(item => item.price <= +filter.price.to)
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
            return result;
        } else {
            return arr;
        }
    }

    const filterManufact = (arr: ProductItem[]) => {
        let result: ProductItem[] = [];
        if (filter.manufacturerFilter.length > 0) {
            result = arr.filter(elem => filter.manufacturerFilter.includes(elem.manufacturer))
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







    const checkRender = (arr: ProductItem[]) => {
        let result: ProductItem[] = []
        if (filter.status > check) {
            result = filterManufact(filterBrand(filterPrice(productList)))
            setRenderedData(result)
            setCheck(filter.status)
            
            return result;
        }

        if (check > filter.status && !filter.status) {
            result = productList;
            setCheck(filter.status)
            
            return result;
        }
        if (!check && !filter.status) {
           
            return productList
        }
        else {
           
            return renderedData
        }

    }


    return sortBy(filterTypeCare(checkRender(productList)));
}