import React from 'react';
import MyLabel from "../components/MyLabel/MyLabel";

const ForTest = () => {

    const fields = [
        {title: 'Логин пользователя', text: 'Vafelka'},
        {title: 'Почта', text: 'Vafelka@gmail.com'},
        {title: 'Пароль', text: '*****'},
    ]

    return (
        <>
            <h1>Тесты</h1>
            {fields.map((field, i) =>
                <MyLabel title={field.title} text={field.text}/>
            )}
        </>
    )
};

export default ForTest;