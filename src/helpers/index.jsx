// Used by components to get the date info from a Django created/updated datetime string
export const createDateInfo = date => date.slice(0,10)

// Used by components that need to convert a Date Object into a string for Django DateField
export const convertDate = date => {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

// Used by components to convert a date string into a Date object
export const createDate = date => {
    return new Date(parseInt(date.slice(0,5)), (parseInt(date.slice(5,7)) - 1), parseInt(date.slice(-2)))
}
