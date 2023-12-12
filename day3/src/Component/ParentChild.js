function Parent(){
    return(
        <div>
            <Child val= {1000} />
        </div>
    )
}
function Child(props){
    return(
        <div>
            <h1>child value is :{props.val}</h1>
        </div>
    )
}
export default Parent;
