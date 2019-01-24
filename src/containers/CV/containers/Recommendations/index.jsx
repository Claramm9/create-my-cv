import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import './styles.css';
import '../../styles.css';
import { addRecommendation, updateField } from '../../actions';
import pencil from '../../../../assets/icons/pencil.png';
import Modal from '../../../../components/Modal/index.jsx';
import Display from '../../../../components/Display/index.jsx';

class RecommendationsComponent extends Component {
    handleClick = (e) => {
        e.preventDefault();
        
        const information = this.props.Cv.get('information').toJS();
        const education = this.props.Cv.get('education').toJS();
        const workExperience = this.props.Cv.get('workExperience').toJS();
        const aptitudes = this.props.Cv.get('aptitudes').toJS();
        const recommendations = this.props.Cv.get('recommendations').toJS();

        console.log("CV:");
        console.log("Personal Information:");
        console.log(information);
        console.log("Education:");
        console.log(education);
        console.log("Work Experience:");
        console.log(workExperience);
        console.log("Aptitudes:");
        console.log(aptitudes);
        console.log("Recommendations:");
        console.log(recommendations);
    }

    confirm = (data) => {
        this.props.addRecommendation(data);
    }

    update = (data) => {
        const title = 'recommendation';
        const info = this.props.recommendations.map(field => {
            return field.get('id') === data.get('id') ? 
                field.set('id', data.get('id')).set('field1', data.get('field1')).set('field2', data.get('field2')) 
                : 
                field
        });
        this.props.updateField(info, title);
    }

    render() {
        const header = "Recommendations";
        const fields = Map({
            field1: "Name",
            field2: "Recommendation",
            startDate: "",
            endDate: "",
            description: ""
        });
        const isSimpleForm = true;
        return (
            <>
                <h1>{header}</h1>
                <Modal onConfirm={this.confirm} header={header} fields={fields} isSimpleForm={isSimpleForm}>
                    <button className="add">+</button>
                </Modal>
                {this.props.recommendations.map(field => (
                    <div key={field.get('id')} className="show-info">
                    <Display isSimpleForm={false} fields={fields} header={header} field={field} />
                    <Modal onConfirm={this.update} fields={fields} info={field} header={header} isSimpleForm={isSimpleForm}>
                            <button className="edit"><img src={pencil} alt="Edit" /></button>
                    </Modal>
                    </div>
                ))}
                <div><button className="finish" onClick={this.handleClick}>Finish</button></div>
            </>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addRecommendation: info => dispatch(addRecommendation(info)),
        updateField: (info, title) => dispatch(updateField(info, title))
    };
}

const mapStateToProps = ({ Cv }) => ({
    recommendations: Cv.get('recommendations'),
    Cv: Cv
})

const Recommendations = connect(mapStateToProps, mapDispatchToProps)(RecommendationsComponent);

export default Recommendations;