import { UUID } from "crypto";

export interface IIncomingUser {
  id: UUID;
  name: string;
  secondName: string;
  lastName: string;
  username: string;
  password: string;
  isManager: boolean;
}
