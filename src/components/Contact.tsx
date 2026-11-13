type ContactProps = {
    img: string,
    name: string,
    phone: string,
    email: string
}

export default function Contact({img, name , phone, email}: ContactProps) {
    return (
        <article className="contact-card">
            <img
                src = {img}
                alt="photo of someone"
            />
            <h3> {name}</h3>
            <div className="info-group">
                <img
                    src="./hello.png"
                    alt="phone icon"
                />
                <p> {phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="./mainicon.png"
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article>
    )
}

