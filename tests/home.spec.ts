import { test, expect } from '@playwright/test'

test('webapp deve estar online', async ({ page }) => {  // criando o bloco da função do teste (precisa ser async pra funcionar de forma assincrona com outros comandos )

    await page.goto('http://192.168.0.10:3000/') // await e fundamental pra esperar a pagina carregar senao dar ruim 
    await expect(page).toHaveTitle('Gerencie suas tarefas com Mark L')

}
)

