export const TOGGLE_SIDENAV = 'TOGGLE_SIDENAV';
export const SET_ACTTIVE_PAGE='SET_ACTIVE_PAGE';
export const SET_SEARCH_TERM='SET_SERACH_TERM';
export const TOGGLE_REPORT_DROPDOWN='TOGGLE_REPORT_DROPDOWN';

export const toggleSideNav=()=>({
    type:TOGGLE_SIDENAV
})
export const setActivePage=(page)=>({
    type:SET_ACTTIVE_PAGE,
    payload:page

});
export const setSearchTerm=(term)=>({
    type:SET_SEARCH_TERM,
    payload:term
})
export const toggleReportDropdown=()=>({
    type:TOGGLE_REPORT_DROPDOWN
})