import Card from './Card'
import React from 'react'
import UserData from '../UserData'
export default function Main(){
    const users = UserData.map(user => <Card {...user} key={user.id} />)
    return(
    <main>
        {users}
    </main>
    )
}