 export  type TodoType={
     id: string,
     addedDate: string,
     order: number,
     title: string,
     tasks:Array<TaskType>
 }
 export  type TaskType={
     description: string
     title: string
     isDone: boolean
     status: number
     priority: number
     startDate: string
     deadline: string
     id: string
     todoListId: string
     order: number
     addedDate: string
 }

 export type  UpdateType={
    title?:string,
     status:string,
     priority: number,
     updated:string
 }


