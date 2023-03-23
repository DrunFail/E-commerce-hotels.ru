export const inputChangeSync = (e: React.ChangeEvent<HTMLInputElement>, index: number, name: string) => {
    const input = document.getElementById(name + index);
    if (input) (input as HTMLInputElement).checked = true;

}