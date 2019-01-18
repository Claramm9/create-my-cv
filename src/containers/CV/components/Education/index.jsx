import React, { Component } from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';

import '../../styles.css';
import { addEducation } from '../../actions/index';
import Modal from '../../../../components/Modal/index.jsx';
import Display from '../../../../components/Display/index.jsx';

class EducationComponent extends Component {
    confirm = (data) => {
        this.props.addEducation(data);
    }

    render() {
        const header = "Education";
        const isSimpleForm = false;
        const fields = Map({
            id: this.props.education.length(),
            field1: "Center of Studies",
            field2: "Studies",
            startDate: "Start date",
            endDate: "End date",
            description: "Description"
        });
        return (
            <>
                <Modal onConfirm={this.confirm} header={header} fields={fields} isSimpleForm={isSimpleForm}>
                    <button className="add">+</button>
                </Modal>
                {this.props.education.map(field => (
                    <Display isSimpleForm={isSimpleForm} header={header} fields={fields} field={field} />
                ))}
            </>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addEducation: info => dispatch(addEducation(info))
    };
}

const mapStateToProps = ({ Cv }) => ({
    education: Cv.get('education')
})

const Education = connect(mapStateToProps, mapDispatchToProps)(EducationComponent);

export default Education;