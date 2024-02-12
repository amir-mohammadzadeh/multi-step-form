interface Prop {
    title: String,
    subtitle: String
}

const FormsHeader = ({ title, subtitle }: Prop) => {
    return (
        <>
            <h1>
                {title}
            </h1>
            <span style={{ color: 'var(--cool-gray)', marginBlock: '.5rem 2rem' }} >
                {subtitle}
            </span>
        </>
    )
}

export default FormsHeader