import { useState } from "react";

export default function PaymentForm({ onAdd }){
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        if(!title || !amount){

            onAdd({
                title,
                amount: parseFloat(amount),
                paid: false
            });

            setTitle("");
            setAmount("");
        }
    }

    return(
        <form onSubmit={handleSubmit} className="form">
            <input type="text" 
                placeholder="Descrição"
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
            />

            <input type="number" 
                placeholder="Valor"
                value={amount}
                onChange={(e) => {setAmount(e.target.value)}}
            />

            <button type="submit">Adicionar</button>
        </form>

    )

}