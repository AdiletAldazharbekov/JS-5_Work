// 2) У вас есть массив гостей которым вы хотите отправить рассылку. 
// Исключением должны являтся имена 'Ivan' - 'Oleg' 
// им стоит отправить письмо о том что их к сожалению не приглосили
console.log('\nЗадача 2 - Отпавить приглашение в зависимости от условий')
let allNamePersonal = [
    'Misha',
    'Andrey',
    'Sasha',
    'Oleg',
    'Danil',
    'Dima',
    'Artur',
    'Ivan',
    'Slava',
    'Alisher',
    'Amiran',
   ]

   for (let i of allNamePersonal){
       if(i=='Ivan' ||i=='Oleg' ){
        console.log(`${i}, к сожалению вы НЕ приглашены из за санкций!`)
       }else{
        console.log(`${i}, вы приглашены на ежегодное вручение премии!`)
       }
   }