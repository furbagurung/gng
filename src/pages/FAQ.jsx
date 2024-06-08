import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <>
      <div className=" w-[600px] flex justify-center px-4 ">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-sf">
              Why choose a sulfate-free cushion foundation?
            </AccordionTrigger>
            <AccordionContent className="fonts-normal poppins-regular text-gray-400">
              Sulfate-free cushion foundations are gentler on the skin, reducing
              the risk of irritation and dryness. They help maintain the
              skin&apos;s natural moisture balance and are suitable for
              sensitive skin.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-sf">
              What are the benefits of mineral oil-free foundations?
            </AccordionTrigger>
            <AccordionContent className="fonts-normal poppins-regular text-gray-400">
              Mineral oil-free foundations prevent pore clogging and reduce the
              likelihood of breakouts. They are ideal for those with acne-prone
              or oily skin.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-sf">
              Can cushion foundations provide full coverage?
            </AccordionTrigger>
            <AccordionContent className="fonts-normal poppins-regular text-gray-400">
              Yes, many cushion foundations offer buildable coverage. By
              layering the product, you can achieve full coverage without a
              heavy or cakey finish.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-sf">
              How do I know if a product is cruelty-free?
            </AccordionTrigger>
            <AccordionContent className="fonts-normal poppins-regular text-gray-400">
              Look for certifications from recognized organizations like Leaping
              Bunny or PETA. These certifications ensure that the product has
              not been tested on animals at any stage of production.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-sf">
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
        </Accordion>
      </div>
    </>
  );
};
