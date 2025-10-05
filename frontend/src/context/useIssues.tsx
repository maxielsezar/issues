import { useContext } from "react";
import { IssueContext } from "./IssueContext";

export const useIssues = () => {
  const context = useContext(IssueContext);
  if (!context) throw new Error("useIssues must be used within a IssueProvider");
  return context;
};
