export const select = (car)=>{
  return{
    type:"CAR_SELECTED",
    payload: car
  }
};
export const changeProjects = (projects)=>{
  return{
    type:"CHANGE_PROJECTS",
    payload: projects
  }
}