import { createContext, useEffect, useState } from "react";
import { CreateIssue, Issue, UpdateIssue } from "../interface/issue.interface";
import {
  createIssueRequest,
  deleteIssueRequest,
  getIssuesRequest,
  updateIssueRequest,
} from "../api/issues";

interface IssueContextValue {
  issues: Issue[];
  createIssue: (issue: CreateIssue) => Promise<void>;
  deleteIssue: (id: string) => Promise<void>;
  updateIssue: (id: string, issue: UpdateIssue) => Promise<void>;
}

export const IssueContext = createContext<IssueContextValue>({
  issues: [],
  createIssue: async () => {
    throw new Error("createIssue() not implemented");
  },
  deleteIssue: async () => {
    throw new Error("deleteIssue() not implemented");
  },
  updateIssue: async () => {
    throw new Error("updateIssue() not implemented");
  },
});

interface Props {
  children: React.ReactNode;
}

export const IssueProvider: React.FC<Props> = ({ children }) => {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
  const fetchIssues = async () => {
    try {
      const response = await getIssuesRequest();
      const data = await response.json();
      setIssues(data);
    } catch (error) {
      console.error("Error al cargar issues:", error);
    }
  };
  fetchIssues();
}, []);

  const createIssue = async (issue: CreateIssue) => {
    const response = await createIssueRequest(issue);
    const data = await response.json();
    setIssues([...issues, data]);
  };

  const deleteIssue = async (id: string) => {
    const response = await deleteIssueRequest(id);
    console.log(response)
    if (response.status === 204) {
      setIssues(issues.filter((issue) => issue._id !== id));
    }
  };

  const updateIssue = async (id: string, issue: UpdateIssue) => {
  const response = await updateIssueRequest(id, issue);

  let data = {};
  try {
    data = await response.json();
  } catch {
    console.warn("No se recibió JSON del servidor al actualizar.");
  }
  setIssues((prev) =>
    prev.map((i) =>
      i._id === id
        ? { ...i, ...issue, ...data } 
        : i
    )
  );
};

  return (
    <IssueContext.Provider value={{ issues, createIssue, deleteIssue, updateIssue }}>
      {children}
    </IssueContext.Provider>
  );
};

