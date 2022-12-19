
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://127.0.0.1:5500/public/index.html')
})

afterAll(async () => {
    driver.quit()
})

// test('Title shows up when page loads', async () => {
//     const title = await driver.findElement(By.id('title'))
//     const displayed = await title.isDisplayed()
//     expect(displayed).toBe(true)
// })
test('draw button returns div',async()=>{
    await driver.findElement(By.id("draw")).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    await driver.sleep(2000)
    expect(displayed).toBe(true)
    
})
test('clciking add to duo, adds to duo',async()=>{
    await driver.findElement(By.id("draw")).click()
    await driver.sleep(2000)
    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(2000)
    const player_duo=  driver.findElement(By.id('player-duo'))
    await driver.sleep(2000)
    const displayed = await player_duo.isDisplayed()
    await driver.sleep(2000)
    expect(displayed).toBe(true)
})
