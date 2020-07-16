
class VisibilityToggle extends React.Component{ 
    constructor(props){
        super(props);
        this.Title = "Visibility Toggle";
        this.Text = "Roman is the best";
        this.state = {
            visibility: false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            }
        })
    };

    render(){
        return(
            <div>
                <h1>{this.Title}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility?'Hide':'Show'}</button>
                <p>{this.state.visibility?this.Text:undefined}</p>
            </div>
        );
    };
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

