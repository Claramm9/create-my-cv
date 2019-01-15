import React, { Component } from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';

import '../../styles.css';
import { addEducation } from '../../actions/index';
import Modal from '../../../../components/Modal/index';
import Display from '../../../../components/Display/index';

class EducationComponent extends Component {
    onConfirm = (data) => {
        this.props.addEducation(data);
    }

    render() {
        const header = "Education";
        const fields = Map({
            field1: "Center of Studies",
            field2: "Studies",
            startDate: "Start date",
            endDate: "End date",
            description: "Description"
        });
        return (
            <>
                <Modal onConfirm={this.onConfirm} header={header} fields={fields}>
                    <button className="add">+</button>
                </Modal>
                <Display fields={fields} info={this.props.education}/>
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