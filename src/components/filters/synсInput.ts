export const inputChangeSync = (index: number, name: string) => {
    const input = document.getElementById(name + index);
    if (input) (input as HTMLInputElement).checked = true;

}