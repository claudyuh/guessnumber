import {
  createStyles,
  Card,
  SimpleGrid,
  Button,
} from "@mantine/core";
import { useEffect, useState } from "react";
const useStyles = createStyles(theme => ({
  card: {
    width: "50%",
    "@media (max-width: 1000px)": {
        width: "100%",
        marginLeft:'25px'
    },
},

title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    padding:'25px',
    fontWeight: 600,
    fontSize: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: "1px solid grey",
    borderRadius: "5px",
    height: "50px",
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color:'black',
    borderRadius: theme.radius.md,
    height: 50,
    backgroundColor: '#c3cde0',
    overflow: 'hidden'
  },
}));

interface Iprops {
  getData : (inputNr: number) => any
}

let allowedKeys = ['1','2','3','4','5','6','7','8','9','Clear','0','Ok']

const NumberInput = ({getData}:Iprops) => {
  const [inputNr, setInputNr] = useState<string>("0")
  const { classes } = useStyles();
  
  // hook for keypress
  useEffect(()=>{
    const detectKey = (e:any) => {
      if([...allowedKeys, 'Enter', 'Backspace'].includes(e.key)){
        handleAddNr(e.key)
      }
    }
    document.addEventListener('keydown', detectKey, true)
    return () => {
      document.removeEventListener('keydown', detectKey, true)
    }
  })
  // clears the input
  const clear = () => {
    setInputNr("0")
  }
  //gives the number to the parent component
  const confirmNr = () => {
    getData(parseInt(inputNr))
  }

  const handleAddNr = (item:string) => {
    
    if(parseInt(inputNr+item) > 100){
      return setInputNr("100")
    }
    if(item === 'Clear' || item ==='Backspace') return clear()
    
    if(item === 'Ok' || item === 'Enter'){
      if(inputNr === '0'){
        return clear()
      }else{
        confirmNr()
        return clear()
      }
    }
    // if 0 sets the number to the input, else prevNr + currInput
    !parseInt(inputNr) ? setInputNr(item) : setInputNr(inputNr + item) 
  }
  
  return (
    <Card withBorder radius="md" className={classes.card}>
      <div className={classes.title}>{inputNr}</div>
      <SimpleGrid cols={3} mt="sm">
        {allowedKeys.map((item, ind) => {
          return (
            <Button key={ind} className={classes.item} onClick={() => handleAddNr(item)}>
                {item}
            </Button>
          );
        })}
      </SimpleGrid>
    </Card>
  );
};

export default NumberInput;
