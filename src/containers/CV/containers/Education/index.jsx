import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../styles.css';
import { fields } from './models/index';
import Modal from '../../components/Modal/index.jsx';
import ListItem from '../../components/ListItem/index.jsx';
import FormModal from '../../components/FormModal/index.jsx';
import { addEducation, updateField } from '../../actions/index';

class EducationComponent extends Component {

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
        this.props.addEducation(data);
        this.changeVisibility(false);
    }

    update = (data) => {
        const title = 'education';
        const info = this.props.education.map(field => {
            return field.get('id') === data.get('id') ?
                field.set('id', data.get('id')).set('center', data.get('center')).set('studies', data.get('studies')).set('startDate', data.get('startDate')).set('endDate', data.get('endDate')).set('description', data.get('description'))
                :
                field
        });
        this.props.updateField(info, title);
        this.changeVisibility(false);
    }

    render() {
        const header = "Create education";
        const isSimpleForm = false;
        return (
            <>
                <h1>Education</h1>
                <div><button className="add" onClick={this.handleAdd}>+</button></div>
                {this.state.isEditing ? null
                    :
                    <Modal onChangeVisibility={this.changeVisibility} isVisible={this.state.isVisible} header={header}>
                        <FormModal onConfirm={this.confirm} fields={fields} isEditing={this.state.isEditing} />
                    </Modal>
                }
                {this.props.education.map(data => (
                    <ListItem
                        key={data.get('id')}
                        isSimpleForm={isSimpleForm}
                        header={header}
                        fields={fields}
                        data={data}
                        isEditing={this.state.isEditing}
                        onConfirm={this.update}
                        onEditing={this.handleEditing}
                    ></ListItem>
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