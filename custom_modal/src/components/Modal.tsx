interface Props {
    isVisible:Boolean
    onClose:Function
    children:React.ReactNode
}

const Modal = ({isVisible, onClose , children} : Props) => {
    
    if (!isVisible) return null;

    const handleClose = (e:React.MouseEvent) => {
        if (e.currentTarget.id == "wrapper") onClose();
    }

    return (
        <div className="fixed inset-0 bg-opacity-25 bg-black backdrop-blur-sm flex
        justify-center items-center" onClick={handleClose}>

            <div className="w-[600px] flex flex-col">

                <div>
                    <div className="w-full">
                        <button className="place-self-end text-white text-xl"
                        onClick={() => onClose()}>
                            X
                        </button>
                    </div>

                    <div className="bg-white p-2">
                        {children}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Modal;