export const showFormattedDate = (oldDate: string) => {
    let newDate = ''
    // Si hay fechas ya cargadas con formato dd/mm/yyyy
    if (oldDate.split("-").length != 1) {
        newDate = oldDate.split("-").reverse().join("/")
    } else {
        newDate = oldDate
    }
    return newDate;
}