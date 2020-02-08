import categories from "../../data/categories.json"
import subcategories from "../../data/subcategories.json"
import products from "../../data/products.json"

const database = {
    categories,
    subcategories,
    products
}

export const FETCH_MANY = "FETCH_MANY"
export const fetchMany = (resource, page, perPage) => {
    return dispatch => {
        /*
        simulation du processus du fetching from a REST API endpoint
        */
        const requestTime = Math.random() * 1500 //  0 a 1500ms
        setTimeout(() => {
            try {
                const data = database[resource]
                // have to add page and perPage
                if (!data)
                    throw `resource ${resource} not found !`
                dispatch({ type: FETCH_MANY, payload: { data, resource } })
            } catch (Exception) {

            }
        }, requestTime)
    }
}


export const FETCH_ONE = "FETCH_ONE"
export const fetchOne = (resource, resource_id) => {
    return dispatch => {
        /*
        simulation du processus du fetching from a REST API endpoint
        */
        const requestTime = Math.random() * 1500 //  0 a 1500ms
        setTimeout(() => {

            try {
                const alldata = database[resource]
                if (!alldata)
                    throw `resource ${resource} not found !`
                const data = alldata.filter(id => id === resource_id)[0]
                if (!data)
                    throw `${resource} with id : '${resource_id}' not found !`
                dispatch({ type: FETCH_ONE, payload: { data, resource } })
            } catch (Exception) {
                dispatch({ type: "ERROR" })
            }
        }, requestTime)
    }
}