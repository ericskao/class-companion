var React = require('react');
var ClassroomActions = require('../actions/ClassroomActions');

var ClassroomForm = React.createClass({
  getInitialState: function(){
    return {
      newStudent: ''
    }
  },

  componentWillMount: function(){
    if(!AuthStore.checkAuth()){
      this.render = function () {
        return false;
      }
      location.hash = '/login';
    }
  },

  handleAddStudent: function(e){
    e.preventDefault();
    var newStudent = React.findDOMNode(this.refs.newStudent).value;
    ClassroomActions.addStudent({studentTitle: newStudent});
    React.findDOMNode(this.refs.newStudent).value = '';
  },

  render: function() {
    return (
      <div className="classroomForm container">
        <div className="row">
          <div className="col-sm-6 well text-center">
            <form>
              <label for="">Add student</label>
              <div className="form-group">
                <input type="text" ref="newStudent" id="newStudent" className="form-control" placeholder="new student"  />
              </div>
              <button type="submit" id="addNewStudent" onClick={this.handleAddStudent} className="btn btn-primary btn-block submit-button">Add student!</button>
            </form>
          </div> 
        </div> 
      </div>
    );
  }

});

module.exports = ClassroomForm;
