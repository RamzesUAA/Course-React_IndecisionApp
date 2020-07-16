class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state =  {
            count: 0
        };  
    }

    componentDidMount(){
        const json = localStorage.getItem('count');
        const count = parseInt(json, 10);
        if(!isNaN(count)){
            this.setState(() => ({count}));
        } 
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    }
     
    componentWillUnmount(){
        console.log('componentWillUnmount');

    }


    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    };

    handleMinusOne(){
        this.setState((prevState) =>{
            return{
                count: prevState.count - 1
            }
        })
    }

    handleReset(){
        this.setState(() => {
             return{
                 count: 0
             };
         });
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}



ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;
// const AddOne =() => {
//     count++;
//     renderCounterApp();
// };
// const MinusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const Reset = () => {
//     count = 0;
//     renderCounterApp();
// };


// //Challenge 
// //Make button "-1" -setup minusOne function and register - log "minusOne"
// // Make reset button "reset" - setup reset function - log "reset"

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={AddOne}>+1</button>
//             <button onClick={MinusOne}>-1</button>
//             <button onClick={Reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot)
// };

// renderCounterApp();