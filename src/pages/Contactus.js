import { useState } from "react";

function Contactus() {
    const [formdata, setformdata] = useState({
        fname: "",
        email: "",
        bname: "",
        message: "",
        update: false
    });

    function changeHandler(event) {
        const { name, type, value, checked } = event.target;
        setformdata((prev) => {
            return {
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            };
        });
    }

    return (
        <div className="w-11/12 max-w-[1160px] py-4 mx-auto flex flex-col">
            <div className="mt-12 mb-12">
                <h1 className="text-6xl ">Contact</h1>
                <p className="text-2xl  mt-3">
                    Interested in our work at Pond Foundation? For any questions or thoughts, we‘d love to hear from you.
                </p>
            </div>
            <div className="flex justify-between mt-24 mx-auto gap-x-16 mb-32">
                <form className="bg-white rounded-2xl w-[50vw] p-5 flex flex-col gap-y-2 ">
                    <h1 className="text-4xl">Write to us</h1>
                    <label className="mt-6">
                        <h1 className="text-md -mb-5">Fill Name</h1>
                        <br />
                        <input
                            type="text"
                            name="fname"
                            onChange={changeHandler}
                            value={formdata.fname}
                            className=" w-[47vw] bg-[#f7f6f0] p-2 rounded-md border-2 border-[#f7f6f0] "
                        />
                    </label>
                    <br />
                    <label>
                        <h1  className="text-md -mb-5">Email Address</h1>
                        <br />
                        <input
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            value={formdata.email}
                            className=" w-[47vw] bg-[#f7f6f0] p-2 rounded-md border-2 border-[#f7f6f0] "
                        />
                    </label>
                    <br />
                    <label>
                        <h1  className="text-md -mb-5">Business Name</h1>
                        <br />
                        <input
                            type="text"
                            name="bname"
                            onChange={changeHandler}
                            value={formdata.bname}
                            className=" w-[47vw] bg-[#f7f6f0] p-2 rounded-md border-2 border-[#f7f6f0] "
                        />
                    </label>
                    <br />
                    <label>
                        <h1  className="text-md -mb-5">Message (optional)</h1>
                        <br />
                        <textarea
                            rows={5}
                            cols={30}
                            name="message"
                            onChange={changeHandler}
                            value={formdata.message}
                            className=" w-[47vw] bg-[#f7f6f0] p-2 rounded-md border-2 border-[#f7f6f0] "
                        ></textarea>
                    </label>
                    <br />
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="update"
                                onChange={changeHandler}
                                checked={formdata.update}
                            />
                            <div className="display:block ml-3">Receive updates about our work, our community, and more.</div>
                        </label>
                        <br/>
                        <button 
                        className="m-4 bg-[#1495cc] text-white p-3 rounded-2xl"
                         >
                        Send Message</button>
                    </div>
                </form>
                <div>
                    <div className="text-4xl p-5" >Find us</div>
                    <div className="maps">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.2782385640267!2d6.138742315555366!3d46.18452857911582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64b041ad7613%3A0x909601b36ec9e7f5!2sRue%20Baylon%202B%2C%201227%20Carouge%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1595883731960!5m2!1sen!2sus"
                            width="400"
                            height="400"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                    <div className="flex mt-4 gap-x-5">
                        <div className="flex flex-col gap-y-3">
                            <h1 className="text-2xl">Company address</h1>
                            <div className="text-slate-400">
                                <p>Rue Baylon 2B, c/o</p>
                                <p>CBI Fides Management SA. 1227</p>
                                <p>Carouge, Switzerland</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <h1 className="text-2xl">Postal address</h1>
                            <div  className="text-slate-400">
                                <div>Route de la Dôle 5,</div>
                                <div>Gingins, Switzerland</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactus;
