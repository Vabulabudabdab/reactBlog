import axios from "axios";
import {createRef, useState} from "react";

function App() {

    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);

    const inputName = (event) => {
        setName({value: event.target.value});
        console.log(name)
    }

    const inputEmail = (event) => {
        setEmail({value: event.target.value});
        console.log(email)
    }

    const inputPassword = (event) => {
        setPassword({value: event.target.value});
        console.log(password)
    }
    const getStates = () => {
        console.log(email, password, name);
    }
    // const check = () => {
    //     axios.get("http://127.0.0.1:8000/api/v0/test").then(function(response) {
    //         console.log(response);
    //     }).catch(function(error) {
    //         console.log(error);
    //     })
    // }

    const nameRef = createRef()
    const emailRef = createRef()
    const passwordRef = createRef()
    const passwordConfirmationRef = createRef()
    const {setUser, setToken} = useState()
    const [errors, setErrors] = useState(null)

    const onSubmit = ev => {
        ev.preventDefault()

        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axios.post('http://127.0.0.1:8000/api/v0/register', data)
            .then(({data}) => {
                setUser(data.user)
                setToken(data.token);
            })
            .catch(err => {
                console.error(err.response)
            })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                Имя
                <input type="text" ref={nameRef} id="name" onChange={inputName} />
                Почта
                <input type="email" ref={emailRef} id="email" onChange={inputEmail}/>
                Пароль
                <input type="password" ref={passwordRef} id="password" onChange={inputPassword}/>
                <button type="submit">Отправить</button>
            </form>
            <button onClick={check}>Тест</button>
            <button onClick={getStates}>Состояние</button>

        </div>

    );
}

export default App;
