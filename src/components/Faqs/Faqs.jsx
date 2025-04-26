import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Faqs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className='max-w-[1320px] max-[940px]:flex-col m-auto max-[1360px]:mx-[20px] mt-[80px] gap-[73px] flex items-center justify-center' style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
      <div className='max-[940px]:order-2' style={{ flex: 1, minWidth: '300px' }}>
				<h2 className='max-[480px]:text-center max-[480px]:text-[30px] text-["Poppins] mb-[32px] leading-[120%] font-semibold text-[48px] text-[rgba(26,26,26,1)] '>Welcome, Let’s Talk <br className='max-[480px]:hidden'/> About Our Ecobazar</h2>
        <Accordion className='mb-[12px] rounded-[6px] bg-[rgba(242,242,242,1)]' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className='max-[400px]:text-[10px]' component="span" sx={{ width: '100%', flexShrink: 0 }}>
						In elementum est a ante sodales iaculis.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
						Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='mb-[12px] rounded-[6px] bg-[rgba(242,242,242,1)]' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className='max-[400px]:text-[10px]' component="span" sx={{ width: '100%', flexShrink: 0 }}>
						Etiam lobortis massa eu nibh tempor elementum.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
              varius pulvinar diam eros in elit. Pellentesque convallis laoreet
              laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='mb-[12px] rounded-[6px] bg-[rgba(242,242,242,1)]' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className='max-[400px]:text-[10px]' component="span" sx={{ width: '100%', flexShrink: 0 }}>
						In elementum est a ante sodales iaculis.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='mb-[12px] rounded-[6px] bg-[rgba(242,242,242,1)]' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className='max-[400px]:text-[10px]' component="span" sx={{ width: '100%', flexShrink: 0 }}>
						Aenean quis quam nec lacus semper dignissim.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
				<Accordion className='mb-[12px] rounded-[6px] bg-[rgba(242,242,242,1)]' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className='max-[400px]:text-[10px]' component="span" sx={{ width: '100%', flexShrink: 0 }}>
						Nulla tincidunt eros id tempus accumsan.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className='max-[940px]:order-1' style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
        <img src="bratan.png" alt="FAQ illustration" style={{ maxWidth: '100%' }} />
      </div>
    </section>
  );
}

export default Faqs;
