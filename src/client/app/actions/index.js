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