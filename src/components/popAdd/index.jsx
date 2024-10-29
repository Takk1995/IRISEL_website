import '../../style/Takk.css'
import Add from './add';


const PopAdd = ({onClose}) => {
    const handleMaskClick = (e) => {
        if(e.target.className === 'popMask') {
            onClose();
        }
    }

    return (
        <div className="popMask" onClick={handleMaskClick}>
            <div className="pop">
                <div>
                    <div className="popClose" onClick={onClose}>X</div>
                </div>
                <Add />
            </div>
        </div>
    );
}

export default PopAdd;