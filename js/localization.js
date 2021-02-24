uzbek = false
switchLang()

function switchLang() {
  if (uzbek) {
    document.getElementById('intro').innerHTML = 'Администрация Пскентского района для активного участия в природоохранной деятельности и благоустройстве района, представляет проект ObodPskent. Загрузите приложение из магазинов AppStore и PlayMarket.'

    document.getElementById('h1').innerHTML = 'Удобно'
    document.getElementById('p1').innerHTML = 'Отправьте информацию в соответствующие организации без многочисленных этапов регистрации.'

    document.getElementById('h2').innerHTML = 'Быстро'
    document.getElementById('p2').innerHTML = 'Сотрудники Хокимията изучат полученную информацию и ответят Вам в онлайн формате о результатах.'

    document.getElementById('h3').innerHTML = 'Эффективно'
    document.getElementById('p3').innerHTML = 'Отслеживайте результаты без необходимости происуствовать в длительных очередях на приеме у хокимията.'

    document.getElementById('targetBand').innerHTML = 'Свойства'
    document.getElementById('targetHeading').innerHTML = 'Цель проекта'
    document.getElementById('target').innerHTML = 'Основная цель проекта - обеспечение благоприятной окружающей среды в Пскентском районе и реализация со стороны хокимията и ответственных организаций природоохранных процессов при активном участии граждан.'

    document.getElementById('instructions').innerHTML = 'Инструкции по использованию'
    document.getElementById('instructions_desc').innerHTML = 'Прочтите озакомительные инструкции ниже, чтобы использовать приложение.'
    document.getElementById('downloadNow').innerHTML = 'Скачайте прямо сейчас'

    document.getElementById('hokimiyat').innerHTML = 'Свяжитесь с хокимиятом'
    document.getElementById('address').innerHTML = 'Адрес:'
    document.getElementById('address_txt').innerHTML = 'город Пскент'
    document.getElementById('email').innerHTML = 'Koнтакты:'

    document.getElementById('imgOne').src = './image/one_rus.png'
    document.getElementById('imgTwo').src = './image/two_rus.png'
    document.getElementById('imgThree').src = './image/three_rus.png'
    document.getElementById('imgFour').src = './image/four_rus.png'
    document.getElementById('imgFive').src = './image/five_rus.png'
    document.getElementById('imgSix').src = './image/six_rus.png'
    document.getElementById('imgSeven').src = './image/seven_rus.png'

    uzbek = false
  } else {
    document.getElementById('intro').innerHTML = 'Pskent tuman hokimiyati Sizning atrof-muhitni saqlash va obodonlashtirishdagi faolligingizni qo\'llab-quvvatlash uchun ObodPskent loyihasini taqdim etadi. Ilovani AppStore va PlayMarketdan o\'z telefoningizga yuklab oling.'
    
    document.getElementById('h1').innerHTML = 'Oson'
    document.getElementById('p1').innerHTML = 'Qulay dastur interfeysi yordamida Siz hokimiyatga ma\'lumotni oson yo\'llash imkoniyatini beradi. Ro\'yxatdan o\'tish tez va oson.'

    document.getElementById('h2').innerHTML = 'Tezkor'
    document.getElementById('p2').innerHTML = 'Hokimiyat kelgan ma\'lumotlarni tezkor ko\'rib chiqadi va uni yechimi to\'g\'risida Sizga onlayn ravishda javob qaytaradi.'

    document.getElementById('h3').innerHTML = 'Navbatsiz'
    document.getElementById('p3').innerHTML = 'Amalga oshirilgan jarayonlarni onlayn ravishda ko\'rib boring. Hokimiyatga endilikda kelib-ketish hojati yo\'q.'

    document.getElementById('targetBand').innerHTML = 'Xususiyat'
    document.getElementById('targetHeading').innerHTML = 'Loyiha maqsadi'
    document.getElementById('target').innerHTML = 'Obod Pskent loyihaning oldiga qo\'yilgan asosiy maqsad bu Pskent tumanida obodonlashtirish va atrof-muhitni saqlashga yo\'naltirilgan jarayonlarni fuqarolar faol ishtirokida tuman hokimiyati va ma\'sul tashkilotlar tarafidan obodonlashtirish ishlar amalga oshirish.'

    document.getElementById('instructions').innerHTML = 'Foydalanish uchun qo\'llanma'
    document.getElementById('instructions_desc').innerHTML = 'Ilovadan foydalanish uchun quyidagi qo\'llanma bilan tanishing.'
    document.getElementById('downloadNow').innerHTML = 'Xoziroq yuklab oling'

    document.getElementById('hokimiyat').innerHTML = 'Hokimiyat bilan bog\'laning'
    document.getElementById('address').innerHTML = 'Manzil:'
    document.getElementById('address_txt').innerHTML = 'Pskent shahri'
    document.getElementById('email').innerHTML = 'Kontaktlar:'

    document.getElementById('imgOne').src = './image/one.png'
    document.getElementById('imgTwo').src = './image/two.png'
    document.getElementById('imgThree').src = './image/three.png'
    document.getElementById('imgFour').src = './image/four.png'
    document.getElementById('imgFive').src = './image/five.png'
    document.getElementById('imgSix').src = './image/six.png'
    document.getElementById('imgSeven').src = './image/seven.png'

    uzbek = true
  }
}

const language = document.querySelector('.lang')

language.addEventListener('click', switchLang)