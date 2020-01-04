import { ReducerRegistry }  from "../../../base/redux";
let stateDefault = {
    home: null

};

ReducerRegistry.register("matarstars/home", (state = stateDefault, action) => {
    switch (action.type) {
        case "HomePage":
            return {
                ...state,
                home: {...state.home,...action.home}
            };
        default:
            return state;
    }
});
