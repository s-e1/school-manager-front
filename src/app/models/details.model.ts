// export class Details {
// }
export interface DetailsSchool {
    0: DetailsCourse[],
    1: DetailsStudent[],
    2: Total
}
export interface DetailsAdmins {
    0: DetailsAdmin[],
    1: TotalAdmins
}
export interface DetailsCourse {
    id?: number,
    name: string,
    description: string,
    image: string
}
export interface DetailsStudent {
    id?: number,
    name: string,
    phone: string,
    email: string,
    image: string,
    courses?: Array<string>
}
export interface DetailsAdmin {
    id?: number,
    name: string,
    phone: string,
    email: string,
    image: string,
    role: string,
    password: string
}
export interface Total {
    courses: number,
    students: number
}
export interface StudentName {
    name: string
}

export interface Course {
    0: DetailsCourse,
    1: StudentName[],
    2: number
}
export interface Student {
    0: DetailsStudent,
    1: CourseBasic[],
    2: CourseBasic[]
}
export interface CourseBasic {
    id: number,
    name: string
}
export interface TotalAdmins {
    administraters: number
}