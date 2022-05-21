import {faker} from '@faker-js/faker'

export const baseUrl = 'http://localhost:3002/'
export const userName = 'hola@miso.com'
export const password = 'Misotest2022*'

export const randomMail = faker.internet.email()
export const randomPassword = faker.random.alphaNumeric(10)