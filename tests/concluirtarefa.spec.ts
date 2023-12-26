import { test, expect, APIRequestContext } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { Interface } from 'readline'
import { TaskModel } from './fixtures/task.model'
import { deletetaskByHelper } from './support/helpers' // importa do arquivo helper.ts a função 
import data from './fixtures/tasks.json' // importando a massa em Json
import { request } from 'http'

test('Concluir tarefa', async ({ page }) => {

    const task = data.update as TaskModel
    


})