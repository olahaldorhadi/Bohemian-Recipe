import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {
    FunnelIcon,
    MinusIcon,
    PlusIcon,
} from '@heroicons/react/20/solid'
import DisplayRecipes from '../atoms/DisplayRecipes'

const subCategories = [
    { name: 'Vegetarian' },
    { name: 'Beef' },
    { name: 'Seafood' },
    { name: 'Chicken' },
    { name: 'Side' },
    { name: 'Pasta' },
    { name: 'Dessert' },
]
const filters = [
    {
        id: 'origin',
        name: 'Origin',
        options: [
            { value: 'British', label: 'British', checked: false },
            { value: 'French', label: 'French', checked: false },
            { value: 'Filipino', label: 'Filipino', checked: false },
            { value: 'Egyptian', label: 'Egyptian', checked: false },
            { value: 'Canadian', label: 'Canadian', checked: false },
        ],
    },
    // IN CASE WE NEED TWO MORE FILTER SECTION
    // {
    //     id: 'allergens',
    //     name: 'Exclude allergens',
    //     options: [
    //         { value: 'Milk', label: 'Milk', checked: false },
    //         { value: 'Flour', label: 'Flour', checked: false },
    //         { value: 'Onion', label: 'Onion', checked: false },
    //         { value: 'Eggs', label: 'Eggs', checked: false },
    //         { value: 'Nuts', label: 'Nuts', checked: false },
    //     ],
    // },
    // {   
    //   id: 'size',
    //   name: 'Size',
    //   options: [
    //     { value: '2l', label: '2L', checked: false },
    //     { value: '6l', label: '6L', checked: false },
    //     { value: '12l', label: '12L', checked: false },
    //     { value: '18l', label: '18L', checked: false },
    //     { value: '20l', label: '20L', checked: false },
    //     { value: '40l', label: '40L', checked: false },
    //   ],
    // },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function FiltersComp() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    )
    const [selectedAreas, setSelectedAreas] = useState<string[]>([])

    const handleCategoryChange = (category: string) => {
        setSelectedCategory((prevCategory) => {
            // If the category is already selected, deselect it, otherwise select the new category
            return prevCategory === category ? null : category
        })
    }

    const handleAreaChange = (area: string) => {
        setSelectedAreas((prevAreas) =>
            prevAreas.includes(area)
                ? prevAreas.filter((a) => a !== area)
                : [...prevAreas, area]
        )
    }

    return (
        <div className="bg-black">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-40 lg:hidden"
                        onClose={setMobileFiltersOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-black py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-orange-600">
                                            Filters
                                        </h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-black p-2 text-gray-400"
                                            onClick={() =>
                                                setMobileFiltersOpen(false)
                                            }
                                        >
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <XMarkIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form className="mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul
                                            role="list"
                                            className="px-2 py-3 font-medium text-por hover:text-orange-600"
                                        >
                                            {subCategories.map((category) => (
                                                <li key={category.name}>
                                                    <p
                                                        className="block px-2 py-2 text-white"
                                                        onClick={() => {
                                                            handleCategoryChange(
                                                                category.name
                                                            )
                                                        }}
                                                    >
                                                        {category.name}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>

                                        {filters.map((section) => (
                                            <Disclosure
                                                as="div"
                                                key={section.id}
                                                className="border-t border-gray-200 px-4 py-6"
                                            >
                                                {({ open }) => (
                                                    <>
                                                        <h3 className="-mx-2 -my-3 flow-root">
                                                            <Disclosure.Button className="flex w-full items-center justify-between bg-black px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span className="font-medium text-white hover:text-orange-400">
                                                                    {
                                                                        section.name
                                                                    }
                                                                </span>
                                                                <span className="ml-6 flex items-center">
                                                                    {open ? (
                                                                        <MinusIcon
                                                                            className="h-5 w-5"
                                                                            aria-hidden="true"
                                                                        />
                                                                    ) : (
                                                                        <PlusIcon
                                                                            className="h-5 w-5"
                                                                            aria-hidden="true"
                                                                        />
                                                                    )}
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            <div className="space-y-6">
                                                                {section.options.map(
                                                                    (
                                                                        option,
                                                                        optionIdx
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                option.value
                                                                            }
                                                                            className="flex items-center"
                                                                        >
                                                                            <input
                                                                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                                name={`${section.id}[]`}
                                                                                defaultValue={
                                                                                    option.value
                                                                                }
                                                                                type="checkbox"
                                                                                defaultChecked={
                                                                                    option.checked
                                                                                }
                                                                                onChange={() =>
                                                                                    handleAreaChange(
                                                                                        option.value
                                                                                    )
                                                                                }
                                                                                className="h-4 w-4 rounded border-gray-300 text-orange-400 focus:ring-orange-300"
                                                                            />
                                                                            <label
                                                                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                                className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                            >
                                                                                {
                                                                                    option.label
                                                                                }
                                                                            </label>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 bg-black">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pt-8">
                        <h1 className="text-2xl font-bold tracking-tight text-white mb-4">
                            Filter your recipes
                        </h1>

                        <div className="flex items-center">
                            <Menu
                                as="div"
                                className="relative inline-block text-left"
                            >

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                </Transition>
                            </Menu>
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>

                    <section
                        aria-labelledby="products-heading"
                        className=" pt-6"
                    >
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Allergens</h3>
                                <ul
                                    role="list"
                                    className="space-y-4 border-b border-gray-200 pb-6 text-sx font-medium text-gray-900"
                                >
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <p
                                                onClick={() => {
                                                    handleCategoryChange(
                                                        category.name
                                                    )
                                                }}
                                                className="text-white"
                                            >
                                                {category.name}
                                            </p>
                                        </li>
                                    ))}
                                </ul>

                                {filters.map((section) => (
                                    <Disclosure
                                        as="div"
                                        key={section.id}
                                        className="border-b border-gray-200 py-6"
                                    >
                                        {({ open }) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">
                                                            {section.name}
                                                        </span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <MinusIcon
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <PlusIcon
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-4">
                                                        {section.options.map(
                                                            (
                                                                option,
                                                                optionIdx
                                                            ) => (
                                                                <div
                                                                    key={
                                                                        option.value
                                                                    }
                                                                    className="flex items-center"
                                                                >
                                                                    <input
                                                                        id={`filter-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        defaultValue={
                                                                            option.value
                                                                        }
                                                                        type="checkbox"
                                                                        defaultChecked={
                                                                            option.checked
                                                                        }
                                                                        onChange={() =>
                                                                            handleAreaChange(
                                                                                option.value
                                                                            )
                                                                        }
                                                                        className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                        className="ml-3 text-sm text-white"
                                                                    >
                                                                        {
                                                                            option.label
                                                                        }
                                                                    </label>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                {
                                    <DisplayRecipes
                                        selectedCategory={selectedCategory}
                                        selectedAreas={selectedAreas}
                                    />
                                }
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
