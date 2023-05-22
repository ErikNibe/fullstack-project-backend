import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import Client from "./client.entitie";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 200 })
  fullName: string;

  @Column({ type: "varchar", length: 50, unique: true })
  email: string;

  @Column({ type: "varchar", unique: true })
  phone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => Client)
  client: Client;
}

export default Contact;
