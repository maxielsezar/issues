export interface User {
    _id: string;
    name: string;
    email: string;
    createdAt?: Date;
}

export type CreateUser = Omit<User, "_id" | "createdAt" | "updatedAt">;

export type Update = Partial<CreateUser>;