import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import './styles.css';
import '../../styles.css';
import { fields } from './models/index';
import pencil from '../../../../assets/icons/pencil.png';
import Modal from '../../components/Modal/index.jsx';
import Display from '../../../../components/Display/index.jsx';
import { addRecommendation, updateField } from '../../actions';

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
                field.set('id', data.get('id')).set('name', data.get('name')).set('recommendation', data.get('recommendation')) 
                : 
                field
        });
        this.props.updateField(info, title);
    }

    render() {
        const header = "Create recommendations";
        const isSimpleForm = true;
        return (
            <>
                <h1>Recommendation</h1>
                <Modal onConfirm={this.confirm} header={header} fields={fields} isSimpleForm={isSimpleForm} isEditing={false}>
                    <button className="add">+</button>
                </Modal>
                {this.props.recommendations.map(data => (
                    <div key={data.get('id')} className="show-info">
                    <Display isSimpleForm={false} fields={fields} header={header} data={data} />
                    <Modal onConfirm={this.update} fields={fields} info={data} header={header} isSimpleForm={isSimpleForm} isEditing={true}>
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