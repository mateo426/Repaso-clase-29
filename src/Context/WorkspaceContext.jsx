import { createContext } from "react";
import workspaces from "../data/workspacesData";

//Creamos el contexto
export const WorkspaceContext = createContext()

export const WorkspaceContextProvider = ({children}) => {
    //aca vamos a tener toda la logica de aplicacion de mis workspaces

    //1. Creamos un estado inicial de los workspaces
    const [workspaces_state, setWorkspaceState] = useState(workspaces)

    const createWorkspace = (params) => {
        const {workspace_name, workspace_description} = params

        //Nuevo workspace
        const new_workspace = { 
            id: workspaces_state.length + 1,
            title: workspace_name,
            description: workspace_description,
            channels: [
                {
                    id: 1,
                    name: 'general',
                    messages: []
                }
            ]
        }

        setWorkspaceState(
            (prev_state_workspaces) => {
                return [...prev_state_workspaces, new_workspace]
            }
        )
    }

    const deleteWorkspace = (workspace_id_to_delete) => {
        setWorkspaceState(
            (prev_state_workspaces) => {
                return prev_state_workspaces.filter(workspace => workspace.id !== workspace_id_to_delete)
            }
        )
    }

    const getWorkspaceById = (workspace_id) => {
        return workspaces_state.find(workspace => workspace.id === workspace_id)
    }

    //CreateChannel
    //DeleteChannel
    //CreateMessage
    //GetChannelById

    
    return (
        <WorkspaceContext.Provider value={
                {
                    workspaces_state: workspaces_state,
                    createWorkspace: createWorkspace,
                    deleteWorkspace,
                    getWorkspaceById
                }
            }>
            {children}
        </WorkspaceContext.Provider>
    )
}