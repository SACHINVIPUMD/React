import React,{Component} from "react"
export default class ComponentLifeCycle extends Component{
    constructor(props){
    super(props);
    this.state={favColor:"blue"}
}
componentDidMount(){
    setTimeout(()=>{this.setState({favColor:"red"})},3000)
}
shouldComponentUpdate() {
    return true;
}
componentDidUpdate() {
    document.getElementById('heading').innerHTML = "I am new color : " + this.state.favColor;
}
getSnapshotBeforeUpdate(prvVal , prvState) {
    document.getElementById('para').innerHTML = "I was there Up : " + prvState.favColor;
}
render(){
    return (
        <div>
          <h1>Color : {this.state.favColor}</h1>
          <p id='para'></p>
          <p id='heading'></p>
        </div>
      )
}
}
