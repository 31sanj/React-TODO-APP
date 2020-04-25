import React , {Component} from 'react';
import Notes from './components/Notes';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      noteText: '',
      notes:[], 
    };

  }

  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value});
    console.log(this.state.noteText);
    console.log(noteText.target.value);
  }

  addNotes() {
    if (this.state.noteText === '') {return}

    let notesArr = this.state.notes;
    console.log(notesArr);
    notesArr.push(this.state.noteText);
    this.setState({noteText:''});
    this.textInput.focus();

  }

  handleKeyPress = (event) =>{
    if (event.key=== 'Enter') {

      let notesArr = this.state.notes;
      notesArr.push(this.state.noteText);
      this.setState({noteText:''});

    }
  }

  deleteNotes (index){
    console.log(index)
    let notesArr = this.state.notes;
    console.log(notesArr);
    notesArr.splice(index, 1);
    this.setState({notes: notesArr});
    
  }


  render(){

  let notes = this.state.notes.map((val, key) =>{
    return <Notes key={key} text={val}
            deletedMethod={() => this.deleteNotes(key)} 
           />
  })

  return (
    <div className="container">
    
      <div className="header">React TODO Application</div>

      {notes}

      <div className="btn" onClick={this.addNotes.bind(this)}>+</div>
      
      <input type="text"
          ref={((input) => {this.textInput = input})} 
          className="textInput"
          value={this.state.noteText}
          onChange={noteText =>this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
          />   

    </div>

        );
    }
}

export default App;