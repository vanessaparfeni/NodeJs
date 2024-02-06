const EventEmitter = require('events');

// Создаем экземпляр класса EventEmitter
const observer = new EventEmitter();

// Создаем подписчика (наблюдателя) №1
observer.on('event', (data) => {
  console.log('Наблюдатель №1 получил данные:', data);
});

// Создаем подписчика (наблюдателя) №2
observer.on('event', (data) => {
  console.log('Наблюдатель №2 получил данные:', data);
});

setTimeout(() => {
    // Генерируем событие и передаем данные подписчикам
    observer.emit('event', { message: 'Привет, наблюдатели!' });
}, 2000)