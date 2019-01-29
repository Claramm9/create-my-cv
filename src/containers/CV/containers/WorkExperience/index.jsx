import { connect } from 'react-redux';
import React, { Component } from 'react';

import '../../styles.css';
import { fields } from './models/index';
import Modal from '../../components/Modal/index.jsx';
import pencil from '../../../../assets/icons/pencil.png';
import { addWork, updateField } from '../../actions/index';
import FormModal from '../../components/FormModal/index.jsx';
import Display from '../../../../components/Display/index.jsx';

class WorkExperienceComponent extends Component {

    constructor() {
        super();

        this.state = {
            isVisible: false,
            isEditing: false
        }
    }

    handleAdd = () => {
        this.changeVisibility(true);
        this.changeEdition(false);
    }

    handleEditing = () => {
        this.changeVisibility(true);
        this.changeEdition(true);
    }

    changeVisibility = (value) => {
        if (this.state.isVisible !== value) {
            this.setState({ isVisible: value })
        }
    }

    changeEdition = (value) => {
        if (this.state.isEditing !== value) {
            this.setState({ isEditing: value })
        }
    }
    confirm = (data) => {
        this.props.addWork(data);
        this.changeVisibility(false);
    }

    update = (data) => {
        const title = 'workExperience';
        const info = this.props.workExperience.map(field => {
            return field.get('id') === data.get('id') ?
                field.set('id', data.get('id')).set('company', data.get('company')).set('position', data.get('position')).set('startDate', data.get('startDate')).set('endDate', data.get('endDate')).set('description', data.get('description'))
                :
                field
        });
        this.props.updateField(info, title);
        this.changeVisibility(false);
    }

    render() {
        const header = "Create work experience";
        const isSimpleForm = false;

        return (
            <>
                <h1>Work Experience</h1>
                <div><button className="add" onClick={this.handleAdd}>+</button></div>
                <Modal onChangeVisibility={this.changeVisibility} isVisible={this.state.isVisible} header={header}>
                    <FormModal onConfirm={this.confirm} fields={fields} isEditing={this.state.isEditing} />
                </Modal>
                {this.props.workExperience.map(data => (
                    <div key={data.get('id')} className="show-info">
                        <Display isSimpleForm={isSimpleForm} fields={fields} data={data} />
                        <div><button className="edit" onClick={this.handleEditing}><img src={pencil} alt="Edit" /></button></div>
                        <Modal onChangeVisibility={this.changeVisibility} isVisible={this.state.isVisible} header={header}>
                            <FormModal onConfirm={this.update} fields={fields} info={data} isEditing={this.state.isEditing} />
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