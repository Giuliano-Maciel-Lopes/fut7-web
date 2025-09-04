export type Role ="ADMIN"|"JOGADOR"



export type AuthResponse={
   
    datauser:{
        id:string
        email:string
        name:string
        role:Role
    }
    
}