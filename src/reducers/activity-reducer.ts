import { Activity } from "../types"

type ActivityState = {
    activities : Activity[]
}

export type ActivityActions = 
    { type: 'save-activity', payload: { newActivity : Activity} }


export const initialState : ActivityState= {
    activities: []
}


export const activityReducer = (state : ActivityState, action : ActivityActions) => {
    
    if( action.type === 'save-activity'){
        console.log("desde type activity" + state)
    }

    return state;
}