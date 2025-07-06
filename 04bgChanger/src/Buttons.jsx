export default function Button({buttonText ,textcolor = 'white',color}){
    return (
        <button
        className="rounded-3x shadow-lg px-2"
        style={{backgroundColor : buttonText, color: textcolor}}
        onClick={()=>color(buttonText)}>{buttonText}</button>
    )
}