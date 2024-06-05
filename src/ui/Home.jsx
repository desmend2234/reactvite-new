import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import Username from '../features/user/Username'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../features/user/userSlice'
import CreateUser from '../features/user/CreateUser'
import LazyLoad from 'react-lazy-load'

function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const username = useSelector((state) => state.user.username)

    return (
        <div className="my-16 min-h-full text-center">
            <h1 className="mb-8 px-4 text-xl font-semibold   uppercase text-stone-700 md:text-3xl">
                The best travel
                <br />
                <span className="uppercase text-blue-500">
                    Discover Your Next Adventure
                </span>
            </h1>
            {username && (
                <div
                    className="absolute right-10 flex "
                    style={{ top: '8rem' }}
                >
                    <p className="hidden uppercase text-stone-700 md:flex">
                        Welcome,
                    </p>
                    <p className="items-center uppercase text-stone-700">
                        <Username />
                    </p>
                </div>
            )}
            <div className="flex h-96 justify-center">
                <LazyLoad>
                    <img
                        className="img-fluid flex max-h-96 items-center rounded-md  bg-local object-cover"
                        src={
                            'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        }
                    />
                </LazyLoad>
            </div>

            {username === '' ? (
                <CreateUser />
            ) : (
                <div className="my-2">
                    <Button type="primary" to="/menu/all">
                        Continue ordering, {username}
                    </Button>
                </div>
            )}
        </div>
    )
}

export default Home
