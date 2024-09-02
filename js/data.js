const evacuatorData = [
  {
    image: './assets/img/evacuator1.png',
    prices: ['5000 руб', '3000 руб', 'нет', 'нет', '50 руб/км'],
    description: 'Эвакуатор авто. Всегда на связи! Быстро и надежно',
    buttons: [{ id: 'phone1' }, { id: 'phone2' }],
  },
  {
    image: './assets/img/evacuator2.png',
    prices: ['4000 руб', '3000 руб', '4000 руб', '6000 руб', '50 руб/км'],
    description:
      'Круглосуточно. Стоянка в районе метро Технопарк, быстро доберусь в любую точку города.',
    buttons: [{ id: 'phone1', disabled: true }, { id: 'phone2' }],
  },
  {
    image: './assets/img/evacuator1.png',
    prices: ['5000 руб', '3000 руб', 'нет', 'нет', '50 руб/км'],
    description: 'Эвакуатор авто. Всегда на связи! Быстро и надежно',
    buttons: [{ id: 'phone1' }, { id: 'chat' }],
  },
  {
    image: './assets/img/evacuator2.png',
    prices: ['4000 руб', '3000 руб', '4000 руб', '6000 руб', '50 руб/км'],
    description:
      'Круглосуточно. Стоянка в районе метро Технопарк, быстро доберусь в любую точку города.',
    buttons: [{ id: 'phone1' }, { id: 'chat', disabled: true }],
  },
]

export default evacuatorData
