import { TOGGLE_SIDENAV,TOGGLE_REPORT_DROPDOWN,SET_ACTTIVE_PAGE,SET_SEARCH_TERM } from "../actions/AdminNavbarAction";
const initialState={
    showSideNav : false,
    activePage:'home',
    searchTerm:'',
    showReportDropdown:false
};

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case TOGGLE_SIDENAV:
            return {...state,showSideNav:!state.showSideNav};
        case SET_ACTTIVE_PAGE:
            return{...state,activePage:action.payload}
        case SET_SEARCH_TERM:
            return{...state,searchTerm:action.payload}
        case TOGGLE_REPORT_DROPDOWN:
            return{...state,showReportDropdown:!state.showReportDropdown}
        default:
            return state
    }
}