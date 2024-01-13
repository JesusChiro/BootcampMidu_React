import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Durand',
        isFollowing: true
    }, {
        userName: 'jesuschiro',
        name: 'Jesus Chiroque Martinez',
        isFollowing: false
    }, {
        userName: 'mouredev',
        name: 'Brais Moure',
        isFollowing: true
    }, {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: false
    },
]

export function App() {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing} >
                        {name}
                    </TwitterFollowCard>
                ))}
        </section >
    )
}
