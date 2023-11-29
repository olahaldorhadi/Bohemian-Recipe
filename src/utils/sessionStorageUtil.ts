// Save a string to sessionStorage
export const saveStringToSessionStorage = (key: string, value: string) => {
    try {
        sessionStorage.setItem(key, value)
    } catch (error) {
        console.error('Error saving string to sessionStorage', error)
    }
}

// Load a string from sessionStorage
export const loadStringFromSessionStorage = (
    key: string,
    defaultValue: string
): string => {
    try {
        const value = sessionStorage.getItem(key)
        return value !== null ? value : defaultValue
    } catch (error) {
        console.error('Error loading string from sessionStorage', error)
        return defaultValue
    }
}

// Save an array of strings to sessionStorage
export const saveStringArrayToSessionStorage = (
    key: string,
    value: string[]
) => {
    try {
        const serializedValue = JSON.stringify(value)
        sessionStorage.setItem(key, serializedValue)
    } catch (error) {
        console.error('Error saving string array to sessionStorage', error)
    }
}

// Load an array of strings from sessionStorage
export const loadStringArrayFromSessionStorage = (
    key: string,
    defaultValue: string[]
): string[] => {
    try {
        const serializedValue = sessionStorage.getItem(key)
        return serializedValue !== null
            ? JSON.parse(serializedValue)
            : defaultValue
    } catch (error) {
        console.error('Error loading string array from sessionStorage', error)
        return defaultValue
    }
}
