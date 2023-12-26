import { test, expect, APIRequestContext } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { Interface } from 'readline'
import { TaskModel } from './fixtures/task.model'
import { deletetaskByHelper } from './support/helpers' // importa do arquivo helper.ts a função 



test('Campo obrigatório', async ({ page }) => {

    const task: TaskModel = {

        name: '',
        is_done: false
    }

    await page.goto('http://192.168.0.10:3000/')

    const inputTaskName = page.locator('input[class*=InputNewTask]')
    await inputTaskName.fill(task.name)
    await page.click('xpath=//button[contains(text(), "Create")]')//clica em criar 

    const validationMessage = await inputTaskName.evaluate(e => (e as HTMLInputElement).validationMessage)
    // neste código de cima estou validando aquela mensagem que vem do navegador de campo obrigatorio(required)
    //ele faz isso porque converte o required em elemento html pra gente puxar
    await expect(validationMessage).toEqual('This is a required field')

})
