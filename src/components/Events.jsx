import React, { useState } from "react";

const FormValidation = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [formData, setFormData] = useState({
        category: "",
        title: "",
        date: "",
        location: "",
        price: "",
        details: "",
    });
    const [selectedImages, setSelectedImages] = useState([]);

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            category: "",
            title: "",
            date: "",
            location: "",
            price: "",
            details: "",
        });
        setSelectedImages([]);
    };

    const handleImageChange = (event) => {
        const files = event.target.files;
        const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
        setSelectedImages([...selectedImages, ...newImages]);
    };

    const triggerFileInput = () => {
        document.getElementById("imageInput").click();
    };

    return (
        <div className="bg-offwhite lg:py-[60px] py-10">
            <div className="container">
                <h1 className="font-bold md:text-4xl text-3xl leading-custom-md text-naturalblack text-center pb-5">Event einsenden  </h1>
                <p className="text-xl leading-custom-lg max-w-[768px] mx-auto text-center text-gray font-light pb-5 max-sm:text-base"> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <div className="max-w-[768px] mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="border-dashed bg-white border-lightgray border rounded-[30px] flex py-2 px-4 max-sm:px-[10px] max-sm:gap-3 gap-4 mb-5 max-w-[768px] mx-auto">
                            {selectedImages.map((image, index) => (
                                <img key={index} className="rounded-[20px] max-w-[96px]" src={image} alt={`Selected Image ${index + 1}`} />))}
                            <button type="button" onClick={triggerFileInput} className="border-dashed border-lightgray border-2 rounded-[20px] py-10 px-10">
                                <img src="./assets/images/svg/plus.svg" alt="plus" />
                            </button>
                            <input type="file" id="imageInput" accept="image/*" className="hidden" multiple onChange={handleImageChange} />
                        </div>
                        <div className="flex py-4 px-4 max-sm:py-3 rounded-[30px] border-lightgray border bg-white sm:mb-5 mb-3 relative">
                            <input className="w-full outline-none text-sm font-bold placeholder-gray" type="text" required name="category" placeholder="Kategorie" value={formData.category} onChange={handleChange} />
                            <img className="rounded-[20px] max-w-[96px] cursor-pointer" src="./assets/images/svg/arrow.svg" alt="dropdown arrow" onClick={toggleDropdown} />
                            {showDropdown && (
                                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-lightgray rounded-lg shadow-md">
                                    <ul className="list-none p-2">
                                        <li className="p-2 cursor-pointer" onClick={() => { setFormData({ ...formData, category: "Food" }); setShowDropdown(false); }}>Food </li>
                                        <li className="p-2 cursor-pointer" onClick={() => { setFormData({ ...formData, category: "Travel" }); setShowDropdown(false); }} > Travel </li>
                                        <li className="p-2 cursor-pointer" onClick={() => { setFormData({ ...formData, category: "Cloths" }); setShowDropdown(false); }} > Cloths </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="sm:flex gap-5 sm:mb-5 mb-3">
                            <input className="py-[17.5px] pl-4 max-sm:py-3 max-sm:w-full rounded-[30px] placeholder-gray border-lightgray border outline-none text-sm font-bold w-[50%] max-sm:mb-3" type="text" required name="title" placeholder="Titel" value={formData.title} onChange={handleChange} />
                            <input className="py-[17.5px] pl-4 max-sm:py-3 rounded-[30px] max-sm:w-full placeholder-gray border-lightgray border outline-none text-sm font-bold w-[50%]" type="text" required name="date" placeholder="Datum" value={formData.date} onChange={handleChange} />
                        </div>
                        <div className="sm:flex gap-5 sm:pb-5 pb-3">
                            <input className="py-[17.5px] pl-4 max-sm:py-3 max-sm:w-full rounded-[30px] placeholder-gray border-lightgray border outline-none text-sm font-bold w-[50%] max-sm:mb-3" type="text" required name="location" placeholder="Standort" value={formData.location} onChange={handleChange} />
                            <input className="py-[17.5px] max-sm:py-3 pl-4 rounded-[30px] max-sm:w-full placeholder-gray border-lightgray border outline-none text-sm font-bold w-[50%]" type="text" required name="price" placeholder="Preis" value={formData.price} onChange={handleChange} />
                        </div>
                        <textarea className="w-full py-[55.5px] max-sm:pt-10 max-sm:pb-5 mb-5 leading-6 text-sm font-bold resize-none outline-none pl-4 rounded-[30px] border-lightgray border text-gray placeholder-gray" placeholder="Details zur Veranstaltung" name="details" required value={formData.details} onChange={handleChange} ></textarea>
                        <button type="submit" className="py-4 px-[115px] max-sm:px-0 max-sm:w-full text-center rounded-[30px] mx-auto bg-custom-gradient sm:flex font-bold text-white hover:scale-100 transition-all duration-700 ease-in-out" > Event einsenden </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormValidation;