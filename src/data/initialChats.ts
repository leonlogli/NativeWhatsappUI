import { Chat } from '../types';

const initialChats: Chat[] = [
  {
    id: '1',
    title: 'John Doe',
    image:
      'data:image/jpeg;base64,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',
    messages: [
      {
        text: 'Hey how are you ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '1',
      },
      {
        text: 'Vivamus mattis nunc in dui posuere, eu convallis tellus pharetra. Aliquam erat volutpat. Praesent volutpat ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '2',
      },
      {
        text: 'Hi',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '3',
      },
      {
        text: 'Nam maximus turpis nibh, at tristique est rhoncus ut. Sed mattis tellus euismod ex posuere malesuad',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '4',
      },
      {
        text: 'Tu vas bien ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '5',
      },
      {
        text: 'Good thanks! How about you ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '6',
      },
      {
        text: 'Tu vas bien ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '7',
      },
      {
        text: 'Good thanks! How about you ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '8',
      },
      {
        text: 'Tu vas bien ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '9',
      },
      {
        text: 'Good thanks! How about you ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '10',
      },
      {
        text: 'Tu vas bien ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '11',
      },
      {
        text: 'Good thanks! How about you ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '12',
      },
      {
        text: 'Tu vas bien ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '13',
      },
      {
        text: 'Good thanks! How about you ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '14',
      },
      {
        text: 'Tu vas bien ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '15',
      },
      {
        text: 'Good thanks! How about you ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '16',
      },
      {
        text: 'Tu vas bien ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '17',
      },
      {
        text: 'Good thanks! How about you ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '18',
      },
      {
        text: 'Tu vas bien ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '19',
      },
      {
        text: 'Good thanks! How about you ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '20',
      },
      {
        text: 'Tu vas bien ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '21',
      },
      {
        text: 'Good thanks! How about you ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '23',
      },
      {
        text: 'Tu vas bien ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '24',
      },
      {
        text: 'Good thanks! How about you ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '25',
      },
      {
        text: 'Tu vas bien ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '26',
      },
      {
        text: 'Good thanks! How about you ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '27',
      },
      {
        text: 'Tu vas bien ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '28',
      },
      {
        text: 'Good thanks! How about you ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '29',
      },
      {
        text: 'Tu vas bien ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '30',
      },
      {
        text: 'Hi! How are you ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '31',
      },
    ],
  },
  {
    id: '2',
    title: 'Léon Logli',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sF7_42Pd-qOH63jF6Utlu-zuk3t2Vv__-s-mSKKaPzI2vcHK1D_B2m36NbsP4BJkeDc&usqp=CAU',
    messages: [
      {
        text: 'Hey are you ok ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '1',
      },
      {
        text: 'Hey team, just wanted to touch base on the project status.',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '2',
      },
    ],
  },
  {
    id: '3',
    title: 'Elom M.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0aVl4ZqBCLLz7RjbmI6_Zz6Ul4SGEFxtfvuq-pl_Jl8yjNaJcllb7BezSqKXOaO6FCiQ&usqp=CAU',
    messages: [
      {
        text: 'You be moumou',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '1',
      },
      {
        text: "Sounds good, let's schedule a meeting to go over it.",
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '2',
      },
    ],
  },
  {
    id: '4',
    title: 'Brothers familly',
    image:
      'data:image/jpeg;base64,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',
    messages: [
      {
        text: 'Tu vas bien ?',
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 1,
        id: '1',
      },
      {
        text: "We're doing well, thanks for asking. How about you?",
        createdAt: '2023-05-05T10:10:00.000Z',
        userId: 2,
        id: '2',
      },
    ],
  },
];

export default initialChats;
