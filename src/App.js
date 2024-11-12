import axios from "axios";
import {useState} from "react";

function App() {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const inputName = (event) => {
        setEmail({value: event.target.value});
        console.log(email)
    }

    const inputPassword = (event) => {
        setPassword({value: event.target.value});
        console.log(password)
    }

    const registerUser = () => {

        axios({
            url: "http://127.0.0.1:8000/api/v0/test",
            method: "POST",
            data: { email: email, password: password }  // Данные должны быть объектом
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    }
    const getStates = () => {
        console.log(email, password)
    }
    const check = () => {
        axios.get("http://127.0.0.1:8000/api/v0/test").then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        })
    }


    return (
        <div>
            <form onSubmit={registerUser}>
                <input type="email" name={"email"} id="email" onChange={inputName}/>
                <input type="password" name={"password"} id="password" onChange={inputPassword}/>
                <button type="submit">Отправить</button>
            </form>
            <button onClick={check}>Тест</button>
            <button onClick={getStates}>Состояние</button>

        </div>

    );
}

export default App;
