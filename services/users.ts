import axios from "axios";
import { User } from "@/types/Iuser";

export async function getUsers(): Promise<Record<string, User>>{
    const { data } = await axios.get<Record<string, User>>('data/user.json')
    return data
}

export async function getUser(id: number): Promise<User | null> {
    const users = await getUsers()
    const key = `user${id}`
    return users[key] ?? null
}