import './index.css'
function handleClick(){
    alert('You clicked me !')
}
export default function Button(){
    return(
    <><button className="btn" onDoubleClick={handleClick}>Click Me</button>
    <button className="btn" onClick={handleClick}>Click Me</button>
</>
    )
}