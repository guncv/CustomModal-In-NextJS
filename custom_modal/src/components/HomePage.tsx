'use client'
import { Fragment, useState } from "react";
import Modal from "./Modal";
import TextModal from "./TextModal";
import VideoModal from "./VideoModal";
import FormModal from "./FormModal";

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    return (
        <div className="p-10 text-center">
            <h1 className="text-3xl">
                Create Custom Modal in React JS with Tailwind C
            </h1>

            <button className="text-white bg-blue-700 hover:bg-blue-800 
            font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 focus:outline-none"
            onClick={() => setShowModal(!showModal)}>
                Text Modal
            </button>

            <button className="text-white bg-blue-700 hover:bg-blue-800 
            font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 focus:outline-none"
            onClick={() => setShowModal2(!showModal)}>
                Video Modal
            </button>

            <button className="text-white bg-blue-700 hover:bg-blue-800 
            font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 focus:outline-none"
            onClick={() => setShowModal3(!showModal)}>
                Form Modal
            </button>

            <Modal isVisible={showModal} 
            onClose={()=>setShowModal(!setShowModal)}>
                <TextModal/>
            </Modal>

            <Modal isVisible={showModal2} 
            onClose={()=>setShowModal2(!showModal2)}>
                <VideoModal/>
            </Modal>

            <Modal isVisible={showModal3} 
                onClose={()=>setShowModal3(!showModal3)}>
                <FormModal/>
            </Modal>
        </div>
    )
}

export default HomePage;
