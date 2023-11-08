import React from 'react'

interface ModalProps {
    id?: string
    children: React.ReactNode
    onClickOut: () => void
}

export const Modal = ({
    children,
    onClickOut,
    id = 'modal',
    ...otherProps
}: ModalProps) => {
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (
            typeof onClickOut === 'function' &&
            e.target instanceof HTMLDivElement &&
            e.target.id === 'modal'
        ) {
            onClickOut()
        }
    }

    return (
        <div
            id="modal"
            className="fixed inset-0 z-50 flex items-center justify-center modal-container bg-black bg-opacity-60 animate-fade-bg text-black"
            onClick={handleOutsideClick}
        >
            <div
                {...otherProps}
                id={id}
                className="modal bg-white rounded-lg shadow-lg p-6 w-full md:w-3/4 max-w-3/ max-h-full overflow-y-auto border border-orange-400"
            >
                {children}
            </div>
        </div>
    )
}
