import '@fortawesome/fontawesome-free/css/all.min.css';

function Valuecard(props){
    let value=props.value;
    return(
        <div className="p-3 pr-3 w-[320px] border-2 rounded-md overflow-hidden bg-opacity-80 flex gap-x-2 ">
            <div className='text-6xl flex place-items-center justify-center'>
                <i className={value.icon}></i>
            </div>
            <div>
                <h3 className='text-2xl'>{value.title}</h3>
                <p className='m-4'>{
                    value.paragraph.length>100?
                    (value.paragraph.substr(0,100))+"....":
                    (value.paragraph)
                    }</p>
            </div>
            
        </div>)
}
export default Valuecard;