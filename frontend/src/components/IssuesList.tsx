import IssueItem from "./IssueItem";
import { useIssues } from "../context/useIssues";

function IssuesList() {
  const { issues } = useIssues();

  if (!issues.length)
    return <p className="text-center text-xl font-bold my-4">Sin Incidencias</p>;
/*
 const filteredIssues = () => {
    return issues.filter((issue) => {
       return 
        issue.title.toLowerCase().includes(search.toLowerCase()) ||
        issue.description?.toLowerCase().includes(search.toLowerCase()) 
    })
  }*/


  return (

    <div>

      {issues.map((issue) => (
         <IssueItem
          key={issue._id}
          issue={issue}
        />
      ))}
    </div>
  );
}

export default IssuesList;
