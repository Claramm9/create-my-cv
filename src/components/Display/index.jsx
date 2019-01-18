import React from 'react';

import './styles.css';
import Modal from '../Modal/index.jsx';
import pencil from '../../assets/icons/pencil.png';

const Display = ({ fields, field, isSimpleForm, header }) => {
    return (
        <>
            {!(isSimpleForm) ?
                <div className="show-info">
                    <div className="display">
                        <span className="field">{fields.get('field1')}: {field.get('field1')}</span>
                        <span className="field">{fields.get('field2')}: {field.get('field2')}</span>
                        <span className="field">{fields.get('startDate')}: {field.get('startDate')}</span>
                        <span className="field">{fields.get('endDate')}: {field.get('endDate')}</span>
                        <span className="field">{fields.get('description')}: {field.get('description')}</span>
                    </div>
                    <Modal onConfirm={onConfirm} fields={fields} info={field} header={header}>
                        <button className="edit"><img src={pencil} alt="Edit" /></button>
                    </Modal>
                </div>
                :
                <div>
                    <div className="display">
                        <span className="field">{field.get('field')}</span>
                    </div>
                </div>
            }
        </>
    )
}

export default Display;