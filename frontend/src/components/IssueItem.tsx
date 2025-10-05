import { useIssues } from "../context/useIssues";
import { Issue } from "../interface/issue.interface";
import { IoTrash } from "react-icons/io5";
import { ChangeEvent } from "react";
import { useState } from "react";

interface Props {
  issue: Issue;
}



function IssueItem({ issue }: Props) {
  const { deleteIssue, updateIssue } = useIssues();
  
  const [isOpen, setIsOpen] = useState(false);


  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
     updateIssue(issue._id, { [name]: value });
  };
  return (
      
    <div className="bg-gray-900 p-2 my-2 justify-between hover:bg-gray-800 hover:cursor-pointer"
        
    >
      <div className="flex justify-center">
        <div className={ `
        ${
          isOpen && "w-full text-center border-2 border-gray-700 p-2 rounded-4xl "
        }`}>
        <h3 className="font-bold my-4">{issue.title}</h3>
    

        <p className="text-slate-400">{isOpen && issue.description}</p>
        </div>
      </div>
     
    
      <div className={`transition-all duration-1400 overflow-hidden flex ${
          isOpen ? " flex max-h-96 p-4 opacity-100" : "max-h-0 p-0 opacity-0"
        }`}>
      
      
      <div className="p-4">
   
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
      </div>
      <div className="p-4">
      <label>Prioridad:</label>
        <select
        className="border-2 text text-center border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
        name="priority"
        id="priority"
        value={issue.priority}
        onChange={handleChange}
      >
        <option value="high">Alta</option>
        <option value="medium">Media</option>
        <option value="low">Baja</option>
      </select>
      </div>
       <button
       className="p-4"
          onClick={() => {
            if (!window.confirm("estas seguro de eleminar la incidencia?")) return;
            deleteIssue(issue._id);
          }}
        >
          <IoTrash className="hover:text-red-500 h-10 w-10" />
        </button>
   
        
      </div>
      <div className="flex justify-center">
          
        <button className=" border-gray-700 p-1 rounded-lg bg-zinc-800" 
          onClick={() => setIsOpen(!isOpen)}>{!isOpen ? "ver": "cerrar"}
        </button>
      </div>
    </div>

  );
}

export default IssueItem;
