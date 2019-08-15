import React from 'react';
import './App.css';
import Button from '../Button/Button';
import Display from '../Display/Display';

function App() {


  function handleNumber(number){
      console.log(number);
  }

  return (
    <div className="App">

      <Display formula="10+20" current="30" />

      <section className="Keyboard">
        <Button type="controller" value="CE"/>
        <Button type="controller" value="C"/>
        <Button type="controller" value="←"/>
        <Button type="operator" value="%"/>

        <Button type="number" onClick={handleNumber} value="7"/>
        <Button type="number" onClick={handleNumber} value="8"/>
        <Button type="number" onClick={handleNumber} value="9"/>
        <Button type="operator" value="X"/>

        <Button type="number" onClick={handleNumber} value="4"/>
        <Button type="number" onClick={handleNumber} value="5"/>
        <Button type="number" onClick={handleNumber} value="6"/>
        <Button type="operator" value="-"/>

        <Button type="number" onClick={handleNumber} value="1"/>
        <Button type="number" onClick={handleNumber} value="2"/>
        <Button type="number" onClick={handleNumber} value="3"/>
        <Button type="operator" value="+"/>

        <Button type="controller" value="±"/>
        <Button type="number" onClick={handleNumber} value="0"/>
        <Button type="controller" value=","/>
        <Button type="operator" value="="/>
      </section>

    </div>
  );
}

export default App;