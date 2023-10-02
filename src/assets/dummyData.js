import Musa from './jimmy.jpg'
const Student = {
    studentData:{
        id:1,
        firstname:'Musa',
        lastname:'Muhammed',
        username:'Galapagous',
        profile: Musa,
        courses: 5,
        handout: 10,
        occupation:['Student', 'Engineer', 'Graphic designer']
    },
    questionData:[
        {
            id: 1,
            quests:'Who are you',
            option:[
                {
                    value:'Software engineer',
                    status:true,
                    attempted: false,
                    selected: true
                },
                {
                    value:'CAD designer',
                    status:false,
                    attempted: false,
                },
                {
                    value:'Mechanic',
                    status:false,
                    attempted: false,
                },
                {
                    value:'Artist',
                    status:false,
                    attempted: false
                },
            ]

        },
        {
            id: 2,
            quests:'According to albert caemu, how do people view the world',
            option:[
                {
                    value:'via three lenses',
                    status:false
                },
                {
                    value:'via four lenses',
                    status:false
                },
                {
                    value:'via their experiences',
                    status:false,
                    selected: true
                },
                {
                    value:'via their religion',
                    status:true
                },
            ]

        },
        {
            id: 3,
            quests:'In orwell novel, what are the step taken by the authoritarian to take absolute control over our thought?',
            option:[
                {
                    value:'throuh the use of force',
                    status:false
                },
                {
                    value:'through the use of indoctrination',
                    status:false
                },
                {
                    value:'via intermediation, isolation and propaganda',
                    status:true
                },
                {
                    value:'indoctrination and propaganda',
                    status:false,
                    selected:true
                },
            ]

        },
    ],
    stats:[
        {
            id: 1,
            course:'theory of machine',
            attemps: 4,
            total_quest: 200,
            pass: 150,
            fail: 50
        },
        {
            id: 2,
            course:'machine design',
            attemps: 2,
            total_quest: 500,
            pass: 250,
            fail: 250
        },
        {
            id: 3,
            course:'strenght of materials',
            attemps: 6,
            total_quest: 200,
            pass: 50,
            fail: 150
        },
        {
            id: 4,
            course:'theory of machine',
            attemps: 4,
            total_quest: 200,
            pass: 150,
            fail: 50
        },
    ]
}

export default Student