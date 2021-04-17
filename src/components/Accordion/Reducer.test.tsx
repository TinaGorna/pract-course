import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test("collapsed should be true", () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expect

    expect(newState.collapsed).toBe(true)
})

test("Reducer should trow Error because action type is incorrect", () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    expect(() => {
        reducer(state, {type: "ERROR IS HERE"})
    }).toThrowError();
    //expect
})