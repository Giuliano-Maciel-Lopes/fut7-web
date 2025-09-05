export type Role ="ADMIN"|"PLAYER"



export type AuthResponse={
   
    datauser:{
        id:string
        email:string
        name:string
        role:Role
    }
    
}