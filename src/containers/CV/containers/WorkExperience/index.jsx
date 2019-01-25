import { connect } from 'react-redux';
import React, { Component } from 'react';

import '../../styles.css';
import { fields } from './models/index';
import pencil from '../../../../assets/icons/pencil.png';
import Modal from '../../components/Modal/index.jsx';
import Display from '../../../../components/Display/index.jsx';
import { addWork, updateField } from '../../actions/index';

class WorkExperienceComponent extends Component {
    confirm = (data) => {
        this.props.addWork(data);
    }

    update = (data) => {
        const title = 'workExperience';
        const info = this.props.workExperience.map(field => {
            return field.get('id') === data.get('id') ? 
                field.set('id', data.get('id')).set('field1', data.get('field1')).set('field2', data.get('field2')).set('startDate', data.get('startDate')).set('endDate', data.get('endDate')).set('description', data.get('description')) 
                : 
                field
        });
        this.props.updateField(info, title);
    }

    render() {
        const header = "Create work experience";
        const isSimpleForm = false;

        return (
            <>
                <h1>Work Experience</h1>
                <Modal onConfirm={this.confirm} header={header} fields={fields}>
                    <button className="add">+</button>
                </Modal>
                {this.props.workExperience.map(data => (
                    <div key={data.get('id')} className="show-info">
                        <Display isSimpleForm={isSimpleForm} fields={fields} data={data} />
                        <Modal onConfirm={this.update} fields={fields} info={data} header={header}>
                            <button className="edit"><img src={pencil} alt="Edit" /></button>
                        </Modal>
                    </div>
                ))}
            </>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addWork: info => dispatch(addWork(info)),
        updateField: (info, title) => dispatch(updateField(info, title))
    };
}

const mapStateToProps = ({ Cv }) => ({
    workExperience: Cv.get('workExperience')
})

const WorkExperience = connect(mapStateToProps, mapDispatchToProps)(WorkExperienceComponent);

export default WorkExperience;