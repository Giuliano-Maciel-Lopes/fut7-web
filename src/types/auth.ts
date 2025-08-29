export type Role ="ADMIN"|"JOGADOR"



export type AuthResponse={
    token:string
    datauser:{
        id:string
        email:string
        name:string
        role:Role
    }
    
}