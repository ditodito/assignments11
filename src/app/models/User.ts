export interface User {
  firstName: string,
  lastName: string,
  birthDate: Date,
  status: Status,
  about: string
}

export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Deleted = 'Deleted'
}
