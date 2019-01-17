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
                <Modal onConfirm={this.confirm} header={header} fields={fields} isSimpleForm={isSimpleForm}>
                    <button className="add">+</button>
                </Modal>
                <Display isSimpleForm={isSimpleForm} fields={fields} info={this.props.workExperience}/>
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