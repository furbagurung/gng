import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ArrowDown } from "lucide-react";

export const FAQ = () => {
  return (
    <>
      <div className=" w-[600px] flex justify-center  px-4 ">
        {/* <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-sf text-left">
              Why choose a sulfate-free cushion foundation?
            </AccordionTrigger>
            <AccordionContent className="fonts-normal poppins-regular text-gray-400">
             
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-sf text-left">
              What are the benefits of mineral oil-free foundations?
            </AccordionTrigger>
            <AccordionContent className="fonts-normal poppins-regular text-gray-400">
              Mineral oil-free foundations prevent pore clogging and reduce the
              likelihood of breakouts. They are ideal for those with acne-prone
              or oily skin.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-sf text-left">
              Can cushion foundations provide full coverage?
            </AccordionTrigger>
            <AccordionContent className="fonts-normal poppins-regular text-gray-400">
              Yes, many cushion foundations offer buildable coverage. By
              layering the product, you can achieve full coverage without a
              heavy or cakey finish.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-sf text-left">
              How do I know if a product is cruelty-free?
            </AccordionTrigger>
            <AccordionContent className="fonts-normal poppins-regular text-gray-400">
              Look for certifications from recognized organizations like Leaping
              Bunny or PETA. These certifications ensure that the product has
              not been tested on animals at any stage of production.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-sf text-left">
              Is cushion foundation better than liquid or powder foundation?
            </AccordionTrigger>
            <AccordionContent className="fonts-normal poppins-regular text-gray-400">
              Whether cushion foundation is better than liquid or powder
              foundation depends on personal preference and skin type. Cushion
              foundations are praised for their convenience, natural finish, and
              added skincare benefits, making them a versatile option for many
              users.
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDown />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>
                {" "}
                Why choose a sulfate-free cushion foundation?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sulfate-free cushion foundations are gentler on the skin,
                reducing the risk of irritation and dryness. They help maintain
                the skin&apos;s natural moisture balance and are suitable for
                sensitive skin.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDown />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                {" "}
                What are the benefits of mineral oil-free foundations?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Mineral oil-free foundations prevent pore clogging and reduce
                the likelihood of breakouts. They are ideal for those with
                acne-prone or oily skin.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDown />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                {" "}
                How do I know if a product is cruelty-free?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Look for certifications from recognized organizations like
                Leaping Bunny or PETA. These certifications ensure that the
                product has not been tested on animals at any stage of
                production.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDown />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                {" "}
                Is cushion foundation better than liquid or powder foundation?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Whether cushion foundation is better than liquid or powder
                foundation depends on personal preference and skin type. Cushion
                foundations are praised for their convenience, natural finish,
                and added skincare benefits, making them a versatile option for
                many users.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};
