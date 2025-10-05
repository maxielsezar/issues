import IssueForm from "./components/IssueForm";
import IssuesList from "./components/IssuesList";
import { IssueProvider } from "./context/IssueContext";


function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex justify-center items-center">
      <div className="bg-gray-950 p-4 w-full">
        <h1 className="text-3xl font-bold text-center flex my-2 w-full">Aplicacion de Incidencias</h1>
        <IssueProvider>
          <div className="flex justify-around">
            <IssueForm />
            <IssuesList />
          </div>
       
        </IssueProvider>
      </div>
    </div>
  );
}

export default App;
