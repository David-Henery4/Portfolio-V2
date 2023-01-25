import { useContext, createContext, useState } from "react";
import projectsData from "../projects-data/projectsData";

const AppContext = createContext()

const AppProvider = ({children}) => {
  const [projects,setProjects] = useState(projectsData)
  const [singleProject, setSingleProject] = useState({});
  //
  const getProject = (id) => {
    setSingleProject(projects.find((pro) => pro.id === +id));
  }
  //
  return <AppContext.Provider value={{
    projects,
    getProject,
    singleProject,
  }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}