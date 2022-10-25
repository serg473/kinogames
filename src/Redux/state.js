import reducerSerial from "./reducerSerial";

let store = {
    _state: {
        news: {
        },
        data:{
            dateGamesItems:{
                genre: {
                    comedy: [
                        {
                            id: 1,
                            preview: 'https://cdn.kanobu.ru/serials/serials/942aae38-011c-4955-b497-d186158b1bc2.webp',
                            title: 'Венсди / Уэнсдэй (Wednesday)',
                            dateYear: '2022 год',
                            raiting: 8
                        },
                        {
                            id: 2,
                            preview: 'https://cdn.kanobu.ru/serials/serials/004c2961-8941-4a1e-86fb-eb50af162fe7.webp',
                            title: 'Блокбастер (Blockbuster)',
                            dateYear: '2022 год',
                            raiting: 8
                        },
                        {
                            id: 3,
                            preview: 'https://cdn.kanobu.ru/serials/serials/c33e1d8b-23e7-4981-9f3b-35b720df440b.webp',
                            title: 'Вампир Реджинальд (Reginald the Vampire)',
                            dateYear: '2022 год',
                            raiting: 8
                        },
                        {
                            id: 4,
                            preview: 'https://cdn.kanobu.ru/serials/serials/3f52ac30-480b-45b8-823e-87682de9ebe4.webp',
                            title: 'Женщина-Халк (She-Hulk)',
                            dateYear: '2022 год',
                            raiting: 8
                        },
                        {
                            id: 5,
                            preview: 'https://cdn.kanobu.ru/serials/serials/3819ac3b-3803-4315-83bd-48b5b812d933.webp',
                            title: 'Вампиры средней полосы',
                            dateYear: '2022 год',
                            raiting: 8
                        },
                    ],
                    thriller: [
                        {
                            id: 1,
                            preview: 'https://cdn.kanobu.ru/serials/serials/1552d7ab-328e-4055-8e81-c2c57ba33cb3.webp',
                            title: 'Карамора',
                            dateYear: '20 января 2022 года',
                            raiting: 8
                        },
                        {
                            id: 2,
                            preview: 'https://cdn.kanobu.ru/serials/serials/6aa7d970-2dfc-405f-8ae9-fc11bc124570.webp',
                            title: 'Вне себя',
                            dateYear: '18 ноября 2021',
                            raiting: 8
                        },
                        {
                            id: 3,
                            preview: 'https://cdn.kanobu.ru/serials/serials/72fd7032-413e-42d6-bae0-7fdc9c73236a.webp',
                            title: 'Бегущий по лезвию: Чёрный лотос (Blade Runner: Black Lotus)',
                            dateYear: '13 ноября 2021 год',
                            raiting: 8
                        },
                        {
                            id: 4,
                            preview: 'https://cdn.kanobu.ru/serials/serials/11eeed4b-e3c9-470b-8cd6-a690c0c1dd6c.webp',
                            title: 'Декстер: Новая кровь (Dexter: New Blood)',
                            dateYear: '7 ноября 2021',
                            raiting: 8
                        },
                        {
                            id: 5,
                            preview: 'https://cdn.kanobu.ru/serials/serials/8bae198c-6ac3-4af9-9e1e-09f94dea76fa.webp',
                            title: 'Во имя мести (Mai neim)',
                            dateYear: '15 октября 2021',
                            raiting: 8
                        },
                    ],
                    detective: [
                        {
                            id: 1,
                            preview: 'https://cdn.kanobu.ru/serials/serials/f6932f4e-90ae-4a8b-9bc3-ad33de47e57b.webp',
                            title: '1703',
                            dateYear: '29 сентября 2022',
                            raiting: 8
                        },
                        {
                            id: 2,
                            preview: 'https://cdn.kanobu.ru/serials/serials/28c03c9a-c9e1-4e2c-8e89-ec900144cb51.webp',
                            title: 'Идентификация',
                            dateYear: '17 февраля 2022',
                            raiting: 8
                        },
                        {
                            id: 3,
                            preview: 'https://cdn.kanobu.ru/serials/serials/6aa7d970-2dfc-405f-8ae9-fc11bc124570.webp',
                            title: 'Вне себя',
                            dateYear: '18 ноября 2021',
                            raiting: 8
                        },
                        {
                            id: 4,
                            preview: 'https://cdn.kanobu.ru/serials/serials/1f08becc-66da-4b84-a126-2c6fcb408aab.webp',
                            title: 'Дом тайн: Смерть семьи в Бурари (House of Secrets: The Burari Deaths)',
                            dateYear: '8 октября 2021',
                            raiting: 8
                        },
                        {
                            id: 5,
                            preview: 'https://cdn.kanobu.ru/serials/serials/7608adfd-686d-47d3-a552-49b9bcf23245.webp',
                            title: 'Утраченный символ (The Lost Symbol)',
                            dateYear: '16 сентября 2021',
                            raiting: 8
                        },
                    ],
                    fantasy: [
                        {
                            id: 1,
                            preview: 'https://cdn.kanobu.ru/serials/serials/e68f10fb-4df1-4833-9234-2f9283226bab.webp',
                            title: 'Властелин колец: Кольца власти (The Lord of the Rings: The Rings of Power)',
                            dateYear: '2 сентября 2022',
                            raiting: 8
                        },
                        {
                            id: 2,
                            preview: 'https://cdn.kanobu.ru/serials/serials/1552d7ab-328e-4055-8e81-c2c57ba33cb3.webp',
                            title: 'Карамора',
                            dateYear: '20 января 2022',
                            raiting: 8
                        },
                        {
                            id: 3,
                            preview: 'https://cdn.kanobu.ru/serials/serials/782cdcd4-ae4b-432d-ab9b-c967d5296af4.webp',
                            title: 'Колесо времени (The Wheel of Time)',
                            dateYear: '19 ноября 2021',
                            raiting: 8
                        },
                        {
                            id: 4,
                            preview: 'https://cdn.kanobu.ru/serials/serials/e15e1346-78fb-422d-a029-ae08ab237b60.webp',
                            title: 'Аркейн (Arcane: League of Legends)',
                            dateYear: '6 ноября 2021',
                            raiting: 8
                        },
                        {
                            id: 5,
                            preview: 'https://cdn.kanobu.ru/serials/serials/1185dc88-735a-420e-a743-4e647d99b492.webp',
                            title: 'Локи (Loki)',
                            dateYear: '9 июня 2021',
                            raiting: 8
                        },
                    ]
                }
            },
            dataFilmsItems:{
                genre: {
                    allGenre:[
                        {
                            id: 1,
                            preview: 'https://cdn.kanobu.ru/serials/serials/942aae38-011c-4955-b497-d186158b1bc2.webp',
                            title: 'Венсди / Уэнсдэй (Wednesday)',
                            dateYear: '2022 год',
                            raiting: 8
                        },
                        {
                            id: 2,
                            preview: 'https://cdn.kanobu.ru/serials/serials/004c2961-8941-4a1e-86fb-eb50af162fe7.webp',
                            title: 'Блокбастер (Blockbuster)',
                            dateYear: '2022 год',
                            raiting: 8
                        },
                        {
                            id: 3,
                            preview: 'https://cdn.kanobu.ru/serials/serials/c33e1d8b-23e7-4981-9f3b-35b720df440b.webp',
                            title: 'Вампир Реджинальд (Reginald the Vampire)',
                            dateYear: '2022 год',
                            raiting: 8
                        },
                        {
                            id: 4,
                            preview: 'https://cdn.kanobu.ru/serials/serials/3f52ac30-480b-45b8-823e-87682de9ebe4.webp',
                            title: 'Женщина-Халк (She-Hulk)',
                            dateYear: '2022 год',
                            raiting: 8
                        },
                        {
                            id: 5,
                            preview: 'https://cdn.kanobu.ru/serials/serials/3819ac3b-3803-4315-83bd-48b5b812d933.webp',
                            title: 'Вампиры средней полосы',
                            dateYear: '2022 год',
                            raiting: 8
                        },
                        {
                            id: 6,
                            preview: 'https://cdn.kanobu.ru/serials/serials/1552d7ab-328e-4055-8e81-c2c57ba33cb3.webp',
                            title: 'Карамора',
                            dateYear: '20 января 2022 года',
                            raiting: 8
                        },
                        {
                            id: 7,
                            preview: 'https://cdn.kanobu.ru/serials/serials/1185dc88-735a-420e-a743-4e647d99b492.webp',
                            title: 'Локи (Loki)',
                            dateYear: '9 июня 2021',
                            raiting: 8
                        },
                        {
                            id: 8,
                            preview: 'https://cdn.kanobu.ru/serials/serials/72fd7032-413e-42d6-bae0-7fdc9c73236a.webp',
                            title: 'Бегущий по лезвию: Чёрный лотос (Blade Runner: Black Lotus)',
                            dateYear: '13 ноября 2021 год',
                            raiting: 8
                        },
                        {
                            id: 9,
                            preview: 'https://cdn.kanobu.ru/serials/serials/11eeed4b-e3c9-470b-8cd6-a690c0c1dd6c.webp',
                            title: 'Декстер: Новая кровь (Dexter: New Blood)',
                            dateYear: '7 ноября 2021',
                            raiting: 8
                        },
                        {
                            id: 10,
                            preview: 'https://cdn.kanobu.ru/serials/serials/8bae198c-6ac3-4af9-9e1e-09f94dea76fa.webp',
                            title: 'Во имя мести (Mai neim)',
                            dateYear: '15 октября 2021',
                            raiting: 8
                        },
                        {
                            id: 11,
                            preview: 'https://cdn.kanobu.ru/serials/serials/4de5453f-2af7-47cd-9ae3-c96be4b82d45.webp',
                            title: 'Игра престолов (Game of Thrones)',
                            dateYear: '17 апреля 2011',
                            raiting: 8
                        },
                    ],
                    comedy: [
                        {
                            id: 1,
                            preview: 'https://cdn.kanobu.ru/serials/serials/942aae38-011c-4955-b497-d186158b1bc2.webp',
                            title: 'Венсди / Уэнсдэй (Wednesday)',
                            dateYear: '2022 год',
                            raiting: 8
                        },
                        {
                            id: 2,
                            preview: 'https://cdn.kanobu.ru/serials/serials/004c2961-8941-4a1e-86fb-eb50af162fe7.webp',
                            title: 'Блокбастер (Blockbuster)',
                            dateYear: '2022 год',
                            raiting: 8
                        },
                        {
                            id: 3,
                            preview: 'https://cdn.kanobu.ru/serials/serials/c33e1d8b-23e7-4981-9f3b-35b720df440b.webp',
                            title: 'Вампир Реджинальд (Reginald the Vampire)',
                            dateYear: '2022 год',
                            raiting: 8
                        },
                        {
                            id: 4,
                            preview: 'https://cdn.kanobu.ru/serials/serials/3f52ac30-480b-45b8-823e-87682de9ebe4.webp',
                            title: 'Женщина-Халк (She-Hulk)',
                            dateYear: '2022 год',
                            raiting: 8
                        },
                        {
                            id: 5,
                            preview: 'https://cdn.kanobu.ru/serials/serials/3819ac3b-3803-4315-83bd-48b5b812d933.webp',
                            title: 'Вампиры средней полосы',
                            dateYear: '2022 год',
                            raiting: 8
                        },
                    ],
                    thriller: [
                        {
                            id: 1,
                            preview: 'https://cdn.kanobu.ru/serials/serials/1552d7ab-328e-4055-8e81-c2c57ba33cb3.webp',
                            title: 'Карамора',
                            dateYear: '20 января 2022 года',
                            raiting: 8
                        },
                        {
                            id: 2,
                            preview: 'https://cdn.kanobu.ru/serials/serials/6aa7d970-2dfc-405f-8ae9-fc11bc124570.webp',
                            title: 'Вне себя',
                            dateYear: '18 ноября 2021',
                            raiting: 8
                        },
                        {
                            id: 3,
                            preview: 'https://cdn.kanobu.ru/serials/serials/72fd7032-413e-42d6-bae0-7fdc9c73236a.webp',
                            title: 'Бегущий по лезвию: Чёрный лотос (Blade Runner: Black Lotus)',
                            dateYear: '13 ноября 2021 год',
                            raiting: 8
                        },
                        {
                            id: 4,
                            preview: 'https://cdn.kanobu.ru/serials/serials/11eeed4b-e3c9-470b-8cd6-a690c0c1dd6c.webp',
                            title: 'Декстер: Новая кровь (Dexter: New Blood)',
                            dateYear: '7 ноября 2021',
                            raiting: 8
                        },
                        {
                            id: 5,
                            preview: 'https://cdn.kanobu.ru/serials/serials/8bae198c-6ac3-4af9-9e1e-09f94dea76fa.webp',
                            title: 'Во имя мести (Mai neim)',
                            dateYear: '15 октября 2021',
                            raiting: 8
                        },
                    ],
                    detective: [
                        {
                            id: 1,
                            preview: 'https://cdn.kanobu.ru/serials/serials/f6932f4e-90ae-4a8b-9bc3-ad33de47e57b.webp',
                            title: '1703',
                            dateYear: '29 сентября 2022',
                            raiting: 8
                        },
                        {
                            id: 2,
                            preview: 'https://cdn.kanobu.ru/serials/serials/28c03c9a-c9e1-4e2c-8e89-ec900144cb51.webp',
                            title: 'Идентификация',
                            dateYear: '17 февраля 2022',
                            raiting: 8
                        },
                        {
                            id: 3,
                            preview: 'https://cdn.kanobu.ru/serials/serials/6aa7d970-2dfc-405f-8ae9-fc11bc124570.webp',
                            title: 'Вне себя',
                            dateYear: '18 ноября 2021',
                            raiting: 8
                        },
                        {
                            id: 4,
                            preview: 'https://cdn.kanobu.ru/serials/serials/1f08becc-66da-4b84-a126-2c6fcb408aab.webp',
                            title: 'Дом тайн: Смерть семьи в Бурари (House of Secrets: The Burari Deaths)',
                            dateYear: '8 октября 2021',
                            raiting: 8
                        },
                        {
                            id: 5,
                            preview: 'https://cdn.kanobu.ru/serials/serials/7608adfd-686d-47d3-a552-49b9bcf23245.webp',
                            title: 'Утраченный символ (The Lost Symbol)',
                            dateYear: '16 сентября 2021',
                            raiting: 8
                        },
                    ],
                    fantasy: [
                        {
                            id: 1,
                            preview: 'https://cdn.kanobu.ru/serials/serials/e68f10fb-4df1-4833-9234-2f9283226bab.webp',
                            title: 'Властелин колец: Кольца власти (The Lord of the Rings: The Rings of Power)',
                            dateYear: '2 сентября 2022',
                            raiting: 8
                        },
                        {
                            id: 2,
                            preview: 'https://cdn.kanobu.ru/serials/serials/1552d7ab-328e-4055-8e81-c2c57ba33cb3.webp',
                            title: 'Карамора',
                            dateYear: '20 января 2022',
                            raiting: 8
                        },
                        {
                            id: 3,
                            preview: 'https://cdn.kanobu.ru/serials/serials/782cdcd4-ae4b-432d-ab9b-c967d5296af4.webp',
                            title: 'Колесо времени (The Wheel of Time)',
                            dateYear: '19 ноября 2021',
                            raiting: 8
                        },
                        {
                            id: 4,
                            preview: 'https://cdn.kanobu.ru/serials/serials/e15e1346-78fb-422d-a029-ae08ab237b60.webp',
                            title: 'Аркейн (Arcane: League of Legends)',
                            dateYear: '6 ноября 2021',
                            raiting: 8
                        },
                        {
                            id: 5,
                            preview: 'https://cdn.kanobu.ru/serials/serials/1185dc88-735a-420e-a743-4e647d99b492.webp',
                            title: 'Локи (Loki)',
                            dateYear: '9 июня 2021',
                            raiting: 8
                        },
                    ],
                    informationPost:{
                        textTitle: '',
                        textId:'',
                        textSrc: '',
                        textRaiting:''
                    }



                }
            }
        }
    },
    callSubscribe(){
        console.log('Rerendering');
    },
    getState(){
        return this._state;
    },
    dispatch(action){
        this._state.data.dataFilmsItems.genre = reducerSerial(this._state.data.dataFilmsItems.genre, action);
        this.callSubscribe(this._state);
    },
    subscribe(observer){
        this.callSubscribe = observer;
    },
}
window.store = store;
export default store;
