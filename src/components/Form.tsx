import { useState } from "react";
import type { ChangeEvent } from "react";
import { categories } from "../data/categories";

export default function Form() {
  const[activity, setActivity] = useState({
	category: 1,
	name: '',
	calories: 0
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
	setActivity({
		...activity,
		[e.target.id]: e.target.value
	});
  };

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
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
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer uppercase "
          type="submit"
		  value="Guardar Comida o Guardar Ejercicio"
        />
      </div>
    </form>
  );
}
