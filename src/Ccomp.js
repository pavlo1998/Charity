
import "./StylesCalc.css"
import { Button } from '@material-ui/core';
import React, { Component } from 'react'

export default class Ccomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             error: null,
             isLoaded: false,
             items: []
        }
    }

    componentDidMount(){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.drinks
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    
    render() {
        const {error, isLoaded, items} = this.state;
        if(error) {
            return <p>Error {error.message}</p>
        } else if(!isLoaded){
            return <p>Loading... </p>
        }else{
            return(
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.strDrink}
                            <img width='5%' height="5%" src={item.strDrinkThumb}/>
                            <Button variant="contained" color="secondary">
                                Secondary
                            </Button>
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

























// export default class Ccomp extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             input: "",
//             firstState: "",
//             sumb: ""
//         }
//        this.toNumber = this.toNumber.bind(this) 
//        this.reset = this.reset.bind(this) 
//        this.clickSumb = this.clickSumb.bind(this) 
//        this.clickDor = this.clickDor.bind(this) 
//     }
    
//    toNumber(event){
//    this.setState({
//        input: +(this.state.input + event.target.innerText)
//    })
//    }

//    clickSumb(event){
//        this.setState({
//            firstState: this.state.input
//        })
//        this.setState({
//         input: ""
//     })
    
//     this.setState({
//         sumb: event.target.innerText
//     })
   
//    }

//    clickDor(){
    

//     switch(this.state.sumb){
//         case '+':
            
//            this.setState({
//             input: +this.state.firstState + +this.state.input
//            }) 
//            break;
           
//         case '-':
//         this.setState({
//             input: +this.state.firstState - +this.state.input
//         }) 
//         break;

//         case '*':
//         this.setState({
//             input: +this.state.firstState * +this.state.input
//         }) 
//         break;

//         case '/':
//         this.setState({
//             input: +this.state.firstState / +this.state.input
//         }) 
//         break;

//         default:
//             this.setState({
//                 input: 'error'
//             })
//         break;    
//     }
    
    
//    }

//    reset(){
//     this.setState({
//         input: ''
//     })
//    }
   

//     render() {
//         return (
//             <div>
//                 <p className='res'>{this.state.input}</p><br/>
//                 <button onClick={this.reset}>Reset</button><br/>
//                 <button onClick={this.toNumber} className='btn'>1</button>
//                 <button onClick={this.toNumber} className='btn'>2</button>
//                 <button onClick={this.toNumber} className='btn'>3</button><br/>
//                 <button onClick={this.toNumber} className='btn'>4</button>
//                 <button onClick={this.toNumber} className='btn'>5</button>
//                 <button onClick={this.toNumber} className='btn'>6</button><br/>
//                 <button onClick={this.toNumber} className='btn'>7</button>
//                 <button onClick={this.toNumber} className='btn'>8</button>
//                 <button onClick={this.toNumber} className='btn'>9</button><br/>
//                 <button onClick={this.toNumber} className='btn'>0</button>
//                 <button onClick={this.clickSumb} className='btn'>+</button>
//                 <button onClick={this.clickSumb} className='btn'>-</button>
//                 <button onClick={this.clickSumb} className='btn'>*</button>
//                 <button onClick={this.clickSumb} className='btn'>/</button>
//                 <button onClick={this.clickDor} className='btn'>=</button>
//             </div>
//         )
//     }
// }























































// export default class Ccomp extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              input: '',
//              items: []
//         }
//         this.inputChagne = this.inputChagne.bind(this)
//         this.inputSubmit = this.inputSubmit.bind(this) 
//     }
    
//     inputChagne(event){
//         this.setState({
//             input: event.target.value
//         })
//     }
//     inputSubmit(event){
//         event.preventDefault()
//         this.setState({
//             input: this.state.input,
//             items: [...this.state.items, this.state.input]
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.inputSubmit}>
//                 <input value={this.state.input} onChange={this.inputChagne}/>
//                 <button type='submit'>Submit</button>
//                 </form> 
//                 <ul>
//                 {this.state.items.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}    
//                 </ul> 
//             </div>
//         )
//     }
// }






















// export default class Ccomp extends Component {
// constructor(props) {
//     super(props)

//     this.state = {
//          input: ''
//     }
//     this.handleChange = this.handleChange.bind(this) 
// }

// handleChange(event){
//     this.setState({
//         input: event.target.value
//     })

// }
//     render() {
//         return (
//             <div>
//                 <input onChange={this.handleChange}/>
//                 <h5>Controlled input:</h5>
//                 <h3>{this.state.input}</h3>
//             </div>
//         )
//     }
// }







// export default class Ccomp extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count: 0
//         }

//         this.increment = this.increment.bind(this);
//         this.decrement = this.decrement.bind(this);
//         this.reset = this.reset.bind(this);

//     }
//     increment(){
//        this.setState(state => ({
//            count: state.count + 1
//        }))
        
//     }

//     decrement(){
//         this.setState(state => ({
//             count: state.count - 1
//         }))
         
//      }
//      reset(){
//          this.setState({
//              count: 0
//          })
//      }

//     render() {
        
//             return (
//                 <div>
//                     <h1>Counter: {this.state.count}</h1>
//                     <button onClick={this.increment}>Increment</button>
//                     <button onClick={this.decrement}>Decrement</button>
//                     <button onClick={this.reset}>Reset</button>
//                 </div>
//             )
        
        
//     }
// }
