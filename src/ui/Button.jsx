import { Link } from 'react-router-dom'

function Button({ children, disabled, to, type, cb, onClick }) {
    const base =
        'inline-block transition-colors duration-300 rounded-full bg-blue-500 font-semibold uppercase tracking-wide text-stone-50 duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed'
    const styles = {
        primary: base + ' px-4 py-3 md:px-10 md:py-4  text-center text-xl',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-sm',
        round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
        logout: 'inline-block text-sm transition-colors duration-300 rounded-full bg-blue-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2',
        secondary:
            'inline-block text-base transition-colors duration-300 rounded-full border-2 border-stone-400 font-semibold uppercase tracking-wide text-stone-400 duration-300 hover:bg-stone-200  focus:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4',
    }
    if (to)
        return (
            <Link className={styles[type]} to={to} disabled={disabled}>
                {children}
            </Link>
        )
    if (onClick)
        return (
            <button
                disabled={disabled}
                className={styles[type]}
                onClick={onClick}
            >
                {children}
            </button>
        )
    return (
        <div>
            <button disabled={disabled} className={styles[type]} onClick={cb}>
                {children}
            </button>
        </div>
    )
}

export default Button
