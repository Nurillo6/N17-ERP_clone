import type { MajorType } from "./MajorType";
import type { RoomType } from "./RoomType";
import type { StudentType } from "./StudentType";
import type { TeacherType } from "./TeacherType";

export interface GroupType {
    id: number,
    stackId: number,
    name: string,
    status: boolean,
    roomId: number,
    createdAt: string,
    stack:MajorType,
    room:RoomType,
    Students:StudentType[],
    mainTeachers:TeacherType[],
    supportTeachers:TeacherType[]
}