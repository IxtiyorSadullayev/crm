import React from 'react'
import {Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemButton, ListItemText, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useNavigate} from 'react-router-dom'
function AccardionElement({title, data}) {
    const navigate = useNavigate()
  return (
    // <div>AccardionElement</div>
    <Accordion style={{background: 'rgb(10, 38, 139)',boxShadow: 'initial', color: 'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {data.map(x=>{
                return <ListItem disablePadding key={x}>
                    <ListItemButton
                        onClick={()=> navigate('/dashboard/'+x.link)}
                    >
                        <ListItemText primary={x.text} />
                    </ListItemButton>
                </ListItem>
            })}
          </List>
        </AccordionDetails>
    </Accordion>
  )
}

export default AccardionElement