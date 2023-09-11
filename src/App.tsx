import { KeyboardEventHandler, ReactEventHandler, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)


/*const state = {
  labels: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  datasets: [
    {
      label: 'Class Strength',
      backgroundColor: [
        'Indigo',
        'Purple',
        'Yellow',
        'Teal',
        'Red',
        'Navy',
        'Brown',
      ],
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [10, 14, 17, 16, 19, 16, 17],
    },
  ],
}*/


function App() {
  //const [count, setCount] = useState(0)
  const [values, setValues] = useState([]);
  const [defaultInputValue, setdefaultInputValue] = useState([]);

  const [aryStack, setAryStack] = useState([]);
  
  const [state, setState] = useState({
    labels: [
      /*'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',*/
    ],
    datasets: [
      {
        label: 'Values',
        /*backgroundColor: [
          'Indigo',
          'Purple',
          'Yellow',
          'Teal',
          'Red',
          'Navy',
          'Brown',
        ],*/
        fill: false,
        lineTension: 0.2,
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        //data: [4, 5, 17, 3, 1, 0, 3],
        data: [],
      },
    ],
  });

  /*const setNewValues = (newValues: string) => {
    //console.log("String values: ",newValues);
    //string parsing to array of values
    let aryValues:number[] = newValues.split(",").map((item)=>parseInt(item.trim()));
    //remove NaN
    const newArray = aryValues.filter(function (value) {
      return !Number.isNaN(value);
    });
    //console.log("Splitted values: ",newArray.length);
    let aryLabels:any = [];
    for (let i = 0; i < newArray.length; i++){
      aryLabels.push((i+1).toString());
    }
    //console.log("Labels: ",aryLabels);
    //then set state
    setState({
      labels: aryLabels,
      datasets: [
        {
          label: 'Values',
          fill: false,
          lineTension: 0.2,
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          data: newArray,
        }
      ]
    });
    setAryStack(newArray);
  };*/


  const handleKeyDown = (event:any) => {
    if (event.key === 'Enter'){
      //console.log("pressed enter!");
      //console.log(event.target.value);
      const newValues = event.target.value;
      let aryValues:number[] = newValues.split(",").map((item)=>parseInt(item.trim()));
      //remove NaN
      const newArray = aryValues.filter(function (value) {
        return !Number.isNaN(value);
      });
      //console.log("Splitted values: ",newArray);
      let aryLabels:any = [];
      for (let i = 0; i < newArray.length; i++){
        aryLabels.push((i+1).toString());
      }
      //console.log("Labels: ",aryLabels);
      //then set state
      setState({
        labels: aryLabels,
        datasets: [
          {
            label: 'Values',
            fill: false,
            lineTension: 0.2,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: newArray,
          }
        ]
      });
      setAryStack(newArray);
      //setValues([]);
      //console.log(aryStack);
    }
  };

  const handleRemoveValue = (indexToRemove:number) => {
    //console.log("Remove value: ", indexToRemove);
    //remove 1 element at indexToRemove
    //setAryStack(aryStack.splice(indexToRemove,1));
  }

  return (
    <>
    <div>
      <Line
        data={state}
        /*options={{
          title: {
            display: true,
            text: 'Values',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}*/
      />
      <div>
        New value: <input className='inputValue' type="text" id="values" name="values" value={values} 
        onChange={
          (event: React.ChangeEvent<HTMLInputElement>) => {
            const rgxpInput = /^[-,0-9]+$/;
            //console.log(event.target.value);
            if(event.target.value === '' || rgxpInput.test(event.target.value)){
              //setNewValues(event.target.value); <--- moved to onkeydown
              setValues(event.target.value);
            }
          }
        }
        onKeyDown={handleKeyDown}></input> (press enter to confirm)
      </div>
      <>
        {
          (aryStack.length > 0 && aryStack.map( (item, index) => 
            <div key={index} className='rowValue'>{item} <button key={"b"+index} onClick={handleRemoveValue(index)} title="Delete this value">-</button></div>
          ))
        }
      </>
    </div>
      {/*<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  */}
    </>
  )
}

export default App
