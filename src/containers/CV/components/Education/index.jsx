import React, { Component } from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';

import '../../styles.css';
import { addEducation, updateField } from '../../actions/index';
import pencil from '../../../../assets/icons/pencil.png';
import Modal from '../../../../components/Modal/index.jsx';
import Display from '../../../../components/Display/index.jsx';

class EducationComponent extends Component {
    confirm = (data) => {
        this.props.addEducation(data);
    }

    update = (data) => {
        const title = 'education';
        const info = this.props.education.map(field => {
            return field.get('id') === data.get('id') ? 
                field.set('id', data.get('id')).set('field1', data.get('field1')).set('field2', data.get('field2')).set('startDate', data.get('startDate')).set('endDate', data.get('endDate')).set('description', data.get('description')) 
                : 
                field
        });
        this.props.updateField(info, title);
    }

    render() {
        const header = "Education";
        const isSimpleForm = false;
        const fields = Map({
            field1: "Center of Studies",
            field2: "Studies",
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
                {this.props.education.map(field => (
                    <div key={field.get('id')} className="show-info">
                        <Display isSimpleForm={isSimpleForm} header={header} fields={fields} field={field} />
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
        addEducation: info => dispatch(addEducation(info)),
        updateField: (info, title) => dispatch(updateField(info, title))
    };
}

const mapStateToProps = ({ Cv }) => ({
    education: Cv.get('education')
})

const Education = connect(mapStateToProps, mapDispatchToProps)(EducationComponent);

export default Education;