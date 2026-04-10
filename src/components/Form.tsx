import { useState } from "react";
import type { ChangeEvent, SubmitEvent, Dispatch } from "react";
import { categories } from "../data/categories";
import type { Activity } from "../types";
import type { ActivityActions } from "../reducers/activity-reducer";

type FormProps = {
  dispatch: Dispatch<ActivityActions>
}

export default function Form({ dispatch }: FormProps) {

  const initialState = {
    category: 1,
    name: "",
    calories: 0,
  };

  const [activity, setActivity] = useState<Activity>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const isNumberField = ["category", "calories"].includes(e.target.id);
    // console.log("isNumberField: ", isNumberField);
    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? Number(e.target.value) : e.target.value,
    });
  };

  const isValidActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: "save-activity", payload: { newActivity: activity } });

    // Reset form
    setActivity(initialState);
  };

  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="category">
          Categoria:
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="name">
          Actividad:
        </label>
        <input
          className="border border-slate-300 p-2 rounded-lg w-full"
          type="text"
          id="name"
          placeholder="Ej. Comida, Jugo de NAranja, Ensalada, Ejercicio, Pesas, Bicicleta"
          value={activity.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="calories">
          Calorias:
        </label>
        <input
          className="border border-slate-300 p-2 rounded-lg w-full"
          type="number"
          id="calories"
          placeholder="Calorias consumidas o quemadas. ej. 300 o 500"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>

      <div className="text-center">
        <input
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer uppercase disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          value={
            activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"
          }
          disabled={!isValidActivity()}
        />
      </div>
    </form>
  );
}
