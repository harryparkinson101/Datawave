import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are the delivery options for your products?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer standard and express shipping options. Delivery times and prices will vary based on your location and the size of your order.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I return an item?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you need to return an item, please contact us within 14 days of receiving your order. We'll provide you with the necessary information and instructions for returning the item.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is your policy on warranties?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            All of our products come with a 1-year warranty. If you experience any issues with your product within this time, please contact us and we will assist you in resolving the issue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I change or cancel my order?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you need to change or cancel your order, please contact us as soon as possible. We'll do our best to accommodate your request, but we cannot guarantee that it will be possible if the order has already been processed and shipped.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What payment methods do you accept?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We accept all major credit cards and PayPal. If you need to use an alternative payment method, please contact us and we will do our best to accommodate your request.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I track my order?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Once your order has been shipped, you will receive a shipping confirmation email with a tracking number. You can use this number to track your order on the shipping carrier's website.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is your privacy policy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We take your privacy very seriously and are committed to protecting your personal information. Our privacy policy outlines how we collect, use, and share your information. You can find our full privacy policy on our website.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;