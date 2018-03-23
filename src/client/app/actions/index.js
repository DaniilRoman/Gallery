export const select = (project)=>{
  return{
    type:"PROJECT_SELECTED",
    payload: project
  }
};
export const changeProjects = (projects)=>{
  return{
    type:"CHANGE_PROJECTS",
    payload: projects
  }
}
export const changeQueryForSearch = (query)=>{
  return{
    type:"CHANGE_QUERY_FOR_SEARCH",
    payload: query
  }
}