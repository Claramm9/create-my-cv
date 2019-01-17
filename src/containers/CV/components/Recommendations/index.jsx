import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import '../../styles.css';
import Modal from '../../../../components/Modal/index.jsx';
import { addRecommendation } from '../../actions';
import Display from '../../../../components/Display/index.jsx';

class RecommendationsComponent extends Component {
    handleClick = () => {
        
    }

    confirm = (data) => {
        this.props.addRecommendation(data);
    }

    render() {
        const header = "Recommendations";
        const isSimpleForm = true;
        return (
            <>
                <Modal onConfirm={this.confirm} header={header} isSimpleForm={isSimpleForm}>
                    <button className="add">+</button>
                </Modal>
                <Display isSimpleForm={isSimpleForm} info={this.props.Cv.get('recommendations')}/>
                <div><button className="finish" onClick={this.handleClick}>Finish</button></div>
            </>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addRecommendation: info => dispatch(addRecommendation(info))
    };
}

const mapStateToProps = ({ Cv }) => ({
    Cv: Cv
})

const Recommendations = connect(mapStateToProps, mapDispatchToProps)(RecommendationsComponent);

export default Recommendations;