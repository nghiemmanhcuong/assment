export interface Iuser {
      id: number;
      name: string;
      isAdmin: boolean;
      location: string;
      status : string;
      img:string,
      email : string,
      pass : string
}
export interface Icustom {
      id: number;
      name: string;
}
export interface Iproject {
      id: number;
      name: string;
      status : string;
      price? : number;
      employ? : Number[];
      totalMoney : number;
      date : Date;
      employs : number,
      members:IMember[]
}
export interface ITask {
      id : number;
      name: string;
      description: string;
      project: string;
      employee: string;
      priority: string;
      status:string;
}

export interface IMember {
      id: number;
      name: string;
      age: number | null;
      phone: string;
      email: string;
}
