import React, { Component } from 'react';
import { Map } from 'immutable';
import Modal from '../../../../components/Modal/index';
import Display from '../../../../components/Display/index';
import '../../styles.css';

class WorkExperience extends Component {
    render() {
        const header = "Work Experience";
        const fields = Map({
            field1: "Company",
            field2: "Position",
            startDate: "Start date",
            endDate: "End date",
            description: "Description"
        });
        return (
            <>
                <Modal header={header} fields={fields}>
                    <button className="add">+</button>
                </Modal>
                <Display />
            </>
        );
    }
}

export default WorkExperience;