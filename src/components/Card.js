export default function Card() {
    return(
        <div className="profile-card" align="center">
            <img alt="" width="200" className="profile-image" src="https://thispersondoesnotexist.com/image"/>
            <h2>Charlie Fisher</h2>
            <p>
                I like to fish, and I enjoy cooking and hiking. I work as a Software engineer at Facebook. I live in Dallas, Texas.
            </p>
            <a className="social-button" href="localhost:3000">Contact</a>
        </div>
    )
}