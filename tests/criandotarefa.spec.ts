import { test, expect, APIRequestContext } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { Interface } from 'readline'
import { TaskModel } from './fixtures/task.model'
import { deletetaskByHelper } from './support/helpers' // importa do arquivo helper.ts a função 
import data from './fixtures/tasks.json' // importando a massa em Json
import { TasksPage } from './support/pages/tasks'


test('Deve poder criar uma nova tarefa', async ({ page, request }) => {

    const task = data.success as TaskModel // trazendo o Json
    //Dado que eu tenha uma nova tarefa 

    // deletando o texto via API para nao enviar tarefa repetida
    await request.delete('http://localhost:3333/helper/tasks/' + task.name)
    //E que eu estou na página de cadastro
    await page.goto('http://192.168.0.10:3000/')
    await expect(page).toHaveTitle('Gerencie suas tarefas com Mark L')

    //Quando faço o cadastro de uma nova tarefa 
    // xpath uma função para encontrar texto do botão

    //Então essa tarefa deve ser exibida na lista 
    const target = page.locator(`css= .task-item p >> text`+ task.name)// usando testId (mudei para locator) constante para puxar esse elemento TestId para validação
    //Para a automação encontrar + de 1 tarefa na lista usa assim:css=task-item p >> text=' +taskname
    await expect(target).toBeVisible()

})

