// Used by components to get the date info from a Django created/updated datetime string
export const createDateInfo = date => date.slice(0,10)

// Used by components that need to convert a Date Object into a string for Django DateField
export const convertDate = date => {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}
