import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
//State
function Counter() {
    const [count, setCount] = useState(0);
  
    const increment = () => {
        setCount(count + 1); 
    };

    const decrement  = () => {
        setCount(count - 1); 
    };
  
    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title=" Increment " onPress={increment} />
            <Button title=" Decrement " onPress={decrement} />
        </View>
    );
}

export default Counter;
