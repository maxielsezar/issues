import { CreateIssue, UpdateIssue } from "../interface/issue.interface";

const API = "http://localhost:3000/api";

export const getIssuesRequest = async () => fetch(`${API}/issues`);

export const createIssueRequest = async (issue: CreateIssue) =>
  fetch(`${API}/issues`, {
    method: "POST",
    body: JSON.stringify(issue),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const deleteIssueRequest = async (id: string) =>
  fetch(`${API}/issues/${id}`, {
    method: "DELETE",
  });

export const updateIssueRequest = async (id: string, issue: UpdateIssue) =>
  fetch(`${API}/issues/${id}`, {
    method: "PUT",
    body: JSON.stringify(issue),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getIssueRequest = async (id: string) => fetch(`${API}/issues/${id}`);
