import { Page } from "@playwright/test"
import { TaskModel } from "../../../fixtures/task.model"





export class TasksPage {
readonly page: Page

//função dentro da função 
constructor(){

}

async go() {

    await this.page.goto('http://192.168.0.10:3000/')

}
 async create(task:TaskModel){
    const inputTaskName = this.page.locator('input[class*=InputNewTask]') // definição de um objeto 
   

    await inputTaskName.fill('comprar botas novas')
    await this.page.click('xpath=//button[contains(text(), "Create")]')
}


}