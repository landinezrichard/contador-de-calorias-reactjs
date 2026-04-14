import type { Activity } from "../types";

// Definición de los tipos de acciones para el reducer de actividades
export type ActivityActions = {
  type: "save-activity";
  payload: { newActivity: Activity };
} | {type: "set-activeId";
  payload: { activeId: Activity["id"] } } | {type: "delete-activity";
  payload: { activeId: Activity["id"] } };

// El tipo del estado inicial
export type ActivityState = {
  activities: Activity[];
  activeId: Activity["id"];
};

// Estado inicial para el reducer de actividades
export const initialState: ActivityState = {
  activities: [],
  activeId: '',
};

// Reducer para manejar las acciones relacionadas con las actividades
export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions,
) => {
  // Este código emaneja la lógica para actualizar el estado de las actividades según la acción recibida.
  switch (action.type) {
    case "save-activity":
      let updatedActivities: Activity[] = [];
      if(state.activeId) {
        // Si hay un activeId, actualizamos la actividad existente en lugar de agregar una nueva
        updatedActivities = state.activities.map((activity) =>
          activity.id === state.activeId ? action.payload.newActivity : activity,
        );
      } else {
        updatedActivities = [...state.activities, action.payload.newActivity];
      }
      return {
        ...state,
        activities: updatedActivities,
        activeId: '',
      };
    case "set-activeId":
      return {
        ...state,
        activeId: action.payload.activeId,
      };
    case "delete-activity":
      return {
        ...state,
        activities: state.activities.filter((activity) => activity.id !== action.payload.activeId),
        activeId: '',
      };

    default:
      return state;
  }
};
