import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchProduct() {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!query) return
        navigate(`/searchResult/${query}`)
        setQuery('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Search for"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-28 rounded-full bg-sky-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-50 sm:w-64 sm:focus:w-72 md:w-80 md:focus:w-96"
                />
            </form>
        </div>
    )
}

export default SearchProduct
