const temples = [
  {
    location: 'Amherstburg',
    image: '/images/lodges/amherstburg.png',
    address: '68 Murray Street',
    parking: 'on Ramsey Street or public lot at Ramsey and Richmond',

    lodges: [
      {
        name: 'Thistle Lodge 34',
        lodgeImage: '/images/lodges/amherstburg.png',
        mainImage: '',
        ctaImage: '/images/lodges/thistlelodge.png',
        history:
          'orem ipsum dolor sit amet, vidit mandamus moderatius ad sed. Id quod complectitur',
        meeting: 'First Tuesday at 8:00 PM except for July and August',
        installation:
          'December 27 (moved to December 28 if the 27th is a Sunday)',
        website: '',
        slug: 'thistle-lodge',
      },
    ],
  },
  {
    location: 'Essex',
    image: '/images/lodges/essex.png',
    address: '30 Laird Avenue',
    parking: 'on site',

    lodges: [
      {
        name: 'Parvaim Central 395',
        image: '/images/lodges/essex.png',
        mainImage: '',
        ctaImage: '/images/lodges/parvaimsqareandcompass.jpeg',
        history:
          'orem ipsum dolor sit amet, vidit mandamus moderatius ad sed. Id quod complectitur',
        meeting: 'First Wednesday except for January,July and August',
        installation: 'June',
        website: '',
        slug: 'parvaim-central',
      },
    ],
  },
  {
    location: 'Kingsville',
    image: '/images/lodges/kingsville.png',
    address: '29 Main Street West',
    parking: 'on street or public lot behind library',

    lodges: [
      {
        name: "St. George's 41",
        image: '/images/lodges/kingsville.png',
        mainImage: '',
        ctaImage: '/images/navlogo.png',
        history:
          'orem ipsum dolor sit amet, vidit mandamus moderatius ad sed. Id quod complectitur',
        meeting: 'First Thursday at 7:30 PM except for July and August',
        installation: 'January',
        website: '',
        slug: 'stgeorges-lodge',
      },
    ],
  },
  {
    location: 'Leamington',
    image: '/images/lodges/leamington.png',
    address: '3 John Street',
    parking: 'public lot on John Street',

    lodges: [
      {
        name: 'Leamington 290',
        image: '/images/lodges/leamington.png',
        mainImage: '',
        ctaImage: '/images/navlogo.png',
        history:
          'orem ipsum dolor sit amet, vidit mandamus moderatius ad sed. Id quod complectitur',
        meeting: 'Third Tuesday at 7:30 PM except for July and August',
        installation: 'June',
        website: '',
        slug: 'leamington-lodge',
      },
      {
        name: 'Xenophon 448',
        image: '/images/lodges/leamington.png',
        mainImage: '',
        ctaImage: '/images/navlogo.png',
        history:
          'orem ipsum dolor sit amet, vidit mandamus moderatius ad sed. Id quod complectitur',
        meeting: 'Third Thursday at 8:00 PM except for July and August',
        installation: 'June?',
        website: '',
        slug: 'xenophon',
      },
    ],
  },
  {
    location: 'Pelee Island',
    image: '/images/lodges/peleeisland.jpeg',
    address: '84 East-West Road',
    parking:
      'on site. If you bring your car, reserve ferry space at least one month in advance.',

    lodges: [
      {
        name: 'Pelee 627',
        image: '/images/lodges/peleeisland.jpeg',
        mainImage: '',
        ctaImage: '/images/navlogo.png',
        history:
          'orem ipsum dolor sit amet, vidit mandamus moderatius ad sed. Id quod complectitur',
        meeting:
          'Second Saturday at Noon, May through October on the Island. Second Saturday at Noon April and November at Tilbury. No meetings December through March.',
        installation: 'August',
        website: '',
        slug: 'pelee-lodge',
      },
    ],
  },
  {
    location: 'Tilbury',
    image: '/images/lodges/tilbury.png',
    address: '28 Queen Street North',
    parking: 'on street',

    lodges: [
      {
        name: 'Naphtali 413',
        image: '/images/lodges/tilbury.png',
        mainImage: '',
        ctaImage: '/images/navlogo.png',
        history:
          'orem ipsum dolor sit amet, vidit mandamus moderatius ad sed. Id quod complectitur',
        meeting: 'Second Tuesday at 8:00 PM except for July and August',
        installation: 'December ',
        website: '',
        slug: 'naphtali-lodge',
      },
    ],
  },
  {
    location: 'Windsor',
    image: '/images/lodges/windsormasonictemple.webp',
    address: 'Windsor Masonic Temple, 986 Ouellette Avenue',
    parking: 'on site at rear, enter from Dufferin Place',

    lodges: [
      {
        name: 'Great Western 47',
        mainImage: '',
        secondImage: '',
        thirdImage: '',
        fourthImage: '',

        ctaImage: '/images/lodges/greatwesterncta.jpeg',
        history:
          'orem ipsum dolor sit amet, vidit mandamus moderatius ad sed. Id quod complectitur',
        meeting: 'First Thursday at 7:30 PM except for July and August',
        installation: 'December',
        website: '',
        slug: 'great-western',
      },
      {
        name: 'Windsor Lodge 403',
        mainImage: '/images/lodges/windsormain.jpeg',
        secondImage: '',
        thirdImage: '',
        fourthImage: '',
        history:
          'Windsor Lodge No. 403 was instituted and dedicated on August 13, 1884.',
        ctaImage: '/images/lodges/greatwesterncta.jpeg',
        meeting:
          'First Friday at 7:30 PM except for July and August. If first Friday begins a holiday weekend, the meeting is held on the second Friday',
        installation: 'January',
        website: 'https://www.windsorlodge403.com',
        facebook: 'https://www.facebook.com/groups/944181565592364/',
        slug: 'windsor-lodge',
      },
      {
        name: 'Rose Lodge 500',
        mainImage: '',
        secondImage: '',
        thirdImage: '',
        fourthImage: '',
        history:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia delectus optio dolorem officia consequuntur commodi quisquam facilis magnam sequi dolores iste ad repudiandae quidem nisi excepturi fuga natus accusamus?Suscipit, perferendis! Eaque neque, voluptatum asperiores eligendi expedit sit fugit perferendis.',
        ctaImage: '/images/lodges/greatwesterncta.jpeg',
        meeting: 'Second Wednesday at 8:00 PM except for July and August',
        installation: 'December',
        website: '',
        slug: 'rose-lodge',
      },
      {
        name: 'Trinity Lodge 521',
        mainImage: '/images/lodges/trinitymain.jpg',
        secondImage: '',
        thirdImage: '',
        fourthImage: '',
        ctaImage: '/images/lodges/greatwesterncta.jpeg',
        history:
          'orem ipsum dolor sit amet, vidit mandamus moderatius ad sed. Id quod complectitur',
        meeting:
          'First Monday at 7:30 PM except for July and August. If the meeting falls on a holiday Monday, it is moved to Wednesday.',
        installation: 'Saturday following Victoria Day at 1:00 PM',
        website: '',
        slug: 'trinity-lodge',
      },
      {
        name: 'Border Cities 554',
        mainImage: '',
        secondImage: '',
        thirdImage: '',
        fourthImage: '',
        ctaImage: '/images/lodges/greatwesterncta.jpeg',
        history:
          'orem ipsum dolor sit amet, vidit mandamus moderatius ad sed. Id quod complectitur',
        meeting:
          'First Wednesday of February, April, May, October and December at 11:00 AM',
        installation: 'May',
        website: '',
        slug: 'border-cities',
      },
      {
        name: 'Harmony Lodge 579',
        mainImage: '/images/lodges/harmonymain.jpeg',
        secondImage: '',
        thirdImage: '',
        fourthImage: '',
        ctaImage: '/images/lodges/greatwesterncta.jpeg',
        history:
          'orem ipsum dolor sit amet, vidit mandamus moderatius ad sed. Id quod complectitur',
        meeting: 'First Thursday at 7:30 PM except for July and August',
        installation: 'December',
        website: '',
        slug: 'harmony',
      },
      {
        name: "St Andrew's 642",
        mainImage: '/images/lodges/standrewmain.jpeg',
        secondImage: '',
        thirdImage: '',
        fourthImage: '',
        ctaImage: '/images/lodges/greatwesterncta.jpeg',
        history:
          'orem ipsum dolor sit amet, vidit mandamus moderatius ad sed. Id quod complectitur',
        meeting: 'Second Friday at 7:30 PM except for July and August',
        installation: 'December',
        website: '',
        slug: 'st-andrews',
      },
    ],
  },
];

export default temples;
