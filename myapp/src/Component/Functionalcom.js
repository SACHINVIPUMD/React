function Functionalcom(){
    return (
        <div>
            <h1>Hello world from Functionalcom</h1>
        </div>
    )
}
function LoopPrint(props) {
    const elements = [];
    for (let i = 0; i < props.ele; i++) {
      console.log(i);
      elements.push(<Functionalcom key={i} />);
    }
  
    return <div>{elements}</div>;
  }
  
export default LoopPrint;

