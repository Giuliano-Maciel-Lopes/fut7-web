export type Role ="ADMIN"|"PLAYER"

export type AuthResponse={
   
    datauser:{
        id:string
        email:string
        name:string
        role:Role
    }
    
}
// servidor 

export interface MyJwtPayload {
  userId: string; // user id
  role: "ADMIN" | "PLAYER";
}