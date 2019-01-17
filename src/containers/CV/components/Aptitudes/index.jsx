import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../styles.css';
import { addAptitud } from '../../actions/index';
import Modal from '../../../../components/Modal/index.jsx';
import Display from '../../../../components/Display/index.jsx';

class AptitudesComponent extends Component {
    confirm = (data) => {
        this.props.addAptitud(data);
    }

    render() {
        const header = "Aptitudes";
        const isSimpleForm = true;
        return (
            <>
                <Modal onConfirm={this.confirm} header={header} isSimpleForm={isSimpleForm}>
                    <button className="add">+</button>
                </Modal>
                <Display isSimpleForm={isSimpleForm} info={this.props.aptitudes}/>
            </>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addAptitud: info => dispatch(addAptitud(info))
    };
}

const mapStateToProps = ({ Cv }) => ({
    aptitudes: Cv.get('aptitudes')
})

const Aptitudes = connect(mapStateToProps, mapDispatchToProps)(AptitudesComponent);

export default Aptitudes;