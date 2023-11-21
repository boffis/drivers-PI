import {
    FETCH_ALL_DRIVERS_REQ, FETCH_ALL_DRIVERS_SUCCESS, FETCH_ALL_DRIVERS_ERROR,
    FETCH_ID_DRIVER_REQ, FETCH_ID_DRIVER_SUCCESS, FETCH_ID_DRIVER_ERROR,
    FETCH_NAME_DRIVER_REQ, FETCH_NAME_DRIVER_SUCCESS, FETCH_NAME_DRIVER_ERROR,
    SUBMIT_DRIVER_REQ, SUBMIT_DRIVER_SUCCESS, SUBMIT_DRIVER_ERROR,
    FETCH_TEAMS_REQ, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_ERROR,
    SORT_ALPH, SORT_DOB,
    FILTER_SOURCE, FILTER_TEAM
} from "./types"   

import axios from "axios"

const fetchDriversRequest = () => {
    return({
        type:FETCH_ALL_DRIVERS_REQ,
        payload:null
    })
}

const fetchDriversSuccess = (data) => {
    return ({
        type: FETCH_ALL_DRIVERS_SUCCESS,
        payload:data
    })
}

const fetchDriversError = (error) => {
    return ({
        type: FETCH_ALL_DRIVERS_ERROR,
        payload:error
    })
}

export const fetchDrivers = () => {
    return(function(dispatch) {
        dispatch(fetchDriversRequest())

        axios("http://localhost:3001/drivers/")
        .then(({data})=>{
            dispatch(fetchDriversSuccess(data))
        })
        .catch((error)=>{
            dispatch(fetchDriversError(error.message))
        })
    })
}


const fetchDriverByIdRequest = () => {
    return({
        type:FETCH_ID_DRIVER_REQ,
        payload:null
    })
}

const fetchDriverByIdSuccess = (data) => {
    return ({
        type: FETCH_ID_DRIVER_SUCCESS,
        payload:data
    })
}

const fetchDriverByIdError = (error) => {
    return ({
        type: FETCH_ID_DRIVER_ERROR,
        payload:error
    })
}

export const fetchDriverById = (id) => {
    return(function(dispatch) {
        dispatch(fetchDriverByIdRequest())

        axios(`http://localhost:3001/drivers/${id}`)
        .then(({data})=>{
            dispatch(fetchDriverByIdSuccess(data))
        })
        .catch((error)=>{
            dispatch(fetchDriverByIdError(error.message))
        })
    })
}


const fetchDriversByNameRequest = () => {
    return({
        type:FETCH_NAME_DRIVER_REQ,
        payload:null
    })
}

const fetchDriversByNameSuccess = (data) => {
    return ({
        type: FETCH_NAME_DRIVER_SUCCESS,
        payload:data
    })
}

const fetchDriversByNameError = (error) => {
    return ({
        type: FETCH_NAME_DRIVER_ERROR,
        payload:error
    })
}

export const fetchDriversByName = (name) => {
    return(function(dispatch) {
        dispatch(fetchDriversByNameRequest())

        axios(`http://localhost:3001/drivers/name?name=${name}`)
        .then(({data})=>{
            dispatch(fetchDriversByNameSuccess(data))
        })
        .catch((error)=>{
            dispatch(fetchDriversByNameError(error.message))
        })
    })
}

const submitDriverRequest = () => {
    return({
        type:SUBMIT_DRIVER_REQ,
        payload:null
    })
}

const submitDriverSuccess = (data) => {
    return ({
        type: SUBMIT_DRIVER_SUCCESS,
        payload:data
    })
}

const submitDriverError = (error) => {
    return ({
        type: SUBMIT_DRIVER_ERROR,
        payload:error
    })
}

export const submitDriver = (driver) => {
    return(function(dispatch) {
        dispatch(submitDriverRequest())

        axios.post("http://localhost:3001/drivers/", driver)
        .then(({data})=>{
            dispatch(submitDriverSuccess(data))
        })
        .catch((error)=>{
            dispatch(submitDriverError(error.message))
        })
    })
}


const fetchTeamsRequest = () => {
    return({
        type:FETCH_TEAMS_REQ,
        payload:null
    })
}

const fetchTeamsSuccess = (data) => {
    return ({
        type: FETCH_TEAMS_SUCCESS,
        payload:data
    })
}

const fetchTeamsError = (error) => {
    return ({
        type: FETCH_TEAMS_ERROR,
        payload:error
    })
}

export const fetchTeams = () => {
    return(function(dispatch) {
        dispatch(fetchTeamsRequest())

        axios("http://localhost:3001/teams/")
        .then(({data})=>{
            dispatch(fetchTeamsSuccess(data))
        })
        .catch((error)=>{
            dispatch(fetchTeamsError(error.message))
        })
    })
}

export const sortAplh = (direction) => {
    return({
        type: SORT_ALPH,
        payload : direction
    })
}

export const sortDob = (direction) => {
    return({
        type: SORT_DOB,
        payload : direction
    })
}

export const filterSource = (source) => {
    return({
        type: FILTER_SOURCE,
        payload:source
    })
}

export const filterTeam = (team) => {
    return({
        type: FILTER_TEAM,
        payload:team
    })
}