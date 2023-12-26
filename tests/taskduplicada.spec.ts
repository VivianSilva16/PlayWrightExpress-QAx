import { test, expect, APIRequestContext } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { Interface } from 'readline'
import { TaskModel } from './fixtures/task.model'
import { deletetaskByHelper } from './support/helpers' // importa do arquivo helper.ts a função 
import {TasksPage} from './support/pages/tasks'





test('Não deve cadastrar tarefa duplicada', async ({ page, request }) => {

    // uma constante para a tarefa e modelando ela com os dados da API 
    const task: TaskModel = {

        name: 'Comprar botas novas',
        is_done: false
    }
    //deleta via api se ela ja tiver la 
    await request.delete('http://localhost:3333/helper/tasks/' + task.name)

    // recadastrando via API
    const newTask = await request.post('http://localhost:3333/tasks/', { data: task })
    expect(newTask.ok()).toBeTruthy()

    await page.goto('http://192.168.0.10:3000/')


    // procura o campo de pesquisa e digita a tarefa(taskname)
    const inputTaskName = page.locator('input[class*=InputNewTask]')
    await inputTaskName.fill(task.name)
    await page.click('xpath=//button[contains(text(), "Create")]')//clica em criar 


    const target = page.locator('.swa12-html-container')//declarando constante de target para achar elemento
    await expect(target).toHaveText('Task already exists!')//esperando a mensagem de erro aparecer.
})