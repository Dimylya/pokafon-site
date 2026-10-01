import mobil1 from '../assets/mobile1.jpg'
import laptop1 from '../assets/laptop1.png'
import hear from '../assets/hear.jpg'
import TV from '../assets/TV1.jpg'
import ps5 from '../assets/ps5.jpg'
import ipadPro from '../assets/ipad_pro.jpg'
import palesos from '../assets/robot_sosi.jpg'
import foto from '../assets/fotoaparat.jpg'
import appleWatch from '../assets/apple_watch.jpg'
import oralB from '../assets/oral-B.jpg'

const electronicsCatalog = [
  {
    id: 1,
    name: "Смартфон Samsung Galaxy S23",
    price: 79990,
    description: "Флагманский смартфон с AMOLED-экраном 6.1\", процессором Snapdragon 8 Gen 2, тройной камерой 50+12+10 МП, поддержкой 5G и защитой IP68.",
    quantity: 15,
    img: mobil1
  },
  {
    id: 2,
    name: "Ноутбук Apple MacBook Air M2",
    price: 119990,
    description: "Ультратонкий ноутбук с чипом M2, 13.6\" Liquid Retina дисплеем, 8 ГБ ОЗУ, 256 ГБ SSD, до 18 часов автономной работы.",
    quantity: 8,
    img: laptop1
  },
  {
    id: 3,
    name: "Беспроводные наушники Sony WH-1000XM5",
    price: 34990,
    description: "Полноразмерные наушники с активным шумоподавлением, поддержкой LDAC, временем работы до 30 часов и быстрой зарядкой.",
    quantity: 22,
    img: hear
  },
  {
    id: 4,
    name: "Телевизор LG OLED65C3",
    price: 149990,
    description: "65-дюймовый OLED-телевизор с разрешением 4K, частотой обновления 120 Гц, поддержкой Dolby Vision и Dolby Atmos, платформой webOS.",
    quantity: 5,
    img: TV
  },
  {
    id: 5,
    name: "Игровая консоль PlayStation 5",
    price: 54990,
    description: "Консоль с SSD на 825 ГБ, поддержкой 4K и трассировки лучей, обратной совместимостью с играми PS4 и контроллером DualSense.",
    quantity: 10,
    img: ps5
  },
  {
    id: 6,
    name: "Планшет iPad Pro 12.9\"",
    price: 129990,
    description: "Планшет с дисплеем Liquid Retina XDR, чипом M2, 128 ГБ памяти, поддержкой Apple Pencil и Magic Keyboard, идеален для творчества и работы.",
    quantity: 7,
    img: ipadPro
  },
  {
    id: 7,
    name: "Робот-пылесос Xiaomi Robot Vacuum S10+",
    price: 29990,
    description: "Умный робот-пылесос с функцией влажной уборки, навигацией LiDAR, управлением через Mi Home и временем работы до 180 минут.",
    quantity: 30,
    img: palesos
  },
  {
    id: 8,
    name: "Фотоаппарат Canon EOS R6 Mark II",
    price: 189990,
    description: "Беззеркальная камера с полнокадровой матрицей 24.2 МП, скоростью съёмки 40 кадров/с, 4K-видео и улучшенной автофокусировкой.",
    quantity: 4,
    img: foto
  },
  {
    id: 9,
    name: "Умные часы Яблоко Смотреть Series 9",
    price: 44990,
    description: "Часы с Always-On Retina-дисплеем, датчиком кислорода в крови, отслеживанием тренировок, защитой от воды и пыли, до 18 часов работы.",
    quantity: 18,
    img: appleWatch
  },
  {
    id: 10,
    name: "Электрическая зубная щётка Oral-B iO Series 9",
    price: 14990,
    description: "Щётка с интеллектуальным датчиком давления, круговым дисплеем, 7 режимами чистки, синхронизацией с приложением и зарядным кейсом.",
    quantity: 25,
    img: oralB
  }
];

function Delay (){
    const delay = Math.floor(Math.random() * (1000 - 500) + 500);
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(electronicsCatalog), delay)
    })
}

export default Delay