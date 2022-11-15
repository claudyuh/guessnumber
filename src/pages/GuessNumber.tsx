import { BackgroundImage, Button, Center, createStyles, Grid } from "@mantine/core";
import React, { useEffect, useState,FC } from "react";
import { useNavigate } from "react-router-dom";
import HistoryChart from "../components/HistoryChart";
import NumberInput from "../components/NumberInput";
import { useSearchParams } from 'react-router-dom';
import hintCalcultator from "../helpers/hintCalculator";
import bgImage from '../assets/25235.jpg'
const useStyles = createStyles(theme => ({
  container: {
    minHeight: '97vh'
  },
  instructions: {
    textAlign:'center', 
    fontSize: '20px',
    marginTop: '50px'
  }
}));

const GuessNumber:FC = () => {
  const [inputHistory, setInputHistory] = useState<number[]>([])
  const [hintHistory, setHintHistory] = useState<string[]>([])
  const [randomNr] = useState<number>((Math.floor(Math.random() * 100) + 1))
  const [searchParams] = useSearchParams();
  const { classes } = useStyles();

  let navigate = useNavigate();
  const getChildData = (nr: number) => {
    setInputHistory([nr, ...inputHistory])
  }
  
  useEffect(() => {
    navigate({search: `?max=${10-inputHistory.length}`})
    let query = parseInt(searchParams.get('max')!)
    
    if(inputHistory[0]===randomNr){
      return navigate(`/guessnumber/result?win=true`, 
      {state:
        {query}
      })
    }

    let response = hintCalcultator(randomNr, inputHistory[0], inputHistory[1], hintHistory[0] )
    if(inputHistory.length){
      setHintHistory([response, ...hintHistory])
    }
    if(query <= 1){
      navigate(`/guessnumber/result?win=false`)
    }
  }, [inputHistory])

  return (
    <BackgroundImage
        src={bgImage}
        radius="sm"
      >
    <div className={classes.container}>
      
      <Button mt={50} ml={50} onClick={() => navigate("/")}>Home</Button>
      <Grid mt={100}>
        <Grid.Col span={6}>
          <Center>
            <NumberInput getData = {getChildData}/>
          </Center>
        </Grid.Col>
        <Grid.Col span={6} >
          <HistoryChart inputHistory={inputHistory} hintArray={hintHistory}/>
        </Grid.Col>
      </Grid>
      <div className={classes.instructions}>
        Guess the random generated number, from 1 to 100 in just 10 attempts and look out for hints! Good luck!
      </div>
    </div>
    </BackgroundImage>
  );
};

export default GuessNumber;
