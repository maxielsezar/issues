export interface Issue {
    _id: string;
    title: string;
    description?: string;
    state?: string;
    priority?:string
    createdAt?: Date;
    updatedAt?: Date;
    userEmail:string;
}

export type CreateIssue = Omit<Issue, "_id" | "createdAt" | "updatedAt">;

export type UpdateIssue = Partial<CreateIssue>;