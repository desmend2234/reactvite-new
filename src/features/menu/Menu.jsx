import { Outlet, useOutletContext } from 'react-router-dom'
import { Breadcrumb } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'
import SideTabs from './SideTabs'

function Menu() {
    const { categoryList, allCategory } = useOutletContext()
    return (
        <div>
            <div className="my-4 px-8">
                <Breadcrumb aria-label="Default breadcrumb example">
                    <Breadcrumb.Item href="/" icon={HiHome}>
                        <p className="text-xl text-stone-600">Home</p>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/menu/all">
                        <p className="text-xl text-stone-600">Menu</p>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <SideTabs categoryList={categoryList} allCategory={allCategory} />
            <Outlet context={{ allCategory, categoryList }} />
        </div>
    )
}

export default Menu
