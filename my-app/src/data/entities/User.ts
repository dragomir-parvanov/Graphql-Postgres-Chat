import { BeforeInsert, Check, Column, Entity, PrimaryColumn } from "typeorm";
interface IUser {
  username: string;
  registeredOn: number;
}

export class User implements IUser {
  @PrimaryColumn({ type: "varchar", unique: true })
  username: string;
  @Column({ type: "number", default: "now()" })
  registeredOn: number;
}
