import { expect, APIRequestContext } from "@playwright/test"
import { TaskModel } from "../fixtures/task.model"

require('dotenv').config()

const BASE_API= process.env.BASE_API // customizei o api no arquivo env

//função que tem a responsabilidade de excluir a tarefa pelo nome via API 
export async function deletetaskByHelper(request: APIRequestContext, taskname: string) {

    await request.delete(`${BASE_API}/helper/tasks/ ${taskname}`)

}