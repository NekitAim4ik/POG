import React, {useEffect, useState} from "react";

function App() {
    const [fistingCount, setFistingCount] = useState(0)
    const [suckCount, setSuckCount] = useState(0)

    const increment = () => {
        localStorage.setItem("suckDick", suckCount + 1)
        setSuckCount(suckCount + 1)
    }
    const increment1 = () => {
        localStorage.setItem("fistingAnal", fistingCount + 1)
        setFistingCount(fistingCount + 1)
    }

    useEffect(() => {
        setFistingCount(+localStorage.getItem("fistingAnal"))
        setSuckCount(+localStorage.getItem("suckDick"))
    }, [])


    return (
        <div>
            <button className={"fisting"} onClick={increment1}>
                Сделать fisting ass
            </button>
            <h1>Вы {fistingCount} раз сделали fisting ass</h1>

            <br/>

            <button className={"suck"} onClick={increment}>
                Suck dick
            </button>
            <h1>Вы {suckCount} sucked dick</h1>
        </div>
    );
}

export default App;
