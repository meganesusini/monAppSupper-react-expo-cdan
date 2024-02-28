import { useRootNavigationState } from 'expo-router';
import React, {useReducer, useRef, useState, useEffect} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HelloButton({ title, sayHello } : { title : string, sayHello : any }) {
    return <Button title={title} onPress={sayHello}></Button>
}
  
export function ButtonClic() {
    return (
        <HelloButton
        title={`Click here to say hello`}
        sayHello={() => console.warn('Hello')}
        ></HelloButton>
    )
}

const Card = ({ loading, error, title } : { loading? : boolean, error? : boolean, title? : string}) => {
    let content 

    if (error) {
        content = <Text style={{ fontSize : 24, color: 'red'}}>Error</Text>
    }
    else if (loading) {
        content = <Text style={{ fontSize : 24, color : 'gray' }}>Loading...</Text>
    }
    else {
        content = (
            <View>
                <Text style={{ fontSize : 60}}>{title}</Text>
            </View>
        )
    }

    return <View style={{ padding : 24}}>{content}</View>
}

export function Func() {
    return (
        <View>
            <Card error={true}/>
            <Card loading={true}/>
            <Card loading={false} title="Title"/>
        </View>
    )
}

const data2 = [
    { id: 'a', name: 'Devin'},
    { id: 'b', name: 'Gabe'},
    { id: 'c', name: 'Kim'}
]

export function ListData() {
    return (
        <View>
            { data2.map((item) => (
                <Text key = {item.id}>{item.name}</Text>
            ))}
        </View>
    );
}

export function Increment() {
    let [compteur, setCompteur] = useState(0);
    let updateCompteur = useRef(0);
    return (
        <View>
            <Button title="+" onPress={() => {
                // setCompteur(compteur++);
                updateCompteur.current++;
            }}
            />
            <Button title="-" onPress={() => {
                // setCompteur(compteur--);
                updateCompteur.current--;
            }}
            />
            <Button title="Reset" onPress={() => {
                // setCompteur(compteur = 0);
                updateCompteur.current = 0;
            }}
            />
            <Button title="Maj" onPress={() => {
                setCompteur(updateCompteur.current);
            }}
            />
            {/* <View>{compteur}</View> */}
            <View>{compteur}</View>
        </View>
    )
}

export function ShoppingList() {
    const inputRef = useRef();
    const [isFormValidated, setFormValidation] = useState(false);
    const [items, dispatch] = useReducer((state: string[], action: { type: string, payload?: string, index?: number }) => {
      switch (action.type) {
        case 'add':
          state.push(action.payload ?? ''); return state;
        case 'remove': // keep every item except the one we want to remove
          return state.filter((_, index) => index != action.index);
        default:
          return state;
      }
    }, []);
    function handleSubmit(e: any) {
      e.preventDefault(); dispatch( {type: 'add', payload: inputRef.current?.value});
      inputRef.current!.value = ''; setFormValidation(!isFormValidated);
    }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} />
          <Button title="Add" onPress={handleSubmit}></Button>
        </form>
        <ul> {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => dispatch({ type: 'remove', index })}>X</button>
          </li> ))}
        </ul>
      </> );
  }


export function ExoUseEffect() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div>
        {isLoading ? <Text>Loading...</Text> : <Text>Content loaded !</Text>}
      </div>
    );
}


export function useInterval(callback:any, delay:any) {
    const savedCallback = useRef()
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])
    // Set up the interval.
    useEffect(() => {
      if (delay !== null) {
        let id = setInterval(() => {
          savedCallback.current()
        }, delay)
        return () => clearInterval(id)
      }
    }, [delay])
  }

  export function App() {
    const [count, setCount] = useState(0)
    useInterval(() => {
      setCount(count + 1)
    }, 1000)
    return <Text style={{ fontSize: 120 }}>{count}</Text>
  }
  

//   export function StackNav({navigation}) {
    
//     return (
//         <View>
//             <Button title="Go to HelloScreen" onPress={() => navigation.navigate('Hello')}/>
//         </View>
//     )
// }

// function HelloScreen({route, navigation}) {
//     return (
//       <View>
//         <Text>Hello!</Text>
//       </View>
//     );
//   }

