import React from 'react'

const NewPokemon = () => {

    return(
        <form>
            <div class="modal">
                <div class="modal-background"></div>
                    <div class="modal-content">
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Species: </label>
                </div>
                <div className="field-body">
                    <div className="field">
                            <div className="control">
                                <input className="input">
                                </input>
                            </div>
                    </div>
                </div>
            </div>
                <div className="field is-horizontal">
                    <label className="label">Nickname:  </label >
                        <div className="control">
                            <input className="input" type="text"/>
                        </div>
                </div>
                <div className="field is-horizontal">
                    <label className="label">Level: </label >
                        <div className="control">
                            <input className="input" type="text"/>
                        </div>
                    
                </div>
                <div className="field is-horizontal">
                    <label className="label">Nature: </label>
                        <div className="control">
                            <input className="input" type="text"/>
                        </div>
                </div>
                <div className="field is-horizontal">
                    <label className="label">Ability: </label>
                        <div className="control">
                            <input className="input" type="text"/>
                        </div>
                </div>
                <div className="field is-horizontal">
                    <label className="label">HP: </label> 
                        <div className="control">
                            <input className="input" type="text"/>
                        </div>
                </div>
                <div className="field is-horizontal">
                    <label className="label">Attack: </label>
                        <div className="control">
                            <input className="input" type="text"/>
                        </div>
                </div>
                <div className="field is-horizontal">
                    <label className="label">Defence: </label>
                        <div className="control">
                            <input className="input" type="text"/>
                        </div>
                </div>
                <div className="field is-horizontal">
                    <label className="label">Special Attack: </label>
                        <div className="control">
                            <input className="input" type="text"/>
                        </div>
                </div>
                <div className="field is-horizontal">
                    <label className="label">Special Defence: </label>
                        <div className="control">
                            <input className="input" type="text"/>
                        </div>
                </div>
                <div className="field is-horizontal">
                    <label className="label">Speed: </label>
                        <div className="control">
                            <input className="input" type="text"/>
                        </div>
                </div>
                <div class="control">
                    <button class="button is-primary">Submit</button>
                </div>
        </div>
                <button class="modal-close is-large" aria-label="close"></button>
            </div>
        </form>
    )
}

export default NewPokemon