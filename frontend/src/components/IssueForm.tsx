import { ChangeEvent, FormEvent, useState } from "react";
import { useIssues } from "../context/useIssues";

function IssueForm() {
  const [issue, setIssue] = useState({
    title: "",
    description: "",
    state: "open",
    priority:"high",
    userEmail:"maxielsezar@gmail.com"
  });
  const { createIssue } = useIssues();


  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createIssue(issue);
  };
  
  return (
    <form className="h-screen" onSubmit={handleSubmit}>
      
      <label>Titulo:</label>
      <input
        value={issue.title}
        onChange={handleChange}
        name="title"
        type="text"
        placeholder="Titulo de la Incidencia"
        className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
      />

      <label>Descripcion:</label>
      <textarea
        name="description"
        rows={3}
        onChange={handleChange}
        className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
        placeholder="Descripción de la Incidencia"
      ></textarea>

    
      <label>Estado:</label>
      <select className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" 
        name="state" 
        id="state"
        value={issue.state}
        onChange={handleChange}
        >
          <option value="open">Abierto</option>
          <option value="in_progress">En Progreso</option>
          <option value="closed">Cerrado</option>
      </select>


      <label>Prioridad:</label>
       <select 
       className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" 
       name="priority" 
       id="priority"
       onChange={handleChange}
       >
          <option value="high">Alta</option>
          <option value="medium">Media</option>
          <option value="low">Baja</option>
      </select>

      <button type="submit" className="bg-indigo-500 px-3 block py-2 w-full">
        Guardar
      </button>
    </form>
  );
}

export default IssueForm;
