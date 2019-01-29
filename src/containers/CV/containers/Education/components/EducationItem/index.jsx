import React, { Component } from 'react';

import '../../../../styles.css';
import { fields } from '../../models/index';
import Modal from '../../../../components/Modal/index.jsx';
import pencil from '../../../../../../assets/icons/pencil.png';
import FormModal from '../../../../components/FormModal/index.jsx';
import Display from '../../../../../../components/Display/index.jsx';

class EducationItem extends Component {

    render() {
        return (
            <div key={data.get('id')} className="show-info">
                <Display isSimpleForm={isSimpleForm} header={header} fields={fields} data={this.props.data} />
                <div><button className="edit" onClick={this.handleEditing}><img src={pencil} alt="Edit" /></button></div>
                <Modal onChangeVisibility={this.changeVisibility} isVisible={this.state.isVisible} header={header}>
                    <FormModal onConfirm={this.update} fields={fields} info={data} isEditing={this.state.isEditing} />
                </Modal>
            </div>
        )
    }
}

export default EducationItem;
