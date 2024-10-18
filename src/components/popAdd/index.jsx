import '../../style/Takk.css'
import Add from './add';


const PopAdd = () => {
    return (
        <div className="popMask">
            <div className="pop">
                <div>
                    <div className="popClose">X</div>
                </div>
                <Add />
            </div>
        </div>
    );
}

export default PopAdd;