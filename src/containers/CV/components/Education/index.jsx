import React, { Component } from 'react';
import Display from '../../../../components/Display/index';
import Modal from '../../../../components/Modal/index';
import { Map } from 'immutable';
import '../../styles.css';

class Education extends Component {
    onConfirm = (info) => {
        const data = Map({
            field1: info.field1,
            field2: info.field2,
            startDate: info.startDate,
            endDate: info.endDate,
            description: info.description
        });

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
                <Display />
            </>
        );
    }
}

export default Education;