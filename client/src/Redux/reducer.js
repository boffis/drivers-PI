import {
    FETCH_ALL_DRIVERS_REQ, FETCH_ALL_DRIVERS_SUCCESS, FETCH_ALL_DRIVERS_ERROR,
    FETCH_NAME_DRIVER_REQ, FETCH_NAME_DRIVER_SUCCESS, FETCH_NAME_DRIVER_ERROR,
    FETCH_ID_DRIVER_REQ, FETCH_ID_DRIVER_SUCCESS, FETCH_ID_DRIVER_ERROR,
    SUBMIT_DRIVER_REQ, SUBMIT_DRIVER_SUCCESS, SUBMIT_DRIVER_ERROR,
    FETCH_TEAMS_REQ, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_ERROR,
    SORT_ALPH, SORT_DOB,
    FILTER_SOURCE, FILTER_TEAM
} from "./types"   

const initialState = {
    allDrivers : [],
    teamFilter : [],
    sourceFilter : [],
    shownDrivers: [],
    fetchAllDrivers : {loading:false, error:null},
    fetchDriversByName: {loading:false, data:null, error:null},
    fetchDriverById:{loading:false, data:null, error:null},
    fetchTeams:{loading:false, data:null, error:null},
    submitDriver:{loading:false, data:null, error:null},
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case FETCH_ALL_DRIVERS_REQ : {
            return({
                ...state,
                fetchAllDrivers:{loading:true, error:null}
            })
        }

        case FETCH_ALL_DRIVERS_SUCCESS : {
            return({
                ...state,
                allDrivers:action.payload,
                teamFilter:action.payload,
                sourceFilter:action.payload,
                shownDrivers:action.payload,
                fetchAllDrivers:{loading:false, error:null}
            })
        }

        case FETCH_ALL_DRIVERS_ERROR : {
            return({
                ...state,
                fetchAllDrivers:{loading:false, error:action.payload}
            })
        }
//-----------------------------------------------------------
        case FETCH_NAME_DRIVER_REQ: {
            return({
                ...state,
                fetchDriversByName:{loading:true, data:null, error:null}
            })
        }

        case FETCH_NAME_DRIVER_SUCCESS: {
            return({
                ...state,
                fetchDriversByName:{loading:false, data:action.payload, error:null}
            })
        }

        case FETCH_NAME_DRIVER_ERROR: {
            return({
                ...state,
                fetchDriversByName:{loading:false, data:null, error:action.payload}
            })
        }

        //---------------------------------------------------------------
        case FETCH_ID_DRIVER_REQ: {
            return({
                ...state,
                fetchDriverById:{loading:true, data:null, error:null}
            })
        }
        case FETCH_ID_DRIVER_SUCCESS: {
            return({
                ...state,
                fetchDriverById:{loading:false, data:action.payload, error:null}
            })
        }

        case FETCH_ID_DRIVER_ERROR: {
            return({
                ...state,
                fetchDriverById:{loading:false, data:null, error:action.payload}
            })
        }
//---------------------------------------------------------------------------
        case FETCH_TEAMS_REQ: {
            return({
                ...state,
                fetchTeams:{loading:true, data:null, error:null}
            })
        }
        case FETCH_TEAMS_SUCCESS: {
            return({
                ...state,
                fetchTeams:{loading:false, data:action.payload, error:null}
            })
        }

        case FETCH_TEAMS_ERROR: {
            return({
                ...state,
                fetchTeams:{loading:false, data:null, error:action.payload}
            })
        }
//----------------------------------------------------------------
        case SUBMIT_DRIVER_REQ: {
            return({
                ...state,
                submitDriver:{loading:true, data:null, error:null}
            })
        }
        case SUBMIT_DRIVER_SUCCESS: {
            return({
                ...state,
                submitDriver:{loading:false, data:action.payload, error:null}
            })
        }

        case SUBMIT_DRIVER_ERROR: {
            return({
                ...state,
                submitDriver:{loading:false, data:null, error:action.payload}
            })
        }
//---------------------------------------------------------------------------
        case SORT_ALPH : {
            let orderedAllDrivers = [...allDrivers]
            
            if (action.payload === "d") {
                orderedAllDrivers.sort((a,b)=> {
                    const nameA = a.name.toUpperCase(); 
                    const nameB = b.name.toUpperCase(); 
                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0
                })
            }   
            else {
                orderedAllDrivers.sort((a,b)=> {
                    const nameA = a.name.toUpperCase(); 
                    const nameB = b.name.toUpperCase(); 
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0
                })
            }

            let orderedShownDrivers = orderedAllDrivers.map(driver=> shownDrivers.includes(driver))
            return({
                ...state,
                shownDrivers:orderedShownDrivers,
                allDrivers:orderedAllDrivers
            })
        }
        
        case SORT_DOB : {
            let orderedAllDrivers = [...allDrivers]
            
            if (action.payload === "d") {
                orderedAllDrivers.sort((a,b)=> {
                    const DobA = a.dob.split("-")
                    const DobB = b.dob.split("-")
                    if (DobA[1] < DobB[1]||DobA[1] == DobB[1] && DobA[2] < DobB[2]||DobA[1] == DobB[1] && DobA[2] == DobB[2] && DobA[3] < DobB[3] ) {
                        return 1;
                    }
                    if (DobA[1] > DobB[1]||DobA[1] == DobB[1] && DobA[2] > DobB[2]||DobA[1] == DobB[1] && DobA[2] == DobB[2] && DobA[3] > DobB[3] ) {
                        return -1;
                    }
                    return 0
                })
            }   
            else {
                orderedAllDrivers.sort((a,b)=> {
                    const DobA = a.dob.split("-")
                    const DobB = b.dob.split("-")
                    if (DobA[1] < DobB[1]||DobA[1] == DobB[1] && DobA[2] < DobB[2]||DobA[1] == DobB[1] && DobA[2] == DobB[2] && DobA[3] < DobB[3] ) {
                        return -1;
                    }
                    if (DobA[1] > DobB[1]||DobA[1] == DobB[1] && DobA[2] > DobB[2]||DobA[1] == DobB[1] && DobA[2] == DobB[2] && DobA[3] > DobB[3] ) {
                        return 1;
                    }
                    return 0
                })
            }
            let orderedShownDrivers = orderedAllDrivers.map(driver=> state.shownDrivers.includes(driver))
            return({
                ...state,
                shownDrivers:orderedShownDrivers,
                allDrivers:orderedAllDrivers
            })
        }

        case FILTER_SOURCE:{
            let toFilter = []
            let done = []
            if(action.payload === "showAll") {
                toFilter = [...state.allDrivers]
                done = toFilter.filter(driver1=>{
                    return (state.teamFilter.some(driver2=>driver1.id===driver2.id))
                })
            } else if (action.payload === "custom") {
                toFilter = state.allDrivers.filter(driver=>isNaN(driver.id))
                done = toFilter.filter(driver1=>{
                    return (state.teamFilter.some(driver2=>driver1.id===driver2.id))
                })
            } else {
                toFilter = state.allDrivers.filter(driver=>!isNaN(driver.id))
                done = toFilter.filter(driver1=>{
                    return (state.teamFilter.some(driver2=>driver1.id===driver2.id))
                })
            }
            return({
                ...state,
                sourceFilter : toFilter,
                shownDrivers : done
            })
        }

        case FILTER_TEAM:{
            let toFilter = []
            let done = []
            if (action.payload === "showAll") {
                toFilter = [...state.allDrivers]
                done = toFilter.filter (driver1 => {
                    return(state.sourceFilter.some(driver2=>driver1.id===driver2.id))
                })
            } else {
                toFilter = state.allDrivers.filter(driver => driver.team.includes(action.payload))
                done = toFilter.filter(driver1=>{
                    return(state.sourceFilter.some(driver2=>driver1.id===driver2.id))
                })
            }
            return({
                ...state,
                teamFilter : toFilter,
                shownDrivers : done
            })
        }

        default:return state
    }
}

export default reducer