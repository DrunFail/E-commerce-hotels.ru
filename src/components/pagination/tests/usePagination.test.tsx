import data from '../../../fakeData/data.json';
import { act, renderHook } from "@testing-library/react";
import usePagination from '../hooks/usePagination';

const perPage = 10;


const initiateData = () => {
    const { result } = renderHook(() => usePagination({ arr: data, perPage }));
    return result;
}

describe('usePagination', () => {
    
    it('количество страниц', () => {
        const result = initiateData();

        expect(result.current.pageCount).toBe(3); 
    })

    it('проверка начального состояния', () => {
        const result = initiateData();

        expect(result.current.currentPage).toBe(1);
    })

    it('можно перейти на следующую и предыдущую страницу', () => {
        const result = initiateData();

        act(() => result.current.nextPage());
        act(() => result.current.nextPage());
        expect(result.current.currentPage).toBe(3);

        act(() => result.current.prevPage());
        expect(result.current.currentPage).toBe(2);
    })

    it('можно установить текущую страницу по номеру', () => {
        const result = initiateData();

        act(() => result.current.toggleCurrentPage(2))
        expect(result.current.currentPage).toBe(2)

        act(() => result.current.toggleCurrentPage(1))
        expect(result.current.currentPage).toBe(1)
    })

    it('нельзя сделать текущую страницу меньше 1 и больше максимального количества', () => {
        const result = initiateData();

        act(() => result.current.prevPage());
        act(() => result.current.prevPage());
        expect(result.current.currentPage).toBe(1);

        act(() => result.current.toggleCurrentPage(3));
        act(() => result.current.nextPage())
        act(() => result.current.nextPage())
        expect(result.current.currentPage).toBe(3)
    })
})