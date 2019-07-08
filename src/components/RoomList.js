import React from 'react';

class RoomList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      rooms: [],
      newRoomName: ''
    }
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  handleChange(e){
    this.setState({newRoomName: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.createRoom(this.state.newRoomName);
  }

  createRoom(newRoomName){
    this.roomsRef.push({
      name: newRoomName
    });
    this.setState({ newRoomName: ''})
  }





  componentDidMount(){
    this.roomsRef.on('child_added', snapshot => {
      // dont call .push() method directly on state, its a bad practice. State should be immutable.
      // any change to state that doesn't emply setState() could be overwritten.
      //.concat() returns a new array without changing the existing array.
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
    });
  }

  render(){
    return(
    <div id="rooms">
      <div id="table-items">
        <h1>{this.state.rooms.map(room =>
              <div className="rooms-made" key={room.key}>
                <div>{room.name}</div>
              </div>
            )}</h1>
      </div>
      <form id="create-new-room" onSubmit={(e)=> this.handleSubmit(e)}>
        <label>
          Name:
          <input type="text" value={this.state.newRoomName} onChange={this.handleChange.bind(this)} name="newRoomName" placeholder="new room..."/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
  }
}

export default RoomList;
