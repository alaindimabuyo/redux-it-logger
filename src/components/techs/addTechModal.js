import React, {useState} from 'react'
import M from "materialize-css/dist/js/materialize.min.js"

const AddTechModal = () => {
    const [firstName, setFirstName] = useState('');
    
    const [lastName, setLastName] = useState('')

    const onSubmit = () => {
        if(firstName === "" || lastName === ""){
            M.toast({html: "Please enter first and last name "})
        }else{
            console.log(firstName, lastName)

            setLastName('')
            setFirstName('')
            
        }
        
    }
    return (
        <div id="add-tech-modal" className="modal" >
            <div className="modal-content">
                <h4>Enter Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                        <label htmlFor="firstName" className="active">Tech First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={lastName} onChange={e => setLastName(e.target.value)}></input>
                        <label htmlFor="message" className="active">Tech Last Name</label>
                    </div>
                </div>

                
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green btn-flat">Enter</a>
            </div>
        </div>
    )
}



export default AddTechModal
