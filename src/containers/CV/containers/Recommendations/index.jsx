import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import '../../styles.css';
import { fields } from './models/index';
import Modal from '../../components/Modal/index.jsx';
import ListItem from '../../components/ListItem/index.jsx';
import FormModal from '../../components/FormModal/index.jsx';
import { addRecommendation, updateField } from '../../actions';

class RecommendationsComponent extends Component {

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
        this.changeVisibility(false);
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
        this.changeVisibility(false);
    }

    render() {
        const header = "Create recommendations";
        const isSimpleForm = false;
        return (
            <>
                <h1>Recommendation</h1>
                <div><button className="add" onClick={this.handleAdd}>+</button></div>
                {this.state.isEditing ? null
                    :
                    <Modal onChangeVisibility={this.changeVisibility} isVisible={this.state.isVisible} header={header}>
                        <FormModal onConfirm={this.confirm} fields={fields} isEditing={this.state.isEditing} />
                    </Modal>
                }
                {this.props.recommendations.map(data => (
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