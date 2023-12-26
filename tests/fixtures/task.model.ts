// uma interface modeladora de massa do tipo TaskModel para deixar o texto sempre fixo e evitar erro de escrita e o typescript corrigir 

export interface TaskModel {

    name: string 
    is_done: boolean
}