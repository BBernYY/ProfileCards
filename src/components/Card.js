export default function Card({name, desc, social_link, profile}) {
    return (
        <div className="profile-card" align="center">
            <img alt="" width="200" className="profile-image" src={profile}/>
            <h2>{name}</h2>
            <p>
                {desc}
            </p>
            <a className="social-button" href={social_link}>Contact</a>
        </div>
    )
}