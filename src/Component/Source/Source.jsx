import './Source.css';
export default function Source({ icon, children, link }) {
    return (
        <div id="source">
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <i className={icon}></i>
                </a>
            ) : (
                <p>
                    <i className={icon}></i> {children}
                </p>
            )}
        </div>
    );
}