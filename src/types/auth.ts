export type Role ="ADMIN"|"JOGADOR"



export type Auth={
    token:string
    user:{
        id:string
        email:string
        name:string
        role:Role
    }
    
}