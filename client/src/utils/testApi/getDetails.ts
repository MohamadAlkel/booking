export function getDetails(id: number, obj: any): any {
    const newObj = obj.filter((hotel) => id === hotel.id)[0]
    return newObj
}