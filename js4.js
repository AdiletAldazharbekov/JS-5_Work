
  // У вас есть массив с объектами. 
  // В каждом объекте имя товара и его цена. 
  // Вам необходимо к каждому объекту в цикле добавить img 
  // в котором будех хранится фотография товара. 
  // В итоге вернуть новый массив с объектами которые содержать картинки.
  console.log('\nЗадача 4 - Добавить ключ для объектов внутри массива')
   const products = [
    {
      title: 'Куртка Осеняя',
      price: '2300$',
    },
    {
      title: 'Шорты Puma',
      price: '300$',
    },
    {
      title: 'Кросовки Nike',
      price: '1200$',
    },
    {
      title: 'Очки Prada',
      price: '700$',
    },
    {
      title: 'Кофта',
      price: '450$',
    },
   ]
    

   const productsNew = []
   for(let i of products){
    i.img = "ссылка на фото"
    console.log(i)
   }