import type { Activity } from "../types";

// Definición de los tipos de acciones para el reducer de actividades
export type ActivityActions = {
  type: "save-activity";
  payload: { newActivity: Activity };
};

// El tipo del estado inicial
type ActivityState = {
  activities: Activity[];
};

// Estado inicial para el reducer de actividades
export const initialState: ActivityState = {
  activities: [],
};

// Reducer para manejar las acciones relacionadas con las actividades
export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions,
) => {
  // Este código emaneja la lógica para actualizar el estado de las actividades según la acción recibida.
  switch (action.type) {
    case "save-activity":
      return {
        ...state,
        activities: [...state.activities, action.payload.newActivity],
      };
  }
};
