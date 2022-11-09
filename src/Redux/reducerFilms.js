const ADD_FILMS = 'ADD_FILMS';
const UPDATE_TEXT_ID = 'UPDATE_TEXT_ID';
const UPDATE_TEXT_TITLE = 'UPDATE_TEXT_TITLE';
const UPDATE_TEXT_SRC = 'UPDATE_TEXT_SRC'

let initialState = {
    allGenre: [
        {
            id: 1,
            preview: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/e410c71f-baa1-4fe5-bb29-aedb4662f49b/300x450',
            title: 'Властелин колец: Возвращение короля',
            dateYear: '2003',
            raiting: 8.9
        },
        {
            id: 2,
            preview: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/a2d5bcae-a1a9-442f-8195-f5373a5ba77f/300x450',
            title: 'Властелин колец: Братство Кольца',
            dateYear: '2001 год',
            raiting: 8.6
        },
        {
            id: 3,
            preview: 'https://kinopoisk-ru.clstorage.net/t3I04e363/fef78aF-/i70hOqyDShvJBsxhviDn-zhw0GAmY4F7zOlcJLmknwww16EKkVVoUmKxwu3m-WhirSGTzCSBuVTfyMYxF3UV3w95BL789r66PLOpgFql8o74NCTFRnKAH0mNHfWMcSr-w9UiKAZ3C6DgswT5gh1Z51jk58hEJD10fjyHNjS0hdjq7eFrP9A4LbnmH3QuIMUrKqFGYKSQ5Ls-Sqv0yUatHANFYVulxppBYGHUOEF9b0SolhcoxEQeJridJgUlUkQIi7xzqW4CGl4q9uwVPjB1K2iwxgKlkoXLXOs45Ml17qyQVXNZBdVKsMJi5Vuifj1EyERlCBQmT2VLvuSUVAMEmPuMk7h8I_pdS8ce1-4TxBubAnQyV5IFKN_qW2WZBh-8M1cBKMbHOmDiYgd6Mk89F4nll-ol1Mw22myHVkeCBTtpTDN5_TB4rzmED9ftIGRrCxPWUISi9pjMenvEKnRtTKGHoCj1tUjQUYM3mBEPbjRIRXZLdYZcxkmP93c2AEfr-7wxO34wCYxbxu31jVOFK-tDl9BEs1SprtpYRWhkL18TVDC61xRa0OGgh7nTfy3WSOZHeZZX_geqHqc15EGVmIv_cjncQnptCoQ_1N1xpnoogXYCdrPFqB_ZGOV6lN1fkhVxKySFOZCQkpeYUs8eJ6lXVYkkx40Hum2UtfWQROirnzF7brKqrzn3rQZc4-c5OSBW0bQRpNjP65q3SjUtXHJloArV5VvhIoKGCMJOzlf6lPR7l0Yt1mrN1EV3Idf5O8zh-X7BKQ2JdP21D2OlSvkjtmI3cuXozzkr9GsUHI5jZQLY9PbqEgNglAgSfk5VaDUV2YSXjKYbjDfE1DB0C3lfQDiN8kkPWaS_JxyiB7tq4jTT5XJ3q26aWpQrJr8vY4WDWyQHusLBsaSrsfwPh8inpbpHd8yl-78UtuchtuvbvvFIn8HL7ZpXjmesM7QbySGW8nQjtKk8OKnnmKVtzgNUkokmB4nz8GKUqhMsvXcZFMS4d9XelBpM5ncFk5da220x26_B-E57BC0WHSCXyZtQdNKGAPVZ7ziap5p1Hm0BNBDZVSepEKOTNWiw7I9W6JREKkXVrLQ5nYSX5ZEHuDj8ExjOoEpN6_X8Zy2QNTma86WipEKUG23aeLaL5l6cs7WwWYXUi9AhwSdr8u58Nfg1h1o2xLzE-69GNKUC53ron0P5L8MbTGslv-ROs_epCxBFggbAh_tuS2i1OqdPz5N10BkXl3rSI2KXCWNPr0bYZVdKNEWOtgg_FNXW0KaaufwCSJxRe6xrZwwXHcOV-dkwdHL1ktT7HkkLt5nmv55xhBCYZBe5ACFjFivxfj82mMQ0uyXEDIWIHoTltOIGigk9cIjeIqhPq5WPRHwShlkrE3cANwNUG644yrSqVR6d41VASjQk2FKhYRZKoh2OJUvmlZpmlH4mm_3FBZVwpCs5LJO6jINZb0pFnQYekaXKODE2E1dx9zn9uShkmSYPXWKVU5uFRwvS0UNWyYLOnAb7V0aYFoYOhht9hATlo6SIit7DSoyDS63pldwGTPCmSBswVZHkotaZfutKdUgGru0DFRE4hOcr4yNANNrhXj5k6fdHSiXV7XSrjYU3piIGuqnsIHiPwkvvqnffNm3QdSv4YMZy5VFEy-0ZefYZxO18YkdQWbQH2bKC8yYo0A1dlfjUNJkkxQ6ki57XVuWwl8q772BInkFrz5mVzBWcIIVKOLN0oYVQl3t8O2lWyCRNbkEWMWknRasjIKGEqWPszZSophRpV7RNZriMBMdnIEW6GL5h652Qi0_5hZ-GXXBVCPlTFMKnU0XIvFsa14uFHa2ztLNKloWrwFFRNmuxftwVKAd1ejWmLUb5nbbW91LXuiitIzn_wquNu6buVF0jZgg5Q-aSVUIHez57OFd4Zi3v4BfgKyTlmqAT8JVqMn5tpLnmJdm3Vg92qE9nBTQAl8n73HKrTBMLDQuV_dTfMJXJKOAWk4YiRQl8yHmEmaQMfjGnAOunVMuQQnE3G-BtHkRK1LV4V_W8dqp_B2UVUdVbew6ACpzy6f96RRwlv_PXC5gyJALmwgSaPDh4VKsUjo1hh6Do1hb7kTHQxqmBvjxn-GcHSkRUToY5Xtfl5eIWuAqOk3lMYNnva_XMRy8yVHhJENZDhOIEq905uMdaR93uYhdjeSbVinLTofdrU199Nyq2hYmGpd6mGF2El1eSx_i4_1K5_xPrjWuUD0dN4Mfr-aAVkrWQJLtdKiuXa7d9j0J3YBlXNSshUFDWeLJdbccI1pRr1lZt5oj-hDVV0pVIauwQqMxC-02K9J53z6IUayuBhKGm8JXKPJpLh0lG_b_RZrK5ROUIc0JTd0rR_g_FqqVmScQ1zcQI_JRUxXLEuIidEwj-IsvdasS-Zk2Bh9oIMweCRLH1KZ3ZCASYpA7f8PZhCyVGy_KgAzd4Aw7OZKkGdVuWdT0lup6XV5ZQZunp7IEZvxNZ_9lGT8Zf4Ya5OMIFAqcyVPjvq3iHC3Uv70IF4WpU9KvBcINnunOfHlV5FZSoFif_x6nuBJTXU7W7CPzTOQ-xWXy7ZL0nfaKGi9swVuG3I4co_clKNkhUHa9zV2GqpQeIIGAhZugzrx-EiqZVKmWnr8QazVUGxmJGqJl84qlPo3vP6lTeBC6h56oqEHazxUIlqLyKyhTZhty8EwXQKXa2qrIBk9dJ07zN56v29Fol9_90OnwEVqeB1ig6_8FIbuKb7Fjm_BZ_w9a5qJEWIcYj5LteOUtkW2Yt3YOHwCmEF2niwpFVKsPcv7X7ZlY61acux8ru9EcGEFW46O8yaQzwGf8axk5EHCBFu7hCRKPGQmW7bCiopZo0Xn3i97CIVaer4fAD5ZpTvH-Fi3Y2G6eG3iSL3tV19CI3OLkeEHjewSotuyXtpTzAlHlqAPRx5SO3Gd-ri-S7JT-f4BVC61Tn6nBDgwSqYU4PZJtHpYtV9N5261ykM',
            title: 'Тайна Коко',
            dateYear: '2017 год',
            raiting: 8
        },
        {
            id: 4,
            preview: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/73cf2ed0-fd52-47a2-9e26-74104360786a/300x450',
            title: 'Назад в будущее',
            dateYear: '1985 год',
            raiting: 8
        },
        {
            id: 5,
            preview: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/430042eb-ee69-4818-aed0-a312400a26bf/300x450',
            title: 'Интерстеллар',
            dateYear: '2014 год',
            raiting: 8
        },
        {
            id: 6,
            preview: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/87b5659d-a159-4224-9bff-d5a5d109a53b/300x450',
            title: 'Криминальное чтиво',
            dateYear: '20 января 2022 года',
            raiting: 8.6
        },
        {
            id: 7,
            preview: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/300x450',
            title: '1+1',
            dateYear: '2011 год',
            raiting: 8
        },
        {
            id: 8,
            preview: 'https://kinopoisk-ru.clstorage.net/t3I04e363/fef78aF-/i70hOqyDShvJBsxhviDn-zhw0GAmY4F7zOlcJLmknwww16EKkVVoUmKxwu2WSSgSrXETyVGk_CGPnYPhElUQD095BL55trs6rFMZhR-ll379UUGwo2eQH0mNHfWMcSr-w9UiKAZ3C6DgswT5gh1Z51jk58hEJD10fjyHNjS0hdjq7eFrP9A4LbnmH3QuIMUrKqFGYKSQ5Ls-Sqv0yUatHANFYVulxppBYGHUOEF9b0SolhcoxEQeJridJgUlUkQIi7xzqW4CGl4q9uwVPjB1K2iwxgKlkoXLXOs45Ml17qyQVXNZBdVKsMJi5Vuifj1EyERlCBQmT2VLvuSUVAMEmPuMk7h8I_pdS8ce1-4TxBubAnQyV5IFKN_qW2WZBh-8M1cBKMbHOmDiYgd6Mk89F4nll-ol1Mw22myHVkeCBTtpTDN5_TB4rzmED9ftIGRrCxPWUISi9pjMenvEKnRtTKGHoCj1tUjQUYM3mBEPbjRIRXZLdYZcxkmP93c2AEfr-7wxO34wCYxbxu31jVOFK-tDl9BEs1SprtpYRWhkL18TVDC61xRa0OGgh7nTfy3WSOZHeZZX_geqHqc15EGVmIv_cjncQnptCoQ_1N1xpnoogXYCdrPFqB_ZGOV6lN1fkhVxKySFOZCQkpeYUs8eJ6lXVYkkx40Hum2UtfWQROirnzF7brKqrzn3rQZc4-c5OSBW0bQRpNjP65q3SjUtXHJloArV5VvhIoKGCMJOzlf6lPR7l0Yt1mrN1EV3Idf5O8zh-X7BKQ2JdP21D2OlSvkjtmI3cuXozzkr9GsUHI5jZQLY9PbqEgNglAgSfk5VaDUV2YSXjKYbjDfE1DB0C3lfQDiN8kkPWaS_JxyiB7tq4jTT5XJ3q26aWpQrJr8vY4WDWyQHusLBsaSrsfwPh8inpbpHd8yl-78UtuchtuvbvvFIn8HL7ZpXjmesM7QbySGW8nQjtKk8OKnnmKVtzgNUkokmB4nz8GKUqhMsvXcZFMS4d9XelBpM5ncFk5da220x26_B-E57BC0WHSCXyZtQdNKGAPVZ7ziap5p1Hm0BNBDZVSepEKOTNWiw7I9W6JREKkXVrLQ5nYSX5ZEHuDj8ExjOoEpN6_X8Zy2QNTma86WipEKUG23aeLaL5l6cs7WwWYXUi9AhwSdr8u58Nfg1h1o2xLzE-69GNKUC53ron0P5L8MbTGslv-ROs_epCxBFggbAh_tuS2i1OqdPz5N10BkXl3rSI2KXCWNPr0bYZVdKNEWOtgg_FNXW0KaaufwCSJxRe6xrZwwXHcOV-dkwdHL1ktT7HkkLt5nmv55xhBCYZBe5ACFjFivxfj82mMQ0uyXEDIWIHoTltOIGigk9cIjeIqhPq5WPRHwShlkrE3cANwNUG644yrSqVR6d41VASjQk2FKhYRZKoh2OJUvmlZpmlH4mm_3FBZVwpCs5LJO6jINZb0pFnQYekaXKODE2E1dx9zn9uShkmSYPXWKVU5uFRwvS0UNWyYLOnAb7V0aYFoYOhht9hATlo6SIit7DSoyDS63pldwGTPCmSBswVZHkotaZfutKdUgGru0DFRE4hOcr4yNANNrhXj5k6fdHSiXV7XSrjYU3piIGuqnsIHiPwkvvqnffNm3QdSv4YMZy5VFEy-0ZefYZxO18YkdQWbQH2bKC8yYo0A1dlfjUNJkkxQ6ki57XVuWwl8q772BInkFrz5mVzBWcIIVKOLN0oYVQl3t8O2lWyCRNbkEWMWknRasjIKGEqWPszZSophRpV7RNZriMBMdnIEW6GL5h652Qi0_5hZ-GXXBVCPlTFMKnU0XIvFsa14uFHa2ztLNKloWrwFFRNmuxftwVKAd1ejWmLUb5nbbW91LXuiitIzn_wquNu6buVF0jZgg5Q-aSVUIHez57OFd4Zi3v4BfgKyTlmqAT8JVqMn5tpLnmJdm3Vg92qE9nBTQAl8n73HKrTBMLDQuV_dTfMJXJKOAWk4YiRQl8yHmEmaQMfjGnAOunVMuQQnE3G-BtHkRK1LV4V_W8dqp_B2UVUdVbew6ACpzy6f96RRwlv_PXC5gyJALmwgSaPDh4VKsUjo1hh6Do1hb7kTHQxqmBvjxn-GcHSkRUToY5Xtfl5eIWuAqOk3lMYNnva_XMRy8yVHhJENZDhOIEq905uMdaR93uYhdjeSbVinLTofdrU199Nyq2hYmGpd6mGF2El1eSx_i4_1K5_xPrjWuUD0dN4Mfr-aAVkrWQJLtdKiuXa7d9j0J3YBlXNSshUFDWeLJdbccI1pRr1lZt5oj-hDVV0pVIauwQqMxC-02K9J53z6IUayuBhKGm8JXKPJpLh0lG_b_RZrK5ROUIc0JTd0rR_g_FqqVmScQ1zcQI_JRUxXLEuIidEwj-IsvdasS-Zk2Bh9oIMweCRLH1KZ3ZCASYpA7f8PZhCyVGy_KgAzd4Aw7OZKkGdVuWdT0lup6XV5ZQZunp7IEZvxNZ_9lGT8Zf4Ya5OMIFAqcyVPjvq3iHC3Uv70IF4WpU9KvBcINnunOfHlV5FZSoFif_x6nuBJTXU7W7CPzTOQ-xWXy7ZL0nfaKGi9swVuG3I4co_clKNkhUHa9zV2GqpQeIIGAhZugzrx-EiqZVKmWnr8QazVUGxmJGqJl84qlPo3vP6lTeBC6h56oqEHazxUIlqLyKyhTZhty8EwXQKXa2qrIBk9dJ07zN56v29Fol9_90OnwEVqeB1ig6_8FIbuKb7Fjm_BZ_w9a5qJEWIcYj5LteOUtkW2Yt3YOHwCmEF2niwpFVKsPcv7X7ZlY61acux8ru9EcGEFW46O8yaQzwGf8axk5EHCBFu7hCRKPGQmW7bCiopZo0Xn3i97CIVaer4fAD5ZpTvH-Fi3Y2G6eG3iSL3tV19CI3OLkeEHjewSotuyXtpTzAlHlqAPRx5SO3Gd-ri-S7JT-f4BVC61Tn6nBDgwSqYU4PZJtHpYtV9N5261ykM',
            title: 'Иван Васильевич меняет профессию',
            dateYear: '1973 год',
            raiting: 8
        },
        {
            id: 9,
            preview: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/60aa1abc-b754-4817-ad9c-0bcda427a12b/300x450',
            title: 'Король Лев',
            dateYear: '1994 год',
            raiting: 8
        },
        {
            id: 10,
            preview: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0fa5bf50-d5ad-446f-a599-b26d070c8b99/300x450',
            title: 'Темный рыцарь',
            dateYear: '15 октября 2021',
            raiting: 8
        },
        {
            id: 11,
            preview: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/ae3b699c-3db7-4196-a869-39b610bfe706/300x450',
            title: 'Унесённые призраками',
            dateYear: '17 апреля 2011',
            raiting: 8
        },
        {
            id: 12,
            preview: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/8ef070c9-2570-4540-9b83-d7ce759c0781/300x450',
            title: 'Бойцовский клуб',
            dateYear: '17 апреля 2011',
            raiting: 8
        }
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
    informationPost: {
        textTitle: '',
        textId: '',
        textSrc: '',
        textRaiting: ''
    }
}


const reducerFilms = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_FILMS:
            let today = new Date();
            let now = today.toLocaleDateString('en-US');
            let object = {
                id: state.informationPost.textId,
                preview: state.informationPost.textSrc,
                title: state.informationPost.textTitle,
                dateYear: now
            }
            state.allGenre.push(object)
            break;
        case UPDATE_TEXT_ID:
            state.informationPost.textId = action.valueId;
            break;
        case UPDATE_TEXT_TITLE:
            state.informationPost.textTitle = action.valueTitle;
            break;
        case UPDATE_TEXT_SRC:
            state.informationPost.textSrc = action.valueSrc;
            break;
        default:
            return state;
    }
    return state;
}
export default reducerFilms;
export const actionCreaterAddFilms = () => ({type: ADD_FILMS})
export const actionCreaterGetValueId = (value) => ({type: UPDATE_TEXT_ID, valueId: value})
export const actionCreaterGetValueTitle = (value) => ({type: UPDATE_TEXT_TITLE, valueTitle: value})
export const actionCreaterGetValueSrc = (value) => ({type: UPDATE_TEXT_SRC, valueSrc: value})