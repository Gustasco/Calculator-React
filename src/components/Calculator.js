import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

function Calculator() {
    const [displayValue, setDisplayValue] = useState('0');

    const handleClick = (value) => {
        if (displayValue === '0') {
            setDisplayValue(value);
        } else {
            setDisplayValue(displayValue + value);
        }
    };

    const handleClear = () => {
        setDisplayValue('0');
    };

    const handleCalculate = () => {
        try {
            setDisplayValue(eval(displayValue).toString());
        } catch (error) {
            setDisplayValue('Error');
        }
    };

    return (
        <div className="calculator">
            <Display value={displayValue} />
            <div className="buttons">
                <div className="buttons">
                    <Button id="clear" value="AC" onClick={handleClear} />
                    <div className='part'>
                        <Button id="zero" value="0" onClick={handleClick} />
                        <Button id="one" value="1" onClick={handleClick} />
                        <Button id="two" value="2" onClick={handleClick} />
                        <Button id="add" value="+" onClick={handleClick} />
                    </div>
                    <Button id="three" value="3" onClick={handleClick} />
                    <Button id="four" value="4" onClick={handleClick} />
                    <Button id="five" value="5" onClick={handleClick} />
                    <Button id="subtract" value="-" onClick={handleClick} />
                    <div className='part'>
                        <Button id="six" value="6" onClick={handleClick} />
                        <Button id="seven" value="7" onClick={handleClick} />
                        <Button id="eight" value="8" onClick={handleClick} />
                        <Button id="multiply" value="*" onClick={handleClick} />
                    </div>
                    <div className='part'>
                        <Button id="nine" value="9" onClick={handleClick} />
                        <Button id="divide" value="/" onClick={handleClick} />
                        <Button id="decimal" value="." onClick={handleClick} />
                        <Button id="equals" value="=" onClick={handleCalculate} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
