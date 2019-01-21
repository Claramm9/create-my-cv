import { Map } from 'immutable';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import '../../styles.css';
import { addWork } from '../../actions/index';
import Modal from '../../../../components/Modal/index.jsx';
import Display from '../../../../components/Display/index.jsx';

class WorkExperienceComponent extends Component {
    confirm = (data) => {
        this.props.addWork(data);
    }

    update = (data) => {
        const info = this.props.workExperience.map(field => {
            return field.get('id') === data.get('id') ? 
                field.set('id', data.get('id')).set('field1', data.get('field1')).set('field2', data.get('field2')).set('startDate', data.get('startDate')).set('endDate', data.get('endDate')).set('description', data.get('description')) 
                : 
                field
        });
        //this.props.updateField(info);
    }

    render() {
        const header = "Work Experience";
        const isSimpleForm = false;
        const fields = Map({
            field1: "Company",
            field2: "Position",
            startDate: "Start date",
            endDate: "End date",
            description: "Description"
        });
        return (
            <>
                <h1>{header}</h1>
                <Modal onConfirm={this.confirm} header={header} fields={fields} isSimpleForm={isSimpleForm}>
                    <button className="add">+</button>
                </Modal>
                {this.props.workExperience.map(field => (
                    <div key={field.get('id')} className="show-info">
                        <Display isSimpleForm={isSimpleForm} fields={fields} info={this.props.workExperience} />
                        <Modal onConfirm={this.update} fields={fields} info={field} header={header}>
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
        addWork: info => dispatch(addWork(info))
    };
}

const mapStateToProps = ({ Cv }) => ({
    workExperience: Cv.get('workExperience')
})

const WorkExperience = connect(mapStateToProps, mapDispatchToProps)(WorkExperienceComponent);

export default WorkExperience;