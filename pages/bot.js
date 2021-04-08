import React, { useState } from 'react';
import axios from "axios"

import Header from '../components/Header'
import Button from '../components/Button'

export default function Bot() {
    const [message, setMessage] = useState({
        value: "",
        isLoading: false,
        isSend: false
    })

    const sendMessageBot = async () => {
        setMessage({
            ...message,
            isLoading: false
        })
        try {
            await axios.post("/api/bot", {
                message: message.value
            })
            setMessage({
                ...message,
                isLoading: false,
                isSend: true
            })
        } catch (err) {
            setMessage({
                ...message,
                isLoading: true,
                isSend: false
            })
        }
    }

    return (
        <div>
            <main>
                <Header />
                <div>
                    <h2>Bot message</h2>
                    <label htmlFor="message">Message</label>
                    {!message.isSend && (<input
                        name="message"
                        value={message.value}
                        onChange={(event) => setMessage({
                            ...message,
                            value: event.target.value
                        })} />)}
                </div>
                {!message.isSend && (<Button onClick={() => sendMessageBot()}>Register</Button>)}
            </main>
        </div>
    )
}
