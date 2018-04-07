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
export const newProjects = (projects) => {
  return {
    type: "NEW_PROJECTS",
    payload: projects
  }
}
export const changeQueryForSearch = (query)=>{
  return{
    type:"CHANGE_QUERY_FOR_SEARCH",
    payload: query
  }
}

export const changeActivePage = (page)=>{
  return{
    type:"CHANGE_ACTIVE_PAGE",
    payload: page
  }
}

export const changeActiveNavLink = (navLinks)=>{
  return {
    type: "CHANGE_ACTIVE_NAV_LINK",
    payload: navLinks
  }
}

export const changeRegisterPage = (registerPage) => {
  return {
    type: "CHANGE_REGISTER_PAGE",
    payload: registerPage
  }
}

export const changeLoginPage = (loginPage) => {
  return {
    type: "CHANGE_LOGIN_PAGE",
    payload: loginPage
  }
}

export const changeFlag = (flag) => {
  return {
    type: "CHANGE_FLAG",
    payload: flag
  }
}

export const changeImageArray = (imageArray) => {
  return {
    type: "CHANGE_IMAGE_ARRAY",
    payload: imageArray
  }
}

export const changeImagesIndex = (imagesIndex) => {
  return {
    type: "CHANGE_INDEX_IMAGES",
    payload: imagesIndex
  }
}

export const changeCountImages = (count) => {
  return {
    type: "CHANGE_COUNT_IMAGES",
    payload: count
  }
}