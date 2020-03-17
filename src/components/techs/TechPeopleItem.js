import React from 'react'
import PropTypes from 'prop-types'

const TechPeopleItem = ({tech}) => {
    return (
        <li className="collection-item">
            <div>
                {tech.firsName} {tech.lastName} 
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

TechPeopleItem.propTypes = {
    tech: PropTypes.object.isRequired
}

export default TechPeopleItem
