/* eslint-disable array-callback-return */
export const writeJSON = (data, info) => fetch(`http://localhost:3000/${info}`, {
  body: JSON.stringify(data),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  method: 'POST'
}).then((response) => response.json());

export const deleteJSON = (info) => {
  fetch(`http://localhost:3000/${info}`)
    .then(resp => resp.json())
    .then(data => {
      data.map(field => {
        fetch(`http://localhost:3000/${info}/${field.id}`, 
          { method: 'DELETE' }).then((response) => response.json());
      });
    });
};

export const deleteAll = () => {
  deleteJSON('information');
  deleteJSON('education');
  deleteJSON('workExperience');
  deleteJSON('aptitudes');
  deleteJSON('recommendation');
};

export const writeAll = (information, education, workExperience, aptitudes, recommendations) => {
  writeJSON(information.toJS(), 'information');
  education.map(field => (
    writeJSON(field.toJS(), 'education')
  ));

  workExperience.map(field => (
    writeJSON(field.toJS(), 'workExperience')
  ));

  aptitudes.map(field => (
    writeJSON(field.toJS(), 'aptitudes')
  ));

  recommendations.map(field => (
    writeJSON(field.toJS(), 'recommendation')
  ));
};